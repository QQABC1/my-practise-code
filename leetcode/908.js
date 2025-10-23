//分两种情况，如果最大值-最小值>= 2k 则只能num[n-1]-k -(num[0]+k) 
//后者情况下 结果必为0
var smallestRangeI = function(nums, k) {
    let n=nums.length;
    //在js中默认sort按字符进行比较
    nums.sort((a , b) => (a-b) );
    return nums[n-1]-nums[0] > 2*k ? nums[n-1]-nums[0]-2*k : 0; 
    
};