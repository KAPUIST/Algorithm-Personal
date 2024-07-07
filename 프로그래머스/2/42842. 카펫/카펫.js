function solution(brown, yellow) {
    const total_tiles = brown + yellow;
    
   
    for (let height = 3; height <= Math.sqrt(total_tiles); height++) {
        if (total_tiles % height === 0) {
            const width = total_tiles / height;
          
            if ((width * 2) + ((height - 2) * 2) === brown) {
                return [width, height];
            }
        }
    }
}