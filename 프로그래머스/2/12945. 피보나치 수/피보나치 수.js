function solution(n) {
    const MOD = 1234567;
    if (n === 2) return 1; 
    
    let fib = [0, 1, 1];
    
    for (let i = 3; i <= n; i++) {
        fib[i % 3] = (fib[(i - 1) % 3] + fib[(i - 2) % 3]) % MOD;
    }
    
    return fib[n % 3];
}