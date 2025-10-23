/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumAverage = function(nums) {
    let n=nums.length;
    let ans=Number.MAX_VALUE;
    nums.sort((a,b) => a-b );
    for(let i = 0;i < n/2;i++){
        ans=Math.min(ans , (nums[i] +nums[n-1-i])/2);
    }
    return ans;
  

};