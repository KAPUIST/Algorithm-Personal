function solution(elements) {
    const n = elements.length;
    const extendedElements = elements.concat(elements); // 원형 수열을 위한 배열 확장
    const sums = new Set();

    // 각 길이에 대해 가능한 모든 부분 수열의 합을 계산
    for (let length = 1; length <= n; length++) {
        for (let start = 0; start < n; start++) {
            let sum = 0;
            for (let i = 0; i < length; i++) {
                sum += extendedElements[start + i];
            }
            sums.add(sum);
        }
    }

    return sums.size;
}