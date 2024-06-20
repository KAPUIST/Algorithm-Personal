function solution(ingredient) {
    let stack = [];
    let count = 0;

    for (let item of ingredient) {
        stack.push(item);
        if (stack.length >= 4) {
            let end = stack.slice(-4).join('');
            if (end === '1231') {

                stack.splice(-4);
                count++;
            }
        }
    }

    return count;
}