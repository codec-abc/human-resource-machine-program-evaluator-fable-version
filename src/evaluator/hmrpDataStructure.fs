namespace Hmrp

open System
open System.Text.RegularExpressions
open System.Collections.Generic

module HmrpEvaluator =

    let listToString (listOfElem : 't list) =
        let nbElem = listOfElem.Length
        if nbElem = 0 then
            "[]"
        else
            let elemsAsString = List.fold (fun accum elem -> accum + elem.ToString() + ", ") "" listOfElem
            let fixedString = elemsAsString.Substring(0, elemsAsString.Length - 2)
            "[" + fixedString + "]"

    let maybeToString (maybeAThing : 't option) =
        match maybeAThing with
            | None -> "None"
            | Some aValue -> string <| aValue.ToString()

    type Register = 
        {
            Index : int;
            RegisterValue : int option
        }
        override x.ToString() = "Register at " + string x.Index

    type MachineState = 
        {
            Inputs : int array;
            Outputs : int array;
            Registers : Register array;
            HumanValue : int option;
            CurrentInstructionLine : int;
        }
        
        override x.ToString() =
            let inputsAsString = listToString (List.ofArray x.Inputs)
            let outputsAsString = listToString (List.ofArray x.Outputs)
            let registersAsStringList = List.map (fun r -> sprintf "\n        {Index : %i, Value : %s}" r.Index (maybeToString r.RegisterValue)) (List.ofArray x.Registers)
            let registersAsString = listToString registersAsStringList
            let humanValueAsString = 
                match x.HumanValue with
                    | None -> "None"
                    | Some aValue -> string aValue
            let result =
                "State" + "\n" + 
                "    Inputs: " + inputsAsString + "\n" + 
                "    Outputs: " + outputsAsString + "\n" + 
                "    Registers: " + registersAsString + "\n" + 
                "    Human Value: " + humanValueAsString + "\n" + 
                "    Current Line: " + x.CurrentInstructionLine.ToString()
            result

    type InstructionEvaluationResult =
        | End of string
        | NewState of  MachineState