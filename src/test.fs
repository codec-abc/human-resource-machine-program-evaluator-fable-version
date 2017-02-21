namespace test

open System.IO
open Hmrp

module test =
  let lines = 
    [|"-- HUMAN RESOURCE MACHINE PROGRAM --";
      "   a:";
      "  b:";
      "  INBOX   ";
      "  COPYTO   0";
      "  OUTBOX  ";
      "  COPYFROM 0";
      "  JUMPN  d";
      "  c:";
      "  JUMPZ  a";
      "  BUMPDN   0";
      "  OUTBOX  ";
      "  COPYFROM 0";
      "  JUMP   c";
      "  d:";
      "  e:";
      "  BUMPUP   0";
      "  OUTBOX  ";
      "  COPYFROM 0";
      "  JUMPZ  b";
      "  JUMP   e"|]

  let runTestProgram () = 
    printfn "Start"
    let programLines = HmrpEvaluator.stringArrayToProgramList lines
    HmrpEvaluator.printProgramLines programLines
    let initialMachineState = {
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
    HmrpEvaluator.printStates states
    let returnCode = 0 in returnCode