namespace Main

open System.IO
open Hmrp

open Fable.Core 
open Fable.Import
open Fable.Core.JsInterop

open Fable.Arch
open Fable.Arch.App
open Fable.Arch.Html

module Main =

  // Documentation : https://github.com/fable-compiler/
  // Documentation : http://fable.io/fable-arch/#/sample/hello-world

  type Register = {
    Index : int;
    Enabled : bool;
    Value : int;
    UIIndex : int;
  }

  type Model = {
    Registers : Register list;
    Inputs : int list;
    Outputs : int list;
    CauseOfStop : string option;
  }

  let createDefaultModel () =
    {
      Registers = [];
      Inputs = [];
      Outputs = [];
      CauseOfStop = None;
    }

  type Actions =
    | CreateRegister
    | CreateInput
    | Run
    | UpdateRegisterState of int * obj // index * enable/disabled
    | UpdateRegisterValue of int * obj // index * value
    | NotImplemented

  let update model action =
    match action with
      | CreateRegister -> 
          let newUIIndex = 
            if model.Registers.Length > 0 then
              let max = 
                model.Registers 
                |> List.map (fun a -> a.UIIndex) 
                |> List.max

              max + 1
            else
              0
          let newRegister = {
            Index = 0;
            Value = 0;
            Enabled = false;
            UIIndex = newUIIndex;
          }
          { 
            model with
              Registers = List.append model.Registers [newRegister]
          }
      | Run -> 
          printfn "Should run"
          model
      | CreateInput -> 
          printfn "Should create input"
          model
      | UpdateRegisterState (index, obj) ->
          let isChecked : bool = (obj?srcElement?checked).ToString() = "true"
          let myElem = model.Registers.[index]
          let newElem = {
            myElem with
              Enabled = isChecked;
          }
          
          let newRegisters = 
            List.filter (fun a -> a <> myElem) model.Registers
            |> List.append [newElem]
            |> List.sortWith (fun a b -> a.UIIndex - b.UIIndex)
          {
            model with
              Registers = newRegisters
          }
      | UpdateRegisterValue(index, obj) ->
          let strValue =  (obj?srcElement?value).ToString()
          if strValue = "" then
            model
          else
            let myElem = model.Registers.[index]
            let newElem = {
              myElem with
                Value = int strValue;
            }
            let newRegisters = 
              List.filter (fun a -> a <> myElem) model.Registers
              |> List.append [newElem]
              |> List.sortWith (fun a b -> a.UIIndex - b.UIIndex)

            {
              model with
                Registers = newRegisters
            }
      | NotImplemented ->
          Browser.window.alert "TODO"
          model

  let viewSingleRegister register =
    let inputAttributes = 
      let onRegisterValueChange = onChange (fun a -> UpdateRegisterValue (register.UIIndex, a))
      if register.Enabled then
        [ 
          onRegisterValueChange
          attribute "type" "number"
          attribute "value" (register.Value.ToString())
          Style [
            ("width", "50px")
          ]
        ]
      else
        [ 
          onRegisterValueChange
          attribute "type" "number" 
          attribute "disabled" "true"
          attribute "value" (register.Value.ToString())
          Style [
            ("width", "50px")
          ]
        ]

    div
      []
      [
        text ""
        input
          [
            attribute "type" "checkbox"
            onChange (fun a -> UpdateRegisterState (register.UIIndex, a))
          ]
        text "Value: "
        input inputAttributes     
      ]

  let viewRegisters model = 
    List.map (fun e -> viewSingleRegister e)  model.Registers

  let view model =
    div
      [ classy "ui two column stackable grid" ]
      [
        div
          [ classy "three wide column"]
          [
            div
              [ classy "ui segment" ]
              [
                text "Registers:"
                button
                  [ 
                    classy "ui button"
                    onMouseClick (fun e -> CreateRegister)
                  ]
                  [
                    i
                      [
                        classy "fa fa-plus"
                        attribute "aria-hidden" "true"
                      ]
                      []
                  ]
                div
                  []
                  (viewRegisters model)
              ]
              
          ]
        div
          [ classy "three wide column" ]
          [
            div
              [
                classy "ui segment"
              ]
              [
                text "Inputs:"
                button
                  [ 
                    classy "ui button"
                    onMouseClick (fun e -> CreateInput)
                  ]
                  [
                    i
                      [
                        classy "fa fa-plus"
                        attribute "aria-hidden" "true"
                      ]
                      []
                  ]
              ]
          ]
        div
          [ classy "seven wide column" ]
          [
            div
              [classy "ui segment"]
              [
                text "Code"
                br []
                div
                  [ attribute "id" "ide"]
                  []
              ]
          ]
        div
          [classy "three wide column"]
          [
            div
              [classy "ui segment"]
              [
                text "Run & Output"
                br []
                button
                  [
                    classy "ui button"
                    onMouseClick (fun e -> Run)
                  ]
                  [
                    i
                      [
                        classy "fa fa-play"
                        attribute "aria-hidden" "true"
                      ]
                      []
                  ]
              ]
          ]
      ]

  [<EntryPoint>]
  let main argv =
    let initModel = createDefaultModel()
    createSimpleApp initModel view update Virtualdom.createRender
      |> withStartNodeSelector "#app"
      |> start
    
    let returnCode = 0 in returnCode
