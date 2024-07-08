function solution(n,a,b){
    //라운드 설정 해야함 
    // 라운드가 진행 될때마다 n/2 번호가 순서대로주어짐
    //AB 가 같은 값이 될때까지 반복문돌면 끝나나?
    
    var round = 0;
    while(a !== b){
        //올림 필요
        a = Math.ceil(a/2)
        b = Math.ceil(b/2)
        round +=1
    }
    
    return round;
}