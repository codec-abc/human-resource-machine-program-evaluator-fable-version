namespace Hmrp

open System
open System.Text.RegularExpressions
open System.Collections.Generic
open ResultF

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

    type Label = 
        {
            Name : string;
            Line : int 
        }
        override x.ToString() = "Label named " + x.Name + " at line " + string x.Line

    type Instruction = 
        | Inbox
        | Outbox
        | JumpIfNegative of string
        | JumpIfZero of string
        | Jump of string
        | CopyTo of int
        | CopyFrom of int
        | Increment of int
        | Decrement of int
        | Add of int
        | Subtract of int

        override x.ToString() = 
            match x with
                | Inbox -> "Inbox"
                | Outbox -> "Outbox"
                | JumpIfNegative label -> "Jump if negative to : " + label.ToString()
                | JumpIfZero label -> "Jump if zero to : " + label.ToString()
                | Jump label -> "Jump to : " + label.ToString()
                | CopyTo register -> "Copy to : " + register.ToString()
                | CopyFrom register -> "Copy from : " + register.ToString()
                | Increment register -> "Increment : " + register.ToString()
                | Decrement register -> "Decrement : " + register.ToString()
                | Add register -> "Add with : " + register.ToString()
                | Subtract register -> "Subtract with : " + register.ToString()

    type ProgramLine =
        | MeaningLessLine
        | InstructionLine of Instruction
        | LabelLine of Label
        override x.ToString() = 
            match x with
                | MeaningLessLine -> "Line is meaningless and can be skipped"
                | InstructionLine instruction -> "Line is an instruction : "  + instruction.ToString()
                | LabelLine label -> "Line is a label : " + label.ToString()

    type MachineState = 
        {
            Inputs : int list;
            Outputs : int list;
            Registers : Register list;
            HumanValue : int option;
            ProgramLines : ProgramLine list;
            CurrentInstructionLine : int;
        }
        override x.ToString() =
            let inputsAsString = listToString x.Inputs
            let outputsAsString = listToString x.Outputs
            let registersAsStringList = List.map (fun r -> sprintf "\n        {Index : %i, Value : %s}" r.Index (maybeToString r.RegisterValue)) x.Registers
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