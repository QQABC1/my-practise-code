//dp解法
var minRefuelStops = function(target, startFuel, stations) {
    const n=stations.length;
    //是n+1个数组是防止越界，
    const dp=new Array(n+1).fill(0);
    //其中dp[i]表示加油i次最大的行进距离，i表示加油的次数
    dp[0]=startFuel;
    for(let i=0; i < n;i++){
        //从大到小遍历修改dp[i]的值，保证更新公式的正确性
        for(let j=i;j >= 0;j--){
            //只有加油次数可行使公里数能到达i站才会进行比较
            if(dp[j] >= stations[i][0]){
                //更新公式
                dp[j + 1]=Math.max(dp[j+1], dp[j] + stations[i][1]);
            }
        }
    }
    //找到最小加油次数，还能到达target
    for(let i = 0; i <= n;i++){
        if(dp[i] >= target){
            return i;
        }
    }
    return -1;

    

};