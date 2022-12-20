require: slotfilling/slotFilling.sc
  module = sys.zb-common
  
require: js/lib.js  
require: js/api.js
require: js/domain.js

patterns:
    $AnyText = $nonEmptyGarbage

theme: /

    state: Start
        q!: $regex</start>
        q!: (запусти) словарь
        script: sendRandomWord($session, $reactions);
        
        state: Fallback
            event!: noMatch
            if: checkEqualRu($session, $parseTree.text)
                script: 
                    sendOk($session, $reactions);
                    sendRandomWord($session, $reactions);
            else:
                script: 
                    sendFail($session, $reactions);
                    sendRandomWord($session, $reactions);

    state: Fallback
        event!: noMatch
        a: Вы сказали: {{$parseTree.text}}
