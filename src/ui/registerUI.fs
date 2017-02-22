namespace View

open System.IO
open Hmrp

open Fable.Core 
open Fable.Import
open Fable.Core.JsInterop

open Fable.Arch
open Fable.Arch.App
open Fable.Arch.Html

open ViewModel

module RegisterUI =

  let private getInputValuesAttributes register =
    let onRegisterValueChange = onChange (fun a -> RegisterAction <| UpdateRegisterValue (register.UIIndex, a))
    let basicAttributes =
      [ 
        onRegisterValueChange
        attribute "type" "number"
        attribute "value" (register.Value.ToString())
        Style [("width", "50px")]
      ]
    let moreAttributes = 
      if register.Enabled then
        []
      else
        [attribute "disabled" "true"]
    List.append basicAttributes moreAttributes


  let private getInputStateAttributes register =
    let callback = onChange (fun a -> RegisterAction <| UpdateRegisterState (register.UIIndex, a))
    let checkboxAttribute =  attribute "type" "checkbox"

    if register.Enabled then
      [
        checkboxAttribute
        callback
        property "checked" "true"
      ]
    else
      [
        checkboxAttribute
        callback
      ]
  
  let private viewSingleRegister register =
    let inputValueAttributes = getInputValuesAttributes register
    let inputStateAttributes = getInputStateAttributes register
    div
      []
      [
        text <| "R" + register.UIIndex.ToString() + ": "
        text "Value: "
        input inputStateAttributes
        input inputValueAttributes
        button
          [
            onMouseClick (fun a -> RegisterAction <| RemoveRegisterValue register.UIIndex)
          ]
          [
            i
              [
                  classy "fa fa-trash-o" 
                  attribute "aria-hidden" "true"
              ]
              []
          ]
      ]
  
  let private extractRegisterFromList model index =
    let myElem = model.Registers.[index]
    let otherRegisters = List.filter (fun a -> a.UIIndex <> index) model.Registers
    (myElem, otherRegisters)

  let private sortRegisters (registers : Register list) = 
    List.sortWith (fun a b -> a.UIIndex - b.UIIndex) registers

  let viewRegisters model = 
    List.map (fun e -> viewSingleRegister e)  model.Registers

  let processRegisterAction (model : View.ViewModel.Model) action = 
    match action with
      | CreateRegister -> 
          let newUIIndex = 
            if model.Registers.Length > 0 then
              let max = 
                model.Registers 
                |> List.map (fun a -> a.UIIndex) 
                |> List.max

              max + 1
            else
              0
          let newRegister = {
            Index = 0;
            Value = 0;
            Enabled = false;
            UIIndex = newUIIndex;
          }
          { 
            model with
              Registers = List.append model.Registers [newRegister]
          }

      | UpdateRegisterState (index, obj) ->
          let isChecked : bool = (obj?srcElement?checked).ToString() = "true"

          let (myElem, otherRegisters) = extractRegisterFromList model index

          let newElem = {
            myElem with
              Enabled = isChecked;
          }
          
          let newRegisters = 
            List.append otherRegisters [newElem]
            |> sortRegisters

          {
            model with
              Registers = newRegisters
          }

      | UpdateRegisterValue(index, obj) ->
        let strValue =  (obj?srcElement?value).ToString()
        if strValue = "" then
          model
        else
          let (myElem, otherRegisters) = extractRegisterFromList model index
          
          let newElem = {
            myElem with
              Value = int strValue;
          }

          let newRegisters = 
            List.append otherRegisters [newElem]
            |> sortRegisters

          {
            model with
              Registers = newRegisters
          }

      | RemoveRegisterValue index ->
        let (myElem, otherRegisters) = extractRegisterFromList model index
        let updatedList = 
          otherRegisters 
          |> List.map (fun e -> if e.UIIndex <= index then e else { e with UIIndex = e.UIIndex - 1} )
        {
          model with
            Registers = updatedList
        }