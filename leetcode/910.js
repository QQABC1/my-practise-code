//枚举，贪心
var smallestRangeII = function(nums, k) {
    let n=nums.length;
    nums.sort((a , b) => (a-b) );
    let ans=nums[n - 1] - nums[0]; //这为全变小和全变大的结果
    //枚举最大，最小值，考虑所有可能i之前的值进行变大，i之后的值全变小
    for(let i = 1; i < n; i++){
        const mx= Math.max(nums[i-1] + k, nums[n - 1] -k)
        const mn= Math.min(nums[0] + k, nums[i] - k);
        ans = Math.min(ans, mx - mn);
    }
    return ans;
    
};