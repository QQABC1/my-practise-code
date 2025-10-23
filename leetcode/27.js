/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let ans=0;
    for(const num of nums){
        if(num != val){
            nums[ans]=num;
            ans++;
        }
    }
    return ans;
};