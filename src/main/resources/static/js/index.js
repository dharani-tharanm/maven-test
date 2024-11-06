document.addEventListener('DOMContentLoaded', function() {
    const gameArea = document.getElementById('gameArea');
    const words = ['hello', 'world', 'typing', 'game', 'javascript'];
    let currentWordIndex = 0;

    function displayWord() {
        gameArea.textContent = words[currentWordIndex];
    }

    function handleKeyPress(event) {
        if (event.key === words[currentWordIndex][0]) {
            gameArea.textContent = words[currentWordIndex].substring(1);
            if (gameArea.textContent === '') {
                currentWordIndex = (currentWordIndex + 1) % words.length;
                displayWord();
            }
        }
    }

    displayWord();
    document.addEventListener('keydown', handleKeyPress);
});
