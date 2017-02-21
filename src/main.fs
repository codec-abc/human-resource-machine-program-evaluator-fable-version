namespace Main

open System.IO
open Hmrp

open Fable.Core 
open Fable.Import
open Fable.Core.JsInterop

open Fable.Arch
open Fable.Arch.App
open Fable.Arch.Html

module Main =

  // Documentation : https://github.com/fable-compiler/
  // Documentation : http://fable.io/fable-arch/#/sample/hello-world

  type Model = string

  type Actions =
    | ChangeInput of string

  // Update
  let update model action =
    printfn "%s" (action.ToString())
    match action with
      //| ChangeInput str -> str
      | _ -> model

  // View
  let view model =
    div
      [ classy "ui two column stackable grid" ]
      [
        div
          [ classy "three wide column"]
          [
            div
              [ classy "ui segment" ]
              [
                text "Registers:"
                button
                  [ 
                    classy "ui button"
                    onMouseClick (fun e -> unbox(Browser.window.alert("TODO")))
                  ]
                  [
                    i
                      [
                        classy "fa fa-plus"
                        attribute "aria-hidden" "true"
                      ]
                      []
                  ]
              ]
              
          ]
        div
          [ classy "three wide column" ]
          [
            div
              [
                classy "ui segment"
              ]
              [
                text "Inputs:"
                button
                  [ 
                    classy "ui button"
                    onMouseClick (fun e -> unbox(Browser.window.alert("TODO")))
                  ]
                  [
                    i
                      [
                        classy "fa fa-plus"
                        attribute "aria-hidden" "true"
                      ]
                      []
                  ]
              ]
          ]
        div
          [ classy "seven wide column" ]
          [
            div
              [classy "ui segment"]
              [
                text "Code"
                br []
                div
                  [ attribute "id" "ide"]
                  []
              ]
          ]
        div
          [classy "three wide column"]
          [
            div
              [classy "ui segment"]
              [
                text "Run & Output"
                br []
                button
                  [classy "ui button"]
                  [
                    i
                      [
                        classy "fa fa-play"
                        attribute "aria-hidden" "true"
                      ]
                      []
                  ]
              ]
          ]
      ]

  [<EntryPoint>]
  let main argv =

    createSimpleApp "" view update Virtualdom.createRender
      |> withStartNodeSelector "#app"
      |> start
    
    let returnCode = 0 in returnCode
