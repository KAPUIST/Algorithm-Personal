function solution(cards1, cards2, goal) {
    let index1 = 0; // cards1의 인덱스
    let index2 = 0; // cards2의 인덱스

    for (let word of goal) {
        if (index1 < cards1.length && word === cards1[index1]) {
            // goal의 단어가 cards1의 현재 단어와 일치하면
            index1++; // cards1의 다음 단어로 이동
        } else if (index2 < cards2.length && word === cards2[index2]) {
            // goal의 단어가 cards2의 현재 단어와 일치하면
            index2++; // cards2의 다음 단어로 이동
        } else {
            // goal의 단어가 cards1, cards2의 현재 단어와 모두 일치하지 않으면
            return "No";
        }
    }
    
    return "Yes";
}