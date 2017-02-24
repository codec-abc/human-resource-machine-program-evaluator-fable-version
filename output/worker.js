import * as Evaluator from "./hmrpEvaluator";

onmessage = function(e) {

    var NEW_STATE_CASE = "NewState";
    var END_CASE =  "End";

    if (e.data === "STOP")
    {
        console.log("TODO");
    }
    else
    {
        var result = Evaluator.runFirstStep(e.data);

        postMessage(result);

        var shouldContinue = result.Case == NEW_STATE_CASE;
        while (shouldContinue)
        {
            result = Evaluator.runStep(result.Fields[0]);
            shouldContinue = result.Case == NEW_STATE_CASE;
            postMessage(result);
        }

    }
}