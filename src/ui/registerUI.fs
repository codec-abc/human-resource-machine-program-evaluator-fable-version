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

  let private viewSingleRegister register =
    let inputValueAttributes = 
      let onRegisterValueChange = onChange (fun a -> RegisterAction <| UpdateRegisterValue (register.UIIndex, a))
      if register.Enabled then
        [ 
          onRegisterValueChange
          attribute "type" "number"
          attribute "value" (register.Value.ToString())
          Style [
            ("width", "50px")
          ]
        ]
      else
        [ 
          onRegisterValueChange
          attribute "type" "number" 
          attribute "disabled" "true"
          attribute "value" (register.Value.ToString())
          Style [
            ("width", "50px")
          ]
        ]
    
    let inputStateAttributes =
      if register.Enabled then
        [
          attribute "type" "checkbox"
          property "checked" "true"
          onChange (fun a -> RegisterAction <| UpdateRegisterState (register.UIIndex, a))
        ]
      else
        [
          attribute "type" "checkbox"
          onChange (fun a -> RegisterAction <| UpdateRegisterState (register.UIIndex, a))
        ]

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

  let viewRegisters model = 
    List.map (fun e -> viewSingleRegister e)  model.Registers
  
  let private extractRegisterFromList model index =
    let myElem = model.Registers.[index]
    let otherRegisters = List.filter (fun a -> a.UIIndex <> index) model.Registers
    (myElem, otherRegisters)

  let private sortRegisters (registers : Register list) = 
    List.sortWith (fun a b -> a.UIIndex - b.UIIndex) registers

  let processRegisterAction (model : View.ViewModel.Model) action = 
    match action with
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