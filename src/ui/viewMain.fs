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

  let update (model : View.ViewModel.Model) (action : View.ViewModel.Action) =
    match action with
      | RunAction action -> processRunAction model action
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
                h2 
                  []
                  [text "Registers:"]
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
                h2
                  []
                  [text "Inputs:"]
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
          [classy "three wide column"]
          [
            div
              [classy "ui segment"]
              [
                h2
                  []
                  [text "Run & Output"]
                button
                  [
                    classy "ui button"
                    onMouseClick (fun e -> RunAction Run)
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
        div
          [ classy "seven wide column" ]
          [
            div
              [classy "ui segment"]
              [
                h2
                  []
                  [text "Code"]
                div
                  [ attribute "id" "ide"]
                  []
              ]
          ]
      ]

  let main argv =
    let initModel = createDefaultModel()
    createSimpleApp initModel view update Virtualdom.createRender
      |> withStartNodeSelector "#app"
      |> start
    
    let returnCode = 0 in returnCode