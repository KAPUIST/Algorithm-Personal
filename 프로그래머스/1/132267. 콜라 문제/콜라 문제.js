function solution(a, b, n) {
    var answer = 0;
    while(n >= a){
        let newCola = Math.floor(n / a) * b
        answer+= newCola
        n = newCola + (n % a)
    }
    return answer;
}