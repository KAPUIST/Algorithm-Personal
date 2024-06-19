function solution(keymap, targets) {
    // 각 문자의 최소 입력 횟수를 저장할 맵
    const minKeyPress = {};

    // keymap을 순회하며 각 문자의 최소 입력 횟수 계산
    keymap.forEach((keys, index) => {
        for (let i = 0; i < keys.length; i++) {
            const char = keys[i];
            if (!minKeyPress[char] || minKeyPress[char] > i + 1) {
                minKeyPress[char] = i + 1;
            }
        }
    });

    const results = targets.map(target => {
        let totalKeyPress = 0;

        for (const char of target) {
            if (minKeyPress[char]) {
                totalKeyPress += minKeyPress[char];
            } else {
                totalKeyPress = -1;
                break;
            }
        }

        return totalKeyPress;
    });

    return results;
}