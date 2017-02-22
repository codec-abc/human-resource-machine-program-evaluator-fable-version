// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: http://codemirror.net/LICENSE

CodeMirror.defineMode("hmrp", function () 
{
    var LabelPattern = "^(\\w+):$";

    var InboxPattern  = "^(\\s+)INBOX(\\s*)(\\w*)$";
    var OutboxPattern = "^(\\s+)OUTBOX(\\s*)(\\w*)$";
    var JumpZeroPattern = "^(\\s+)JUMPZ(\\s*)(\\w*)$";
    var JumpNonZeroPattern = "^(\\s+)JUMPN(\\s*)(\\w*)$";
    var JumpPattern = "^(\\s+)JUMP(\\s*)(\\w*)$";
    var CopyToPattern = "^(\\s+)COPYTO(\\s*)(\\w*)$";
    var CopyFromPattern = "^(\\s+)COPYFROM(\\s*)(\\w*)$";
    var BumpUpPattern = "^(\\s+)BUMPUP(\\s*)(\\w*)$";
    var BumpDownPattern = "^(\\s+)BUMPDN(\\s*)(\\w*)$";
    var AddPattern = "^(\\s+)ADD(\\s*)(\\w*)$";
    var SubPattern = "^(\\s+)SUB(\\s*)(\\w*)$";

    var InboxRegex  = new RegExp(InboxPattern, "i");
    var OutboxRegex = new RegExp(OutboxPattern, "i");
    var JumpZeroRegex = new RegExp(JumpZeroPattern, "i");
    var JumpNonZeroRegex = new RegExp(JumpNonZeroPattern, "i");
    var JumpRegex = new RegExp(JumpPattern, "i");
    var CopyToRegex = new RegExp(CopyToPattern, "i");
    var CopyFromRegex = new RegExp(CopyFromPattern, "i");
    var BumpUpRegex = new RegExp(BumpUpPattern, "i");
    var BumpDownRegex = new RegExp(BumpDownPattern, "i");
    var AddRegex = new RegExp(AddPattern, "i");
    var SubRegex = new RegExp(SubPattern, "i");

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

            if (currentLine.match(LabelPattern))
            {
                return 'property';
            }
            
            var isInstruction =
                currentLine.match(InboxRegex) ||
                currentLine.match(OutboxRegex) ||
                currentLine.match(JumpZeroRegex) ||
                currentLine.match(JumpNonZeroRegex) ||
                currentLine.match(JumpRegex) ||
                currentLine.match(CopyToRegex) ||
                currentLine.match(CopyFromRegex) ||
                currentLine.match(BumpUpRegex) ||
                currentLine.match(BumpDownRegex) ||
                currentLine.match(AddRegex) ||
                currentLine.match(SubRegex);

            if (isInstruction)
            {
                return '';
            }
            return 'comment';
        }
        
    };
});
