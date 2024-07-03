function solution(s) {
    var content = s.split(' ');
    var answer = content.map((word) =>{
       if(word.length === 0) {
           return word
       }
        if(isNaN(word[0])){
            return word[0].toUpperCase() + word.slice(1).toLowerCase();
        }else {
             return word[0] + word.slice(1).toLowerCase();
        }
    })
    return answer.join(' ');
}