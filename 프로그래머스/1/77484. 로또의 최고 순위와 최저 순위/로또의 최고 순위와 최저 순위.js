function solution(lottos, win_nums) {
    // 맞춘 개수
    let matchCount = lottos.filter(num => win_nums.includes(num)).length;
    
    // 알아볼 수 없는 번호 개수 (0의 개수)
    let zeroCount = lottos.filter(num => num === 0).length;

    // 최고 순위는 matchCount + zeroCount
    let maxMatch = matchCount + zeroCount;

    // 최저 순위는 matchCount
    let minMatch = matchCount;

    // 순위를 결정하는 함수
    function getRank(matches) {
        if (matches === 6) return 1;
        if (matches === 5) return 2;
        if (matches === 4) return 3;
        if (matches === 3) return 4;
        if (matches === 2) return 5;
        return 6;
    }

    // 최고 순위와 최저 순위를 구함
    let maxRank = getRank(maxMatch);
    let minRank = getRank(minMatch);

    // 결과 반환
    return [maxRank, minRank];
}