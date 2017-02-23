namespace View

open System.IO
open Hmrp
open Hmrp.HmrpEvaluator

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
    CauseOfStop : string;
    EvaluationStates : MachineState list;
    CurrentlySelectedState : int;
  }

  type RegisterAction =
    | UpdateRegisterState of int * obj // index * enable/disabled
    | UpdateRegisterValue of int * obj // index * value
    | RemoveRegisterValue of int //index
    | CreateRegister

  type InputAction =
    | CreateInput
    | UpdateInputValue of int * obj // index * enable/disabled
    | RemoveInputValue of int // index

  type RunAction =
    | Run
    | ChangeBrowsedState of obj

  type Model = {
    Registers : Register list;
    Inputs : Input list;
    EvaluationResult : EvaluationResult option;
  }

  type Action =
    | InputAction of InputAction
    | RegisterAction of RegisterAction
    | RunAction of RunAction

  let createDefaultModel () =
    {
      Registers = [];
      Inputs = [];
      EvaluationResult = None;
    }