namespace View

open System.IO

module ViewModel =

  type Register = {
    Index : int;
    Enabled : bool;
    Value : int;
    UIIndex : int;
  }

  type RegisterAction =
    | UpdateRegisterState of int * obj // index * enable/disabled
    | UpdateRegisterValue of int * obj // index * value
    | RemoveRegisterValue of int //index
    | CreateRegister

  type Model = {
    Registers : Register list;
    Inputs : int list;
    Outputs : int list;
    CauseOfStop : string option;
  }

  type Action =
    | CreateInput
    | Run
    | RegisterAction of RegisterAction
    | NotImplemented

  let createDefaultModel () =
    {
      Registers = [];
      Inputs = [];
      Outputs = [];
      CauseOfStop = None;
    }