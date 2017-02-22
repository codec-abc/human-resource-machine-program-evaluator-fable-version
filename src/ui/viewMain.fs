namespace ViewMain

open System.IO
open Hmrp

open Fable.Core 
open Fable.Import
open Fable.Core.JsInterop

open Fable.Arch
open Fable.Arch.App
open Fable.Arch.Html

open View.ViewModel
open View.RegisterUI

module ViewMain =
  // Documentation : https://github.com/fable-compiler/
  // Documentation : http://fable.io/fable-arch/#/sample/hello-world

  let update (model : View.ViewModel.Model) (action : View.ViewModel.Action) =
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
      | NotImplemented ->
          Browser.window.alert "TODO"
          model

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