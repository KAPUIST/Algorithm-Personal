function solution(k, tangerine) {
    let sizeCnt = {}
   for(const size of tangerine) {
       // 사이즈별로 개수를 측정
       sizeCnt[size] = (sizeCnt[size] || 0) + 1; 
       
   }
    
    const seria = Object.values(sizeCnt).sort((a,b) => b - a)
    
    let types = 0;
    let total = 0;
    
      for (const count of seria) {
        total += count;
        types++;
        if (total >= k) {
            break;
        }
    }

   
    return types;
}