function solution(park, routes) {
    const H = park.length;
    const W = park[0].length;
    const directions = { 'N': [-1, 0], 'S': [1, 0], 'W': [0, -1], 'E': [0, 1] };
    
    let pos = [0, 0];
    
    for (let i = 0; i < H; i++) {
        for (let j = 0; j < W; j++) {
            if (park[i][j] === 'S') {
                pos = [i, j];
                break;
            }
        }
    }
    
    for (const route of routes) {
        const [op, n] = route.split(' ');
        const [dx, dy] = directions[op];
        let [nx, ny] = pos;
        let validMove = true;
        
        for (let step = 0; step < parseInt(n); step++) {
            nx += dx;
            ny += dy;
            
            if (nx < 0 || nx >= H || ny < 0 || ny >= W || park[nx][ny] === 'X') {
                validMove = false;
                break;
            }
        }
        
        if (validMove) {
            pos = [nx, ny];
        }
    }
    
    return pos;
}
