namespace View

open System.IO
open Hmrp
open Hmrp.HmrpEvaluator
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

    if newIndex < 0 || newIndex >= model.EvaluationResult.EvaluationStates.Length || newIndex <> newIndex then
      model
    else
      let evalResult = {
        model.EvaluationResult with
          CurrentlySelectedState = newIndex;
      }

      {
        model with
          EvaluationResult = evalResult;
      }
  
  let private handleRun model =
    if model.IsRunning <> true then
      let lines = getLines()
      let registers = buildRegisters model
      let inputs = buildInputs model
      let result = 
        createObj [
          "lines" ==> toJson lines
          "registers" ==> toJson registers
          "inputs" ==> toJson inputs
        ]

      Browser.window?hmrpEvaluatorWebWorker?postMessage(result) |> ignore
      {
        model with
          EvaluationResult = 
            {
              CauseOfStop = None;
              EvaluationStates = [];
              CurrentlySelectedState = 0;
            }
          IsRunning = true;
      }
    else
      Browser.window?hmrpEvaluatorWebWorker?postMessage("STOP") |> ignore
      {
        model with
          IsRunning = false;
      }

  let processRunAction model action =
    match action with
      | ChangeBrowsedState obj -> handleChangeBrowsedState obj model
      | Run -> handleRun model

  let private row xs = 
    tr [] [ for x in xs -> td [] [x]]

  let private getRegistersUILines (aState : MachineState) =
    let registers = 
      aState.Registers
      |> Array.toList 
      |> List.sortBy (fun register -> register.Index)

    let optionToStr = (fun a ->
      match a with
        | None -> "None"
        | Some b -> b.ToString())

    let result = 
      registers 
        |> List.map (fun st -> 
          row [text (st.Index.ToString()); text (optionToStr st.RegisterValue)])
    
    result

  let private titleAttribute = attribute "style" "font-weight:bold;font-size: 1.2rem"

  let viewRun model =
    if model.EvaluationResult.EvaluationStates.Length > 0 && model.EvaluationResult.CurrentlySelectedState < model.EvaluationResult.EvaluationStates.Length then
      let selectedState = model.EvaluationResult.EvaluationStates.[model.EvaluationResult.CurrentlySelectedState]
      let outputs = HmrpEvaluator.listToString (List.ofArray selectedState.Outputs)
      let inputs = HmrpEvaluator.listToString (List.ofArray selectedState.Inputs)

      let humanValueAsStr = 
        match selectedState.HumanValue with
          | None -> "None"
          | Some x -> x.ToString()
      
      let causeOfStopAsStr = 
        match model.EvaluationResult.CauseOfStop with
          | None -> "Not stopped yet."
          | Some causeOfStop -> causeOfStop
      
      let head =
        thead
          []
          [
            tr
              []
              [
                th 
                  [] 
                  [text "Index "]
                th 
                  [] 
                  [text "Value "]
              ]
          ]

      let registersUI selectedState = 
            List.append
              [head]
              (getRegistersUILines selectedState)
      
      let myDiv =
          [
            div
              []
              [
                label [titleAttribute] [text "Stop cause: "]
                label [] [text causeOfStopAsStr]
              ]
            br []
            div
              []
              [label [titleAttribute] [text "States"]]
            br []
            div
              [classy "ui form"]
              [
                div
                  [classy "inline field"]
                  [
                    input
                      [ 
                        attribute "type" "range"
                        attribute "min" "1"
                        attribute "max" ((model.EvaluationResult.EvaluationStates.Length).ToString())
                        attribute "value" ((model.EvaluationResult.CurrentlySelectedState + 1).ToString())
                        onInput (fun a -> RunAction <| ChangeBrowsedState a)
                        hook 
                          "hook"
                          (HookHelper.CreateHook (fun node propName ->
                            node?max <- ((model.EvaluationResult.EvaluationStates.Length).ToString())
                            node?value <- ((model.EvaluationResult.CurrentlySelectedState + 1).ToString())
                            )
                          )
                      ]
                    input
                      [
                        attribute "type" "number"
                        attribute "min" "1"
                        attribute "max" ((model.EvaluationResult.EvaluationStates.Length).ToString())
                        attribute "value" <| (model.EvaluationResult.CurrentlySelectedState + 1).ToString() 
                        onChange (fun a -> RunAction <| ChangeBrowsedState a)
                        hook 
                          "hook2"
                          (HookHelper.CreateHook (fun node propName ->
                            node?max <- ((model.EvaluationResult.EvaluationStates.Length).ToString())
                            node?value <- ((model.EvaluationResult.CurrentlySelectedState + 1).ToString())
                            )
                          )
                      ]
                    label [] [text ("/" + (model.EvaluationResult.EvaluationStates.Length).ToString())]   
                ]
              ]
            br []
            div
              []
              [
                label [titleAttribute] [text "Outputs: "]
                label [] [text outputs]
              ]
            br []
            div
              []
              [
                label [titleAttribute] [text "Inputs: "]
                label [] [text inputs]
              ]
            br []
            div
              []
              [
                label [titleAttribute] [text "Human Value: "]
                label [] [text humanValueAsStr]
              ]
            br []
            div
              []
              [
                label [titleAttribute] [text "Current Line: "]
                label [] [text ((selectedState.CurrentInstructionLine + 1).ToString())]
              ]
            br []
            h3
              []
              [text "Registers: "]
            table 
              [
                classy "ui table"
              ]
              (registersUI selectedState)
          ]
      div [] myDiv
    elif Option.isSome model.EvaluationResult.CauseOfStop then
      let causeOfStopAsStr = 
        match model.EvaluationResult.CauseOfStop with
          | None -> "This message should never appear."
          | Some causeOfStop -> causeOfStop

      div 
        [] 
        [
          label [titleAttribute] [text "Stop cause: "]
          label [] [text causeOfStopAsStr]
        ]
    else
      div [] []