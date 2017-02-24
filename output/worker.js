import * as Evaluator from "./hmrpEvaluator";

function guid() 
{
    function s4() 
    {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

var computations = {};

onmessage = function(e) 
{
    var uuid = guid();
    var NEW_STATE_CASE = "NewState";
    var END_CASE =  "End";

    if (e.data === "STOP")
    {
        console.log("TODO");
    }
    else
    {
        var initialState = Evaluator.runFirstStep(e.data);
        postMessage(initialState);

        computations[uuid] = {
            shouldContinue : initialState.Case == NEW_STATE_CASE,
            state : initialState
        };

        var runRecursively = function() {
            if (computations[uuid].shouldContinue === true)
            {
                setTimeout(function ()  
                {
                    var newState = Evaluator.runStep(computations[uuid].state.Fields[0]);
                    postMessage(newState);
                    computations[uuid].shouldContinue = newState.Case == NEW_STATE_CASE;
                    computations[uuid].state = newState;
                    if (computations[uuid].shouldContinue)
                    {
                        runRecursively();
                    }
                }, 0);
            }
        }

        runRecursively();
    }
}