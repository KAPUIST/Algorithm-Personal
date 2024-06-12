function solution(n, m, section) {
    var answer = 0
   let roll = 0;
    
    for(let i = 0 ; section.length > i ; i++){
        if(roll < section[i]){
            answer++;
            roll = section[i] + m -1
        }
    }
    return answer
}