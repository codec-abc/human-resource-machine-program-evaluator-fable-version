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

  let lines = 
    [|"-- HUMAN RESOURCE MACHINE PROGRAM --";
    "   a:";
    "  b:";
    "    INBOX   ";
    "    COPYTO   0";
    "    OUTBOX  ";
    "    COPYFROM 0";
    "    JUMPN  d";
    "  c:";
    "    JUMPZ  a";
    "    BUMPDN   0";
    "    OUTBOX  ";
    "    COPYFROM 0";
    "    JUMP   c";
    "  d:";
    "  e:";
    "    BUMPUP   0";
    "    OUTBOX  ";
    "    COPYFROM 0";
    "    JUMPZ  b";
    "    JUMP   e"|]

  let runTestProgram () = 
    printfn "Start"
    let programLines = HmrpEvaluator.stringArrayToProgramList lines
    //printProgramLines programLines
    let initialMachineState = 
      {
        HmrpEvaluator.defaultMachineState with
          ProgramLines = programLines
          Inputs = [1;3;4;-2]
          Registers = HmrpEvaluator.buildEmptyRegisters 6
      }
    
    let (states, stopReason) = HmrpEvaluator.run initialMachineState
    try 
      let lastState = List.last states
      printfn "last state is:"
      HmrpEvaluator.printState lastState
    with 
      | _ -> ()

    printfn "Program has stopped to run because:\n%s" stopReason
    //printStates states
    let returnCode = 0 in returnCode

  type Model = string

  type Actions =
    | ChangeInput of string

  // Update
  let update model msg =
    printfn "%s" (msg.ToString())
    match msg with
      //| ChangeInput str -> str
      | _ -> model

  // View
  //let inline onInput x = onEvent "oninput" (fun e -> x (unbox e?target?value)) 
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
                    onMouseClick (fun e -> unbox(Browser.window.alert("TODO")))
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
                    onMouseClick (fun e -> unbox(Browser.window.alert("TODO")))
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
                  [classy "ui button"]
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

    createSimpleApp "" view update Virtualdom.createRender
      |> withStartNodeSelector "#app"
      |> start
    
    let returnCode = 0 in returnCode
