namespace ViewMain

open System.IO
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

  let defaultLines = 
    "-- Simple loop that count to 0\n" +
    " INBOX\n" +
    " COPYTO 0\n" +
    " JUMPZ b\n" +
    " JUMPN d\n" +
    "c:\n" +
    " JUMPZ b\n" +
    " OUTBOX\n" +
    " BUMPDN 0\n" +
    " JUMP c\n" +
    "d:\n" +
    " JUMPZ b\n" +
    " OUTBOX\n" +
    " BUMPUP 0\n" +
    " JUMP d\n" +
    "b:\n" +
    " OUTBOX\n" +
    "a:\n"

  let update (model : View.ViewModel.Model) (action : View.ViewModel.Action) =
    match action with
      | RunAction action -> processRunAction model action
      | InputAction inputAction -> processInputAction model inputAction
      | RegisterAction registerAction -> processRegisterAction model registerAction
      | WorkerAction instructionEvaluationResult -> 
        (*
        let (allStates, programStoppedReason) = run state
        let outputs =
            if allStates.Length > 0 then
                let lastState = allStates |> List.rev|> List.head
                lastState.Outputs
            else
                []

        let evaluationResult = {
            CauseOfStop = programStoppedReason;
            EvaluationStates = allStates;
            CurrentlySelectedState = allStates.Length - 1;
        }
        *)

        //evaluationResult
        Browser.window.console.log obj
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
                  [ 
                    classy "ide"
                    attribute "id" "ide"
                    hook 
                      "hook"
                      (HookHelper.CreateHook 
                        (fun node propName otherNode ->
                          let codeConfig = 
                            createObj 
                              [
                                "theme" ==> "monokai"
                                "value" ==> defaultLines
                                "mode" ==> "hmrp"
                                "lineNumbers" ==> true
                              ]
                          if not <| unbox(Browser.window?HasInit) then
                            Browser.window.setTimeout(
                              (fun w ->
                                Browser.window?HasInit <- true
                                Browser.window?myCodeMirror <- Browser.window?CodeMirror(node, codeConfig) |> ignore
                                Browser.window
                              ),
                              0) |> ignore
                          else
                            () ))
                  ]
                  []
              ]
          ]
      ]

  let main argv =
    let initModel = createDefaultModel()
    createSimpleApp initModel view update Virtualdom.createRender
      |> withStartNodeSelector "#app"
      |> withProducer (fun a -> 
          Browser.window?evaluatorWorkerCallback <- (fun b -> unbox (a(WorkerAction b))))
      |> start
    
    let returnCode = 0 in returnCode