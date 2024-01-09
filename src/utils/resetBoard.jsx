function resetBoard(setSquares, setXisNext) {
    const startGamePositions = [];
    for (let i = 0; i < 9; i++) {
        startGamePositions.push(null);
    }
    setSquares(startGamePositions);
    setXisNext(true);
}

export default resetBoard