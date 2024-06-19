function solution(X, Y) {

    const countX = Array(10).fill(0);
    const countY = Array(10).fill(0);

    for (const char of X) {
        countX[parseInt(char)]++;
    }

    for (const char of Y) {
        countY[parseInt(char)]++;
    }
    let result = '';
    for (let digit = 9; digit >= 0; digit--) {
        const count = Math.min(countX[digit], countY[digit]);
        if (count > 0) {
            result += digit.toString().repeat(count);
        }
    }
    if (result === '') {
        return "-1";
    }
    if (result[0] === '0') {
        return "0";
    }

    return result;
}
