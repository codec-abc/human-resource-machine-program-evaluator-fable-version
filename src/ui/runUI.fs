namespace View

open System.IO
open Hmrp
open Fable.Core 
open Fable.Import
open Fable.Core.JsInterop
open Fable.Arch
open Fable.Arch.App
open Fable.Arch.Html
open ViewModel

module RunUI =

  let private getLines () =
    let mutable lines = []
    let w = Browser.window?myCodeMirror?doc
    w?eachLine (fun l ->
      let lineText = l?text
      lines <- List.append lines [lineText.ToString()]) |> ignore
    lines

  let private buildRegisters model = 
    let mutable result = []
    for register in model.Registers do
      let modelRegister : HmrpEvaluator.Register = 
        if register.Enabled then
          {
            Index = register.UIIndex;
            RegisterValue = Some register.Value
          }
        else
          {
            Index = register.UIIndex;
            RegisterValue = None
          }    
      result <- List.append result [modelRegister]
    result
  
  let private buildInputs model =
    let mutable result = []
    for inputUIModel in model.Inputs do
      result <- List.append result [inputUIModel.Value]
    result

  let private handleChangeBrowsedState obj model =
    let mutable newIndex : int = (Browser.window?parseInt (unbox(obj?target?value) : int)) :?> int
    newIndex <- newIndex - 1

    if newIndex < 0 || newIndex >= model.EvaluationResult.Value.EvaluationStates.Length || newIndex <> newIndex then
      model
    else
      let evalResult = Some <| {
        model.EvaluationResult.Value with
          CurrentlySelectedState = newIndex;
      }

      {
        model with
          EvaluationResult = evalResult;
      }
  
  let private handleRun model =
    let lines = getLines()
    let registers = buildRegisters model
    let inputs = buildInputs model

    let result = createObj [
      "lines" ==> toJson lines
      "registers" ==> toJson registers
      "inputs" ==> toJson inputs
    ]

    Browser.window?hmrpEvaluatorWebWorker?postMessage(result)
    model

  let processRunAction model action =
    match action with
      | ChangeBrowsedState obj -> handleChangeBrowsedState obj model
      | Run -> handleRun model

  let viewRun model =
    match model.EvaluationResult with
      | None -> div [] []
      | Some evalResult ->
          let selectedState = evalResult.EvaluationStates.[evalResult.CurrentlySelectedState]
          let outputs = HmrpEvaluator.listToString selectedState.Outputs 
          let inputs = HmrpEvaluator.listToString selectedState.Inputs
          let humanValueAsStr =
            match selectedState.HumanValue with
            | None -> "None"
            | Some x -> x.ToString()
          
          let myDiv =
              [
                h3
                  []
                  [text "Stop cause: "]
                text evalResult.CauseOfStop
                h3
                  []
                  [text "States"]
                input
                  [
                    attribute "type" "range"
                    attribute "min" "1"
                    attribute "max" ((evalResult.EvaluationStates.Length).ToString())
                    attribute "value" ((evalResult.CurrentlySelectedState + 1).ToString())
                    onInput (fun a -> RunAction <| ChangeBrowsedState a)
                    hook 
                      "hook"
                      (HookHelper.CreateHook (fun node propName ->
                        node?max <- ((evalResult.EvaluationStates.Length).ToString())
                        node?value <- ((evalResult.CurrentlySelectedState + 1).ToString())
                        )
                      )
                  ]
                br []
                text <| "State "
                input
                  [
                    attribute "type" "number"
                    attribute "min" "1"
                    attribute "max" ((evalResult.EvaluationStates.Length).ToString())
                    attribute "value" <| (evalResult.CurrentlySelectedState + 1).ToString() 
                    onChange (fun a -> RunAction <| ChangeBrowsedState a)
                    hook 
                      "hook2"
                      (HookHelper.CreateHook (fun node propName ->
                        node?max <- ((evalResult.EvaluationStates.Length).ToString())
                        node?value <- ((evalResult.CurrentlySelectedState + 1).ToString())
                        )
                      )
                  ]
                text <| "/" + ((evalResult.EvaluationStates.Length).ToString())
                h3
                  []
                  [text "Outputs: "]
                text outputs
                h3
                  []
                  [text "Inputs: "]
                text inputs
                h3
                  []
                  [text "Human Value: "]
                text humanValueAsStr
                h3
                  []
                  [text "Current Line: "]
                text <| (selectedState.CurrentInstructionLine + 1).ToString()
                // TODO : add Registers ?
              ]
          div [] myDiv 