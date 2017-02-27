CodeMirror.defineMode("hmrp", function () 
{
    var LabelPattern = "^(\\w+):$";

    var InboxPattern  = "^(\\s+)INBOX(\\s*)$";
    var OutboxPattern = "^(\\s+)OUTBOX(\\s*)$";
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

    var JumpZeroShortPattern = "^(\\s+)JUMPZ(\\s+)$";
    var JumpNonZeroShortPattern = "^(\\s+)JUMPN(\\s+)$";
    var JumpShortPattern = "^(\\s+)JUMP(\\s+)$";

    var CopyToShortPattern = "^(\\s+)COPYTO(\\s*)$";
    var CopyFromShortPattern = "^(\\s+)COPYFROM(\\s*)$";
    var BumpUpShortPattern = "^(\\s+)BUMPUP(\\s*)$";
    var BumpDownShortPattern = "^(\\s+)BUMPDN(\\s*)$";
    var AddShortPattern = "^(\\s+)ADD(\\s*)$";
    var SubShortPattern = "^(\\s+)SUB(\\s*)$";

    var JumpZeroShortRegex = new RegExp(JumpZeroShortPattern, "i");
    var JumpNonZeroShortRegex = new RegExp(JumpNonZeroShortPattern, "i");
    var JumpShortRegex = new RegExp(JumpShortPattern, "i");

    var CopyToShortRegex = new RegExp(CopyToShortPattern, "i");
    var CopyFromShortRegex = new RegExp(CopyFromShortPattern, "i");
    var BumpUpShortRegex = new RegExp(BumpUpShortPattern, "i");
    var BumpDownShortRegex = new RegExp(BumpDownShortPattern, "i");
    var AddShortRegex = new RegExp(AddShortPattern, "i");
    var SubShortRegex = new RegExp(SubShortPattern, "i");

    return {
        startState: function () 
        {
            return {
                isConsumingJumpEndLine : false,
                isConsumingRegisterInstructionEndLine : false
            }
        },
        token: function (stream, state) 
        {
            if (state.isConsumingJumpEndLine)
            {
                
                while (!stream.eol())
                {
                    stream.next();
                }
                
                state.isConsumingJumpEndLine = false;
                return "property";
            }

            if (state.isConsumingRegisterInstructionEndLine)
            {
                
                while (!stream.eol())
                {
                    stream.next();
                }
                
                state.isConsumingRegisterInstructionEndLine = false;
                return "number";
            }

            var currentLine = "";
            var nbEatToken = 0;
            while (!stream.eol())
            {
                currentLine = currentLine + stream.next();
                nbEatToken++;
            }

            if (currentLine.match(LabelPattern))
            {
                return 'property';
            }
            
            var isSimpleInstruction =
                currentLine.match(InboxRegex) ||
                currentLine.match(OutboxRegex);
            
            var isJumpInstruction =
                currentLine.match(JumpZeroRegex) ||
                currentLine.match(JumpNonZeroRegex) ||
                currentLine.match(JumpRegex);

            var isRegisterArgumentInstruction = 
                currentLine.match(CopyToRegex) ||
                currentLine.match(CopyFromRegex) ||
                currentLine.match(BumpUpRegex) ||
                currentLine.match(BumpDownRegex) ||
                currentLine.match(AddRegex) ||
                currentLine.match(SubRegex);

            var isInstruction = 
                isSimpleInstruction ||
                isJumpInstruction ||
                isRegisterArgumentInstruction;          

            if (isInstruction)
            {
                if (isSimpleInstruction)
                {
                    return '';
                }
                else
                {
                    stream.backUp(nbEatToken);
                    var halfLine = "";

                    if (isJumpInstruction)
                    {
                        var isMatch = false
                        while (!isMatch && !stream.eol())
                        {
                            halfLine = halfLine + stream.next();
                            var isMatch =
                                halfLine.match(JumpZeroShortRegex) ||
                                halfLine.match(JumpNonZeroShortRegex) ||
                                halfLine.match(JumpShortRegex);
                        }
                        state.isConsumingJumpEndLine = true;
                        return '';
                    }
                    else
                    {
                        var isMatch = false
                        while (!isMatch && !stream.eol())
                        {
                            halfLine = halfLine + stream.next();
                            var isMatch =
                                halfLine.match(CopyToShortRegex) ||
                                halfLine.match(CopyFromShortRegex) ||
                                halfLine.match(BumpUpShortRegex) ||
                                halfLine.match(BumpDownShortRegex) ||
                                halfLine.match(AddShortRegex) ||
                                halfLine.match(SubShortRegex);
                        }
                        state.isConsumingRegisterInstructionEndLine = true;
                        return '';
                    }
                }
            }
            return 'comment';
        }
        
    };
});