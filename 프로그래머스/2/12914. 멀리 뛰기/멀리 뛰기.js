function solution(n) {
    const MOD = 1234567;
    
    if (n === 1) return 1;
    if (n === 2) return 2;

    let dp = [0, 1, 2]; // 초기 값 설정, dp[1] = 1, dp[2] = 2

    for (let i = 3; i <= n; i++) {
        dp[i] = (dp[i - 1] + dp[i - 2]) % MOD;
    }

    return dp[n];
}