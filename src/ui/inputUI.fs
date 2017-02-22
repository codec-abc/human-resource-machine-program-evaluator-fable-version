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

  let private extractInputsFromList model index =
    let myElem = model.Inputs.[index]
    let otherInputs = List.filter (fun (a : Input) -> a.UIIndex <> index) model.Inputs
    (myElem, otherInputs)

  let private sortInputs(inputs : Input list) = 
    List.sortWith (fun (a : Input) (b : Input) -> a.UIIndex - b.UIIndex) inputs

  let processInputAction (model : Model) (action : InputAction) =
    match action with
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
        let (elem, otherInputs) = extractInputsFromList model index
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
          let (myElem, otherInputs) = extractInputsFromList model index
          
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
          }
      


  let private getInputValuesAttributes (input_model : Input) =
    let onInputValueChange = onChange (fun a -> InputAction <| UpdateInputValue (input_model.UIIndex, a))
    [ 
      onInputValueChange
      attribute "type" "number"
      attribute "value" (input_model.Value.ToString())
      Style [("width", "50px")]
    ]

  let private viewSingleInput input_model =
    let inputValueAttributes = getInputValuesAttributes input_model
    div 
      []
      [
        text <| "Input" + input_model.UIIndex.ToString() + ": "
        text "Value: "
        input inputValueAttributes
        button
          [
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
    
  let viewInputs (model : View.ViewModel.Model) =
    List.map viewSingleInput model.Inputs