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
    Value : int option;
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
    | UpdateRegisterState of int * obj // index * enable/disabled state
    | NotImplemented

  let update model action =
    match action with
      | CreateRegister -> 
          let newUIIndex = 
            if model.Registers.Length > 0 then
              model.Registers |> List.map (fun a -> a.UIIndex) |> List.max
            else
              0
          printfn "Should create a new register"
          let newRegister = {
            Index = 0;
            Value = None;
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
          Browser.window.alert "TODO"
          model
      | NotImplemented ->
          Browser.window.alert "TODO"
          model

  let viewSingleRegister register =
    let inputAttributes = 
      if Option.isSome register.Value then
        [ 
          attribute "type" "number"
          Style [
            ("width", "50px")
          ]
        ]
      else
        [ 
          attribute "type" "number" 
          attribute "disabled" "true"
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
