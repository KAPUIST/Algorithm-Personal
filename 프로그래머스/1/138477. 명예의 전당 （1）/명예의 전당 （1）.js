function solution(k, score) {
    var answer = [];
    let result = []
    for(let i = 0 ; i < score.length; i++){
        answer.push(score[i])
         answer.sort((a,b) =>  b-a)
        if(answer.length > k ){
          
            answer.pop()
        }
        
        result.push(Math.min(...answer))
    }
    return result;
}