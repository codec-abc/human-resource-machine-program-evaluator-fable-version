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
      result <- List.append result [inputUIModel.UIIndex]
    result
    
  let processRunAction model =
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
    Browser.window.console.log programStoppedReason
    {
      model with
        CauseOfStop = Some programStoppedReason;
        Outputs = outputs;
    }

  let viewRun model =
    let outputs = 
      model.Outputs 
      |> List.map (fun a -> a.ToString())
      |> List.fold (fun acc elem -> acc + " " + elem) ""
    
    let myDiv =
      match model.CauseOfStop with
      | Some endCauseValue ->
        [
          h3
            []
            [text "Termination cause: "]
          text endCauseValue
          h3
            []
            [text "Outputs: "]
          text outputs
        ]
      | None -> []
    
    div
      []
      myDiv 