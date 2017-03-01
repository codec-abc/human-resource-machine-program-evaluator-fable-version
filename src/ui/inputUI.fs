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

  let private moveElements elemToMoveDown elemToMoveUp otherElems model =         
    let first = {
      elemToMoveDown with
        Input.UIIndex = elemToMoveDown.UIIndex + 1;
    }

    let second = {
      elemToMoveUp with
        Input.UIIndex = elemToMoveUp.UIIndex - 1;
    }

    let elemToMoveUp = 
      otherElems
        |> List.append [first]
        |> List.append [second]
        |> sortInputs

    {
      model with
        Inputs = elemToMoveUp
    }

  let private handleCreateInput model =
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

  let private handleRemoveInputValue index model = 
    let (elem, otherInputs) = extractInputsFromList model.Inputs model.Inputs.[index]
    let updatedList = 
      otherInputs 
        |> List.map (fun e -> if e.UIIndex <= index then e else { e with UIIndex = e.UIIndex - 1} )
    {
      model with
        Inputs = updatedList;
    }

  let private handleMoveInputValueDown index model =
    let (elemToMoveDown, otherInputs) = extractInputsFromList model.Inputs model.Inputs.[index]
    let (elemToMoveUp, listExcept2) = extractInputsFromList otherInputs model.Inputs.[index + 1]
    moveElements elemToMoveDown elemToMoveUp listExcept2 model

  let private handleMoveInputValueUp index model = 
    let (elemToMoveUp, otherInputs) = extractInputsFromList model.Inputs model.Inputs.[index]
    let (elemToMoveDown, listExcept2) = extractInputsFromList otherInputs model.Inputs.[index - 1]
    moveElements elemToMoveDown elemToMoveUp listExcept2 model

  let private handleUpdateInputValue index obj model =
    let strValue =  (obj?target?value).ToString()
    if strValue = "" then
      model
    else
      let (myElem, otherInputs) = extractInputsFromList model.Inputs model.Inputs.[index]
      let newElem = {
        myElem with
          Value = int strValue;
      }
      let newInputs =  List.append otherInputs [newElem] |> sortInputs

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
          attribute "style" "padding-top:1px;padding-bottom:1px;font-size:small;"
          attribute "disabled" "true"
          classy "ui compatc button"
          onMouseClick (fun a -> InputAction <| MoveInputValueUp input_model.UIIndex)
        ]
      else
        [
          attribute "style" "padding-top:1px;padding-bottom:1px;font-size:small;"
          classy "ui compact button"
          onMouseClick (fun a -> InputAction <| MoveInputValueUp input_model.UIIndex)
        ]

    let downButtonAttributes =
      if input_model.UIIndex = nbOfInputs - 1 then
        [
          attribute "style" "padding-top:1px;padding-bottom:1px;font-size:small;"
          attribute "disabled" "true"
          classy "ui compact button"
          onMouseClick (fun a -> InputAction <| MoveInputValueDown input_model.UIIndex)
        ]
      else
        [
          attribute "style" "padding-top:1px;padding-bottom:1px;font-size:small;"
          classy "ui compact button"
          onMouseClick (fun a -> InputAction <| MoveInputValueDown input_model.UIIndex)
        ]
    tr 
      []
      [
        td
          []
          [text <| "" + input_model.UIIndex.ToString()]
        td
          []
          [input inputValueAttributes]
        td
          []
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
          ]
      ]
    
  let processInputAction (model : Model) (action : InputAction) =
    match action with
      | MoveInputValueDown index -> handleMoveInputValueDown index model
      | MoveInputValueUp index -> handleMoveInputValueUp index model
      | CreateInput -> handleCreateInput model
      | RemoveInputValue index -> handleRemoveInputValue index model
      | UpdateInputValue (index, obj) -> handleUpdateInputValue index obj model

  let viewInputs (model : View.ViewModel.Model) =
    List.map (fun a -> viewSingleInput a model.Inputs.Length) model.Inputs
