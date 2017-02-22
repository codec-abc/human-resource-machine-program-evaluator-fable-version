// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: http://codemirror.net/LICENSE

CodeMirror.defineMode("hmrp", function () 
{
    var LabelRegex = "^(\\w+):$";
    var InstructionRegex = "^(\\s+)(\\w+)(\\s*)(\\w*)$";
    return {
        startState: function () 
        {
            return {}
        },
        token: function (stream, state) 
        {
            var currentLine = "";
            while (!stream.eol())
            {
                currentLine = currentLine + stream.next();
            }

            if (currentLine.match(LabelRegex))
            {
                return 'property';
            }
            if (currentLine.match(InstructionRegex))
            {
                return '';
            }
            return 'comment';
        }
        
    };
});
