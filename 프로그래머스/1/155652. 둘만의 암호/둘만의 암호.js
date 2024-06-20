function solution(s, skip, index) {
    // 알파벳 집합 정의
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const skipSet = new Set(skip); // skip 문자들을 빠르게 찾기 위한 집합

    // 변환된 결과 문자열을 담을 배열
    let result = [];

    // s 문자열의 각 문자에 대해 처리
    for (let char of s) {
        let currentIndex = alphabet.indexOf(char);
        let steps = 0; 

        while (steps < index) {
            currentIndex = (currentIndex + 1) % 26;
            if (!skipSet.has(alphabet[currentIndex])) {
                steps++;
            }
        }

        result.push(alphabet[currentIndex]);
    }

    return result.join('');
}

