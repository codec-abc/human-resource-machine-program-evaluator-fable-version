namespace View

open System.IO

open Fable.Core 
open Fable.Import
open Fable.Core.JsInterop

open Fable.Arch
open Fable.Arch.App
open Fable.Arch.Html

open ViewModel

module InputUI =

  let private extractInputsFromList aList (myElem : Input) =
    let otherInputs = List.filter (fun (a : Input) -> a.UIIndex <> myElem.UIIndex) aList
    (myElem, otherInputs)

  let private sortInputs(inputs : Input list) = 
    List.sortWith (fun (a : Input) (b : Input) -> a.UIIndex - b.UIIndex) inputs

  let processInputAction (model : Model) (action : InputAction) =
    match action with
      | MoveInputValueDown index ->
        let (elemToMoveDown, otherInputs) = extractInputsFromList model.Inputs model.Inputs.[index]
        let (elemToMoveUp, listExcept2) = extractInputsFromList otherInputs model.Inputs.[index + 1]

        let first = {
          elemToMoveDown with
            Input.UIIndex = elemToMoveDown.UIIndex + 1;
        }

        let second = {
          elemToMoveUp with
            Input.UIIndex = elemToMoveUp.UIIndex - 1;
        }

        let newInputs = 
          listExcept2
            |> List.append [first]
            |> List.append [second]
            |> sortInputs

        {
          model with
            Inputs = newInputs
        }

      | MoveInputValueUp index ->
        let (elemToMoveUp, otherInputs) = extractInputsFromList model.Inputs model.Inputs.[index]
        let (elemToMoveDown, listExcept2) = extractInputsFromList otherInputs model.Inputs.[index - 1]

        let first = {
          elemToMoveDown with
            Input.UIIndex = elemToMoveDown.UIIndex + 1;
        }

        let second = {
          elemToMoveUp with
            Input.UIIndex = elemToMoveUp.UIIndex - 1;
        }

        let newInputs = 
          listExcept2
            |> List.append [first]
            |> List.append [second]
            |> sortInputs

        {
          model with
            Inputs = newInputs
        }

      | CreateInput ->
        let newUIIndex = 
          if model.Inputs.Length > 0 then
              model.Inputs 
              |> List.map (fun a -> a.UIIndex) 
              |> List.max
              |> (fun x -> x + 1)
          else
            0
        let newInput = {
          UIIndex = newUIIndex;
          Value = 0;
        }

        let updatedInputs = List.append model.Inputs [newInput]

        {
          model with
            Inputs = updatedInputs;
        }
      | RemoveInputValue index ->
        let (elem, otherInputs) = extractInputsFromList model.Inputs model.Inputs.[index]
        let updatedList = 
          otherInputs 
            |> List.map (fun e -> if e.UIIndex <= index then e else { e with UIIndex = e.UIIndex - 1} )
        {
          model with
            Inputs = updatedList;
        }
      | UpdateInputValue (index, obj) ->
        let strValue =  (obj?target?value).ToString()
        if strValue = "" then
          model
        else
          let (myElem, otherInputs) = extractInputsFromList model.Inputs model.Inputs.[index]
          
          let newElem = {
            myElem with
              Value = int strValue;
          }

          let newInputs = 
            List.append otherInputs [newElem]
              |> sortInputs

          {
            model with
              Inputs = newInputs
          } : Model
  
  let private getInputValuesAttributes (input_model : Input) =
    let onInputValueChange = onChange (fun a -> InputAction <| UpdateInputValue (input_model.UIIndex, a))
    [ 
      onInputValueChange
      attribute "type" "number"
      attribute "value" (input_model.Value.ToString())
      Style [("width", "50px")]
      hook 
          "hook"
          (HookHelper.CreateHook (fun node propName ->
            node?value <- (input_model.Value.ToString())
            )
          )
    ]

  let private viewSingleInput input_model nbOfInputs =
    let inputValueAttributes = getInputValuesAttributes input_model

    let upButtonAttributes =
      if input_model.UIIndex = 0 then
        [
          attribute "disabled" "true"
          classy "ui button"
          onMouseClick (fun a -> InputAction <| MoveInputValueUp input_model.UIIndex)
        ]
      else
        [
          classy "ui button"
          onMouseClick (fun a -> InputAction <| MoveInputValueUp input_model.UIIndex)
        ]

    let downButtonAttributes =
      if input_model.UIIndex = nbOfInputs - 1 then
        [
          attribute "disabled" "true"
          classy "ui button"
          onMouseClick (fun a -> InputAction <| MoveInputValueDown input_model.UIIndex)
        ]
      else
        [
          classy "ui button"
          onMouseClick (fun a -> InputAction <| MoveInputValueDown input_model.UIIndex)
        ]
    div 
      []
      [
        text <| "Input" + input_model.UIIndex.ToString() + ": "
        text "Value: "
        input inputValueAttributes
        button
          [
            classy "ui button"
            onMouseClick (fun a -> InputAction <| RemoveInputValue input_model.UIIndex)
          ]
          [
            i
              [
                  classy "fa fa-trash-o" 
                  attribute "aria-hidden" "true"
              ]
              []
          ]
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
    
  let viewInputs (model : View.ViewModel.Model) =
    List.map (fun a -> viewSingleInput a model.Inputs.Length) model.Inputs
