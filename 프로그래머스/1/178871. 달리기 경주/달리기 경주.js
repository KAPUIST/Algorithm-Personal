function solution(players, callings) {
    const positionMap = new Map();
    players.forEach((player, index) => {
        positionMap.set(player, index);
    });

    callings.forEach(calledPlayer => {
      
        const currentPosition = positionMap.get(calledPlayer);
        if (currentPosition > 0) {
         
            const prevPlayer = players[currentPosition - 1];
    
            players[currentPosition - 1] = calledPlayer;
            players[currentPosition] = prevPlayer;
    
            positionMap.set(calledPlayer, currentPosition - 1);
            positionMap.set(prevPlayer, currentPosition);
        }
    });

    return players;
}