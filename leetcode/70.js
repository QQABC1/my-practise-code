//dp动态规划问题，常用画表格
var climbStairs = function(n) {
    if (n <= 0) return 0; // 如果 n 小于或等于 0，返回 0
     if (n === 1) return 1; // 只有一种方式爬1个台阶
     if (n === 2) return 2; // 只有两种方式爬2个台阶
     
     let dp = new Array(n + 1);
     dp[1] = 1; // 1种方式爬1个台阶
     dp[2] = 2; // 2种方式爬2个台阶（1+1 或 2）
     
     for (let i = 3; i <= n; i++) { // 从3开始计算
         dp[i] = dp[i - 1] + dp[i - 2]; // 当前台阶的方式 = 前一个台阶的方式 + 前两个台阶的方式
     }
     
     return dp[n]; // 返回爬n个台阶的方式
 };