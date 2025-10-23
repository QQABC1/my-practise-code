#散列表法，时间复杂度为大o n
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        hashtable={}
        #使用enumerate赋值给散列表，同时查找第i个元素的补数是否在散列表中
        for i,num in enumerate(nums):
            if((target - num) in hashtable):
                return [i,hashtable[target - num]]
            hashtable[num]=i