namespace Main

open System.IO
open Hmrp

module Main =

    [<EntryPoint>]
    let main argv = 
        let lines = File.ReadAllLines "program.hrmp"
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