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

module ViewModel =

  type Register = {
    Enabled : bool;
    Value : int;
    UIIndex : int;
  }

  type Input = {
    UIIndex : int;
    Value : int;
  }

  type EvaluationResult = {
    CauseOfStop : string option;
    EvaluationStates : MachineState list;
    CurrentlySelectedState : int;
  }

  type RegisterAction =
    | UpdateRegisterState of int * obj // index * enable/disabled
    | UpdateRegisterValue of int * obj // index * value
    | RemoveRegisterValue of int //index
    | MoveRegisterValueDown of int //index
    | MoveRegisterValueUp of int //index
    | CreateRegister

  type InputAction =
    | CreateInput
    | UpdateInputValue of int * obj // index * enable/disabled
    | RemoveInputValue of int // index
    | MoveInputValueDown of int //index
    | MoveInputValueUp of int //index

  type RunAction =
    | Run
    | ChangeBrowsedState of obj

  type Model = {
    Registers : Register list;
    Inputs : Input list;
    EvaluationResult : EvaluationResult;
  }

  type Action =
    | InputAction of InputAction
    | RegisterAction of RegisterAction
    | RunAction of RunAction
    | WorkerAction of InstructionEvaluationResult

  let createDefaultModel () =
    {
      Registers = [];
      Inputs = [];
      EvaluationResult = 
        {
          CauseOfStop = None;
          EvaluationStates = [];
          CurrentlySelectedState = 0;
        };
    }