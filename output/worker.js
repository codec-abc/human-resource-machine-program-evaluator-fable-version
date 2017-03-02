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
var NEW_STATE_CASE = "NewState";
var END_CASE =  "End";

var postStop = function()
{
    var obj = {
        Case : END_CASE,
        Fields : ["Computation canceled."]
    };
    postMessage(obj);
}

var postData = function(msg)
{
    if (msg.Case === NEW_STATE_CASE)
    {
        var struct = msg.Fields[0];
        var newInputs = [];
        for(var i = 0; i < struct.Inputs.length; i++)
        {
            newInputs.push(struct.Inputs[i]);
        }
        struct.Inputs = newInputs;

        var newOutputs = [];
        for(var i = 0; i < struct.Outputs.length; i++)
        {
            newOutputs.push(struct.Outputs[i]);
        }
        struct.Outputs = newOutputs;

        var newRegisters = [];
        for(var i = 0; i < struct.Registers.length; i++)
        {
            newRegisters.push(struct.Registers[i]);
        }
        struct.Registers = newRegisters;
    }
    postMessage(msg);
};

onmessage = function(e) 
{
    var uuid = guid();

    if (e.data === "STOP")
    {
        for (var key in computations) 
        {
            if (!computations.hasOwnProperty(key)) continue;

            var obj = computations[key];
            obj.shouldContinue = false;
            obj.hasBeenStopped = true;
        }
    }
    else
    {
        var initialState = Evaluator.runFirstStep(e.data);
        postData(initialState);
        computations[uuid] = {
            shouldContinue : initialState.Case === NEW_STATE_CASE,
            state : initialState,
            hasBeenStopped : false,
        };

        var runRecursively = function() {
            if (computations[uuid].shouldContinue === true)
            {
                setTimeout(function ()  
                {
                    var newState = Evaluator.runStep(computations[uuid].state.Fields[0]);
                    postData(newState);
                    computations[uuid].shouldContinue = computations[uuid].shouldContinue && (newState.Case === NEW_STATE_CASE);
                    computations[uuid].state = newState;
                    if (computations[uuid].shouldContinue)
                    {
                        runRecursively();
                    }
                    else
                    {
                        if (newState.Case === NEW_STATE_CASE && computations[uuid].hasBeenStopped)
                        {
                            postStop();
                        }
                    }
                }, 0);
            }
        }

        runRecursively();
    }
}