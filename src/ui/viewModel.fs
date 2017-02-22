namespace View

open System.IO

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

  type RegisterAction =
    | UpdateRegisterState of int * obj // index * enable/disabled
    | UpdateRegisterValue of int * obj // index * value
    | RemoveRegisterValue of int //index
    | CreateRegister

  type InputAction =
    | CreateInput
    | UpdateInputValue of int * obj // index * enable/disabled
    | RemoveInputValue of int // index

  type Model = {
    Registers : Register list;
    Inputs : Input list;
    Outputs : int list;
    CauseOfStop : string option;
  }

  type Action =
    | InputAction of InputAction
    | RegisterAction of RegisterAction
    | Run

  let createDefaultModel () =
    {
      Registers = [];
      Inputs = [];
      Outputs = [];
      CauseOfStop = None;
    }