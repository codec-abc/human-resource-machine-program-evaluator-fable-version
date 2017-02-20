namespace Main

open System.IO
open Hmrp
open Fable.Core 
open Fable.Import
open Fable.Core.JsInterop

module Main =

    let lines = 
        [|"-- HUMAN RESOURCE MACHINE PROGRAM --";
        "   a:";
        "    b:";
        "        INBOX   ";
        "        COPYTO   0";
        "        OUTBOX  ";
        "        COPYFROM 0";
        "        JUMPN    d";
        "    c:";
        "        JUMPZ    a";
        "        BUMPDN   0";
        "        OUTBOX  ";
        "        COPYFROM 0";
        "        JUMP     c";
        "    d:";
        "    e:";
        "        BUMPUP   0";
        "        OUTBOX  ";
        "        COPYFROM 0";
        "        JUMPZ    b";
        "        JUMP     e"|]

    let runTestProgram = 
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



    [<EntryPoint>]
    let main argv =
        printfn "Start"

        let addInputButton = Browser.window.document.getElementById("AddInput")
        let onAddInputButtonClicked = (fun e -> Browser.window.alert "onAddButtonClicked")
        addInputButton.addEventListener("click", unbox(onAddInputButtonClicked)) |> ignore

        let addRegisterButton = Browser.window.document.getElementById("AddRegister")
        let onAddRegisterButtonClicked = (fun e -> Browser.window.alert "onAddRegisterClicked")
        addRegisterButton.addEventListener("click", unbox(onAddRegisterButtonClicked)) |> ignore

        let runButton = Browser.window.document.getElementById("RunButton")
        let onRunButtonClicked = (fun e -> Browser.window.alert "onRunButtonClicked")
        runButton.addEventListener("click", unbox(onRunButtonClicked)) |> ignore

        let returnCode = 0 in returnCode
