namespace View

open System.IO
open Fable.Core 
open Fable.Import
open Fable.Core.JsInterop
open Fable.Arch
open Fable.Arch.App
open Fable.Arch.Html
open ViewModel

module RegisterUI =

  let private getInputValuesAttributes (register : Register) =
    let onRegisterValueChange = onChange (fun a -> RegisterAction <| UpdateRegisterValue (register.UIIndex, a))
    
    let basicAttributes =
      [ 
        onRegisterValueChange
        attribute "type" "number"
        attribute "value" (register.Value.ToString())
        Style [("width", "50px")]
        hook 
          "hook"
          (HookHelper.CreateHook (fun node propName ->
            node?value <- (register.Value.ToString())
            )
          )
      ]

    let moreAttributes = 
      if register.Enabled then
        []
      else
        [attribute "disabled" "true"]

    List.append basicAttributes moreAttributes

  let private getInputStateAttributes (register : Register) =
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
  
  let private viewSingleRegister register nbOfRegister =
    let inputValueAttributes = getInputValuesAttributes register
    let inputStateAttributes = getInputStateAttributes register

    let upButtonAttributes =
      if register.UIIndex = 0 then
        [
          attribute "style" "padding-top:1px;padding-bottom:1px;font-size:small;"
          attribute "disabled" "true"
          classy "ui compact button"
          onMouseClick (fun a -> RegisterAction <| MoveRegisterValueUp register.UIIndex)
        ]
      else
        [
          attribute "style" "padding-top:1px;padding-bottom:1px;font-size:small;"
          classy "ui compact button"
          onMouseClick (fun a -> RegisterAction <| MoveRegisterValueUp register.UIIndex)
        ]

    let downButtonAttributes =
      if register.UIIndex = nbOfRegister - 1 then
        [
          attribute "style" "padding-top:1px;padding-bottom:1px;font-size:small;"
          attribute "disabled" "true"
          classy "ui compact button"
          onMouseClick (fun a -> RegisterAction <| MoveRegisterValueDown register.UIIndex)
        ]
      else
        [
          attribute "style" "padding-top:1px;padding-bottom:1px;font-size:small;"
          classy "ui compact button"
          onMouseClick (fun a -> RegisterAction <| MoveRegisterValueDown register.UIIndex)
        ]

    tr
      []
      [
        td
          []
          [text <| "" + register.UIIndex.ToString()]
        td
          []
          [input inputStateAttributes]
        td
          [] 
          [input inputValueAttributes]
        td
          [
            attribute "style" "padding:0;"
          ]
          [
            div
              [
                classy "ui vertical icon buttons"
              ]
              [
                button
                  upButtonAttributes
                  [
                    i 
                      [
                        classy "fa fa-arrow-up"
                      ]
                      []
                  ]
                button
                  downButtonAttributes
                  [
                    i 
                      [
                        classy "fa fa-arrow-down"
                      ]
                      []
                  ]
              ]
            ]
        td
          []
          [
            button
              [
                classy "ui button"
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
      ]
  
  let private extractRegisterFromList (aList : Register list) (myElem : Register) =
    let otherRegisters = List.filter (fun (a : Register) -> a.UIIndex <> myElem.UIIndex) aList
    (myElem, otherRegisters)

  let private sortRegisters (registers : Register list) = 
    List.sortWith (fun (a : Register) (b : Register) -> a.UIIndex - b.UIIndex) registers

  let private moveElements elemToMoveDown elemToMoveUp otherRegisters model =
    let first = {
      elemToMoveDown with
        Register.UIIndex = elemToMoveDown.UIIndex + 1;
    }

    let second = {
      elemToMoveUp with
        Register.UIIndex = elemToMoveUp.UIIndex - 1;
    }

    let newRegisters = 
      otherRegisters
        |> List.append [first]
        |> List.append [second]
        |> sortRegisters

    {
      model with
        Registers = newRegisters
    }
  
  let private handleMoveRegisterValueDown index model =
    let (elemToMoveDown, otherRegisters) = extractRegisterFromList model.Registers model.Registers.[index]
    let (elemToMoveUp, listExcept2) = extractRegisterFromList otherRegisters model.Registers.[index + 1]
    moveElements elemToMoveDown elemToMoveUp listExcept2 model

  let private handleMoveRegisterValueUp index model =
    let (elemToMoveUp, otherRegisters) = extractRegisterFromList model.Registers model.Registers.[index]
    let (elemToMoveDown, listExcept2) = extractRegisterFromList otherRegisters model.Registers.[index - 1]
    moveElements elemToMoveDown elemToMoveUp listExcept2 model

  let private handleCreateRegister model =
    let newUIIndex = 
      if model.Registers.Length > 0 then
        model.Registers 
        |> List.map (fun a -> a.UIIndex) 
        |> List.max
        |> (fun x -> x + 1)
      else
        0

    let newRegister = {
      Value = 0;
      Enabled = false;
      UIIndex = newUIIndex;
    }

    { 
      model with
        Registers = List.append model.Registers [newRegister]
    }

  let private handleUpdateRegisterState index obj model =
    let isChecked : bool = (obj?target?checked).ToString() = "true"
    let (myElem, otherRegisters) = extractRegisterFromList model.Registers model.Registers.[index]

    let newElem = {
      myElem with
        Enabled = isChecked;
    }
    
    let newRegisters =  List.append otherRegisters [newElem] |> sortRegisters

    {
      model with
        Registers = newRegisters
    }

  let private handleUpdateRegisterValue index obj model =
    let strValue =  (obj?target?value).ToString()
    if strValue = "" then
      model
    else
      let (myElem, otherRegisters) = extractRegisterFromList model.Registers model.Registers.[index]
      
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

  let private handleRemoveRegisterValue index model =
    let (myElem, otherRegisters) = extractRegisterFromList model.Registers model.Registers.[index]
    let updatedList = 
      otherRegisters 
      |> List.map (fun e -> if e.UIIndex <= index then e else { e with UIIndex = e.UIIndex - 1} )
    {
      model with
        Registers = updatedList
    }

  let processRegisterAction (model : View.ViewModel.Model) action = 
    match action with
      | MoveRegisterValueDown index -> handleMoveRegisterValueDown index model
      | MoveRegisterValueUp index -> handleMoveRegisterValueUp index model
      | CreateRegister -> handleCreateRegister model
      | UpdateRegisterState (index, obj) -> handleUpdateRegisterState index obj model
      | UpdateRegisterValue (index, obj) -> handleUpdateRegisterValue index obj model
      | RemoveRegisterValue index -> handleRemoveRegisterValue index model

  let viewRegisters model =
    List.map (fun a -> viewSingleRegister a model.Registers.Length) model.Registers
        