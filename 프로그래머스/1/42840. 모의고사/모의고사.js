function solution(answers) {
    let first = [1,2,3,4,5]
    let sec = [2,1,2,3,2,4,2,5]
    let third = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    let score = [0,0,0]
    
    for(let i = 0 ; i < answers.length; i++){
        if(first[i%5] === answers[i]){
            score[0] +=1
        }
        if(sec[i%8] === answers[i]){
            score[1] +=1
        }
        if(third[i%10] === answers[i]){
            score[2] +=1
        }
    }
    let answer = []
    for(let i = 0; i < 3; i++){
        if(score[i] === Math.max(...score)) answer.push(i+1)
    }
   return answer
    
}