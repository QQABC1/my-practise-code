
var countCompleteDayPairs = function(hours) {
    let ans=0;
    const n=hours.length;
    //初始化记录补数的出现次数，缩减为一次循环即可
    let cnt= new Array(24).fill(0);
    for(const hour of hours){
        //需要使用 24 - (hour % 24) % 24，确保其始终在0到23之间。
        ans+=cnt[(24 -(hour % 24)) % 24];
        cnt[hour % 24]++;
    }
    return ans;
};