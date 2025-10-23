//模拟法，找到从下标为0到n-3的元素为0进行反转
var minOperations = function(nums) {
    let n=nums.length;
    let ans=0;
    for(let i = 0;i < n;i++){
        if(nums[i] == 0){
            //如果n-2到n-1为0则无法反转为1
            if(i > n-3){
                return -1;
            }
            nums[i]^=1;
            nums[i+1]^=1;
            nums[i+2]^=1;
            ans++;
        }
    }
    return ans;
    
};