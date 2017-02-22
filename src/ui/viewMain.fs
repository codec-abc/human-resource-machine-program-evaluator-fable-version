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
open View.InputUI
open View.RunUI


module ViewMain =
  // Documentation : https://github.com/fable-compiler/
  // Documentation : http://fable.io/fable-arch/#/sample/hello-world

  let update (model : View.ViewModel.Model) (action : View.ViewModel.Action) =
    match action with
      | Run -> processRunAction model
      | InputAction inputAction -> processInputAction model inputAction
      | RegisterAction registerAction -> processRegisterAction model registerAction

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
                    onMouseClick (fun e -> RegisterAction CreateRegister)
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
                    onMouseClick (fun e -> InputAction CreateInput)
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
                  (viewInputs model) 
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
                (viewRun model)
              ]
          ]
      ]

  let main argv =
    let initModel = createDefaultModel()
    createSimpleApp initModel view update Virtualdom.createRender
      |> withStartNodeSelector "#app"
      |> start
    
    let returnCode = 0 in returnCode