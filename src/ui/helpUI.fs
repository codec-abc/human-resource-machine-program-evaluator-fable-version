namespace View

open System.IO
open Fable.Core 
open Fable.Import
open Fable.Core.JsInterop
open Fable.Arch
open Fable.Arch.App
open Fable.Arch.Html
open ViewModel

module HelpUI =

    let generateInstructionTable () =
        table
            [
                classy "ui table"
            ]
            [
                thead 
                    []
                    [
                        tr
                            []
                            [
                                th 
                                    []
                                    [text "Name"]
                                th
                                    []
                                    [text "Argument"]
                                th
                                    []
                                    [text "Meaning"]
                            ]
                    ]
                tr
                    []
                    [
                        td
                            []
                            [text "INBOX"]
                        td
                            []
                            [text "None"]
                        td
                            []
                            [text "Take an input and put in the 'Human' register. Stop the program if no input is available."]
                    ]
                tr
                    []
                    [
                        td
                            []
                            [text "OUTBOX"]
                        td
                            []
                            [text "None"]
                        td
                            []
                            [text "Put the value in the 'Human' register to the output Queue. Stop the program if the is no value in the 'Human' register."]
                    ]
                tr
                    []
                    [
                        td
                            []
                            [text "JUMP"]
                        td
                            []
                            [text "A label name"]
                        td
                            []
                            [text "Jump to the label given as argument if the value in the 'Human' register is equal to 0. Stop the program if the label does not exist."]
                    ]
                tr
                    []
                    [
                        td
                            []
                            [text "JUMPZ"]
                        td
                            []
                            [text "A label name"]
                        td
                            []
                            [text "Jump to the label given as argument if the value in the 'Human' register is equal to 0. Stop the program if the is no value in the 'Human' register or the label does not exist."]
                    ]
                tr
                    []
                    [
                        td
                            []
                            [text "JUMPN"]
                        td
                            []
                            [text "A label name"]
                        td
                            []
                            [text "Jump to the label given as argument if the value in the 'Human' register is negative. Stop the program if the is no value in the 'Human' register or the label does not exist."]
                    ]
                tr
                    []
                    [
                        td
                            []
                            [text "COPYTO"]
                        td
                            []
                            [text "A register index"]
                        td
                            []
                            [text "Copy the value in the 'Human' register to the register given as argument. Stop the program if the is no value in the 'Human' register or the register does not exist."]
                    ]
                tr
                    []
                    [
                        td
                            []
                            [text "COPYFROM"]
                        td
                            []
                            [text "A register index"]
                        td
                            []
                            [text "Copy the value of the register given as argument to the 'Human' register. Stop the program if the register does not exist."]
                    ]
                tr
                    []
                    [
                        td
                            []
                            [text "BUMPUP"]
                        td
                            []
                            [text "A register index"]
                        td
                            []
                            [text "Increment the value of the register given as argument and put a copy into the 'Human' register. Stop the program if the register does not exist."]
                    ]
                tr
                    []
                    [
                        td
                            []
                            [text "BUMPDN"]
                        td
                            []
                            [text "A register index"]
                        td
                            []
                            [text "Decrement the value of the register given as argument and put a copy into the 'Human' register. Stop the program if the register does not exist."]
                    ]
                tr
                    []
                    [
                        td
                            []
                            [text "ADD"]
                        td
                            []
                            [text "A register index"]
                        td
                            []
                            [text "Add the value in the 'Human' register with the one in the register given as argument. Stop the program if the is no value in the 'Human' register or the register does not exist."]
                    ]
                tr
                    []
                    [
                        td
                            []
                            [text "SUB"]
                        td
                            []
                            [text "A register index"]
                        td
                            []
                            [text "Subtract the value in the 'Human' register with the one in the register given as argument. Stop the program if the is no value in the 'Human' register or the register does not exist."]
                    ]
            ]

    let generateHelpUI model =
        div
            [
                classy "column"
                attribute "id" "leftColumn"
                attribute "style" "height: 100%;overflow: auto"
            ]
            [
                div
                    [classy "ui"]
                    [
                        h2
                            []
                            [
                                text "Help"
                            ]
                        a 
                            [attribute "href" "https://tomorrowcorporation.com/humanresourcemachine"]
                            [text "Human Resource Machine"]
                        text " is a fun game about assembly programming with a human taking the role of the CPU."
                        text " This application can be used to develop and debug such programs."
                        h3 [] [text "Usage"]
                        text "The application is quite easy to use. You should type your program in the left panel, configure the registers initial states and the inputs that your CPU may consume and then run it to see what happens."
                        text " Usually, the goal in HRM is to consume the inputs and output the appropriate value."
                        text " For example, you may take 2 inputs and output the biggest one to implement the max function."
                        h3 [] [text "Panels"]
                        text "This application is split in 4 panels. Each one serves a precise purpose."
                        h4 [] [text "Help panel"]
                        text "The first (this one) contains the help to get you started. Moreover, all instructions are explained."
                        h4 [] [text "Register panel"]
                        text "The next panel is used to define registers. Each register contains at best a single integral numeric value or nothing at all. They serve as readable/writable memory."
                        h4 [] [text "Input panel"]
                        text "The input panel is used to set the input that can be consumed by the CPU. Each input is an integral numeric value."
                        h4 [] [text "Run/Debug panel"]
                        text "The Run/Debug panel is used to run the program and show all the states that the CPU went through to help you debug your program."
                        h3 [] [text "Program syntax"]
                        text "The program is defined by the lines that composed it. Each line is one of the following line: "
                        ul 
                            [] 
                            [
                                li [] [text "Comment"]
                                li [] [text "Label"]
                                li [] [text "Instruction"]
                            ]
                        text "Since there is no formal grammar for the language each line that cannot be treated as a label or an instruction would be treated as a comment."
                        text " A label define a place is the code where you can go using a jump instruction. A label is defined by a group of characters followed by the character ':'"
                        text " An instruction would change the CPU state and have different side effect depending on the instruction executed. An instruction is a specific word preceded by a whitespace and optionally followed by a label name or a register index."
                        text " And probably like you expect a comment does nothing."
                        h3 [] [text "Instructions"]
                        generateInstructionTable () 
                    ]
            ]
