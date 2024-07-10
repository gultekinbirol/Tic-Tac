const selectWinner = (playBoard, winCombinations, playerTurn) => {
    // Loop through each winning combination to check if there is a winner
    for (const combination of winCombinations) {
        const [a, b, c] = combination;
        if (
            playBoard[a] &&
            playBoard[a] === playBoard[b] &&
            playBoard[a] === playBoard[c]
        ) {
            return `<span>${playerTurn}</span> wins! Congratulations! 🎉`;
        }
    }

    // Check for a draw if all cells in playBoard are filled
    const isDraw = playBoard.every((cell) => cell !== '');
    if (isDraw) {
        return `Game ended in a draw!`;
    }

    // If no winner or draw, return null
    return null;
};

export default selectWinner;
