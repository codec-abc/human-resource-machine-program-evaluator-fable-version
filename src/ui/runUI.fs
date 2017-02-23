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

  let getLines () =
    let mutable lines = []
    let w = Browser.window?myCodeMirror?doc
    w?eachLine (fun l ->
      let lineText = l?text
      lines <- List.append lines [lineText.ToString()]) |> ignore
    lines

  let buildRegisters model = 
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
  
  let buildInputs model =
    let mutable result = []
    for inputUIModel in model.Inputs do
      result <- List.append result [inputUIModel.Value]
    result
    
  let processRunAction model action =
    match action with
      | ChangeBrowsedState obj ->
        let newIndex : int =  (Browser.window?parseInt (unbox(obj?target?value) : int)) :?> int

        let evalResult = Some <| {
          model.EvaluationResult.Value with
            CurrentlySelectedState = newIndex;
        }

        {
          model with
            EvaluationResult = evalResult;
        }
      | Run ->
        let lines = getLines()
        let parsedLines = HmrpEvaluator.stringListToProgramList lines
        let programInitialState = HmrpEvaluator.defaultMachineState
        let registers = buildRegisters model
        let inputs = buildInputs model

        let state = {
          programInitialState with
            Inputs = inputs;
            Registers = registers;
            ProgramLines = parsedLines;
        }
        let (allStates, programStoppedReason) = HmrpEvaluator.run state
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

        {
          model with
            EvaluationResult = Some evaluationResult;
        }

  let viewRun model =
    match model.EvaluationResult with
      | None -> div [] []
      | Some evalResult ->
          let selectedState = evalResult.EvaluationStates.[evalResult.CurrentlySelectedState]
          printfn "test"
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
                    attribute "min" "0"
                    attribute "max" ((evalResult.EvaluationStates.Length - 1).ToString())
                    attribute "value" (evalResult.CurrentlySelectedState.ToString())
                    onChange (fun a -> RunAction <| ChangeBrowsedState a)
                  ]
                br []
                text <| "State " + (evalResult.CurrentlySelectedState.ToString()) + "/" + ((evalResult.EvaluationStates.Length - 1).ToString())
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
                text <| selectedState.CurrentInstructionLine.ToString()
                // TODO : add Registers ?
              ]
          div [] myDiv 