namespace ViewMain

open System.IO
open Hmrp

open Fable.Core 
open Fable.Import
open Fable.Core.JsInterop

open Fable.Arch
open Fable.Arch.App
open Fable.Arch.Html

module ViewMain =
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
    | RemoveRegisterValue of int //index
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
            List.filter (fun a -> a.UIIndex <> index) model.Registers
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
              List.filter (fun a -> a.UIIndex <> index) model.Registers
              |> List.append [newElem]
              |> List.sortWith (fun a b -> a.UIIndex - b.UIIndex)

            {
              model with
                Registers = newRegisters
            }
      | RemoveRegisterValue index ->
        let myElem = model.Registers.[index]
        let otherRegisters = List.filter (fun a -> a.UIIndex <> index) model.Registers
        let updatedList = 
          otherRegisters 
          |> List.map (fun e -> if e.UIIndex <= index then e else { e with UIIndex = e.UIIndex - 1} )
        {
          model with
            Registers = updatedList
        }
      | NotImplemented ->
          Browser.window.alert "TODO"
          model

  let viewSingleRegister register =
    let inputValueAttributes = 
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
    
    let inputStateAttributes =
      if register.Enabled then
        [
          attribute "type" "checkbox"
          property "checked" "true"
          onChange (fun a -> UpdateRegisterState (register.UIIndex, a))
        ]
      else
        [
          attribute "type" "checkbox"
          onChange (fun a -> UpdateRegisterState (register.UIIndex, a))
        ]

    div
      []
      [
        text <| "R" + register.UIIndex.ToString() + ": "
        text "Value: "
        input inputStateAttributes
        input inputValueAttributes
        button
          [
            onMouseClick (fun a -> RemoveRegisterValue register.UIIndex)
          ]
          [
            i
              [
                  classy "fa fa-trash-o" 
                  attribute "aria-hidden" "true"
              ]
              []
          ]
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

  let main argv =
    let initModel = createDefaultModel()
    createSimpleApp initModel view update Virtualdom.createRender
      |> withStartNodeSelector "#app"
      |> start
    
    let returnCode = 0 in returnCode