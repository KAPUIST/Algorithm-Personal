function solution(food) {
    let result = [];

    for (let i = 1; i < food.length; i++) {
        result.push(String(i).repeat(Math.floor(food[i] / 2)));
    }

    let left = result.join('');
    let right = result.reverse().join('');

    return left + '0' + right;
}