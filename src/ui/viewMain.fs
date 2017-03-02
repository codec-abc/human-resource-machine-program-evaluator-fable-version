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
open View.HelpUI
open Hmrp
open Hmrp.HmrpEvaluator

module ViewMain =

  let defaultLines = 
    "-- Simple loop that counts to 0\n" +
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
      | SelectedPanelChangedAction newPanel ->
        {
          model with
            SelectedPanel = newPanel;
        }
      | WorkerAction (instructionEvaluationResult : InstructionEvaluationResult) -> 
        let newModel = 
          match instructionEvaluationResult with
            | End str ->
              let evaluationResult = {
                model.EvaluationResult with
                  CauseOfStop = Some str;
              }

              {
                model with
                  EvaluationResult = evaluationResult;
                  IsRunning = false;
              }
            | NewState newState ->
              let evaluationResult = {
                model.EvaluationResult with
                  EvaluationStates = List.append model.EvaluationResult.EvaluationStates [newState];
                  CurrentlySelectedState = model.EvaluationResult.EvaluationStates.Length;
              }

              {
                model with
                  EvaluationResult = evaluationResult;
              }
        newModel

  let private generateMenu model =

    let helpMenuClasses = 
      match model.SelectedPanel with
        | Help -> "active item"
        | _ -> "item"
    
    let registerMenuClasses = 
      match model.SelectedPanel with
        | Register -> "active item"
        | _ -> "item"
    
    let inputsMenuClasses = 
      match model.SelectedPanel with
        | Input -> "active item"
        | _ -> "item"

    let debugMenuClasses = 
      match model.SelectedPanel with
        | Debug -> "active item"
        | _ -> "item"

    div 
      [classy "ui thin left vertical inverted labeled visible sidebar menu"]
      [
        a 
          [
            classy helpMenuClasses
            onMouseClick (fun e -> SelectedPanelChangedAction Help)
          ]
          [
            i 
              [
                classy "fa fa-question-circle block layout" 
                attribute "style" "font-size: large;width: 2em;"
              ] 
              []
            text "Help"
          ]
        
        a 
          [
            classy registerMenuClasses
            onMouseClick (fun e -> SelectedPanelChangedAction Register)
          ]
          [
            i 
              [
                classy "block layout fa fa-cube" 
                attribute "style" "font-size: large;width: 2em;"
              ]
              []
            text "Registers"
          ]
        a 
          [
            classy inputsMenuClasses
            onMouseClick (fun e -> SelectedPanelChangedAction Input)
          ]
          [
            i 
              [
                classy "block layout fa fa-arrow-right" 
                attribute "style" "font-size: large;width: 2em;"
              ] 
              []
            text "Inputs"
          ]
        a 
          [
            classy debugMenuClasses
            onMouseClick (fun e -> SelectedPanelChangedAction Debug)
          ]
          [
            i 
              [
                classy "block layout fa fa-bug" 
                attribute "style" "font-size: large;width: 2em;"
              ]
              []
            text "Run/Debug"
          ]
      ]

  let private generateRegisterUI model =
    div
      [ 
        classy "column"
        attribute "style" "height: 100%;overflow: auto"
      ]
      [
        div
          [ classy "ui" ]
          [
            h2 
              []
              [text "Registers"]
            text "Add a register: "
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
            br []
            table
              [
                classy "ui table"
              ]
              (List.append
                [
                  thead 
                    []
                    [
                      tr
                        []
                        [
                          th 
                            []
                            [text "Index"]
                          th
                            []
                            [text "Enabled"]
                          th
                            []
                            [text "Value"]
                          th
                            []
                            [text "Move"]
                          th
                            []
                            [text "Delete"]
                        ]
                    ] 
                ]
                (viewRegisters model))
          ]
      ]
  
  let private generateInputUI model =
    div
      [
        attribute "id" "leftColumn"
        classy "column"
        attribute "style" "height: 100%;overflow: auto"
      ]
      [
        div
          [
            classy "ui"
          ]
          [
            h2
              []
              [text "Inputs"]
            text "Add an input: "
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
            br []
            table
              [
                classy "ui table"
              ]
              (List.append
                [
                  thead 
                    []
                    [
                      tr
                        []
                        [
                          th 
                            []
                            [text "Index"]
                          th
                            []
                            [text "Value"]
                          th
                            []
                            [text "Move"]
                          th
                            []
                            [text "Delete"]
                        ]
                    ] 
                ]
                (viewInputs model))
          ]
      ]

  let generateDebugUI model =
    let runButtonClass =
      match model.IsRunning with
        | false -> classy "fa fa-play"
        | true -> classy "fa fa-stop"

    div
      [
        attribute "id" "leftColumn"
        classy "column"
        attribute "style" "height: 100%;overflow: auto"
      ]
      [
        div
          [classy "ui"]
          [
            h2
              []
              [text "Run/Debug"]
            text "Run the program: "
            button
              [
                classy "ui button"
                onMouseClick (fun e -> RunAction Run)
              ]
              [
                i
                  [
                    runButtonClass
                    attribute "aria-hidden" "true"
                  ]
                  []
              ]
            br []
            br []
            (viewRun model)
          ]
      ]

  let private generateCodeUI model =
    div
      [ 
        classy "column" 
        attribute "style" "padding: 0;"
      ]
      [
        div
          [
            classy "ui"
          ]
          [
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

  let getSelectedPanelUI model =
    match model.SelectedPanel with
      | Help -> generateHelpUI model
      | Debug -> generateDebugUI model
      | Register -> generateRegisterUI model
      | Input -> generateInputUI model

  let view model =
    div
      [
        attribute "style" "height:100%;"
      ]
      [
        generateMenu model
        div
          [ 
            classy "pusher"
            attribute "id" "content"
          ]
          [
            div 
              [
                classy "ui two column grid container"
                attribute "id" "innerContainer"
                attribute "style" "margin-bottom: 0;margin-top: 0;"
              ]
              [
                getSelectedPanelUI model
                generateCodeUI model
            ]
          ]
      ]

  let main argv =
    let initModel = createSimpleLoopModel()
    createSimpleApp initModel view update Virtualdom.createRender
      |> withStartNodeSelector "#app"
      |> withProducer 
          (fun a -> 
            Browser.window?evaluatorWorkerCallback <-
              (fun b -> 
                let result = ofJson<InstructionEvaluationResult> b
                unbox (a(WorkerAction result))
              )
          )
      |> start
    
    let returnCode = 0 in returnCode