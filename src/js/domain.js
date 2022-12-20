function sendRandomWord($session, $reactions) {
    $session.currentWord = fetchRandomWord();
    $reactions.answer($session.currentWord.enText);
}

function sendFail($session, $reactions) {
    $reactions.answer($session.currentWord.ruText + ".");
}

function sendOk($session, $reactions) {
    postLearned($session.currentWord.id);
    $reactions.answer("Верно.");
}

function checkEqualRu($session, answer) {
    return $session.currentWord.ruText.toLowerCase() == answer.toLowerCase();
}