function solution(wallpaper) {
    let minX = wallpaper.length;
    let minY = wallpaper[0].length;
    let maxX = 0;
    let maxY = 0;

    for (let i = 0; i < wallpaper.length; i++) {
        for (let j = 0; j < wallpaper[i].length; j++) {
            if (wallpaper[i][j] === "#") {
                if (i < minX) minX = i;
                if (i > maxX) maxX = i;
                if (j < minY) minY = j;
                if (j > maxY) maxY = j;
            }
        }
    }
    return [minX, minY, maxX + 1, maxY + 1];
}
