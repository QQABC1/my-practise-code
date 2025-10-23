#动态规划问题dp
class Solution:
    def mincostTickets(self, days: List[int], costs: List[int]) -> int:
        max_day=days[-1] #最大天数 【-1】即为days数组中的最后一位
        dp_cost=[0]*(max_day+1)  #生成网格即将问题切割为小问题，并初始化为0
        days_set=set(days) #转换集合元素加快查找速度，以及避免单元重复的问题
        for day in range(1,max_day+1):
            #如果不是旅游天
            if day not in days:
                #则费用与上一天相同
                dp_cost[day]=dp_cost[day-1] 
            else:
                #记录每一个小问题中的最优解
                dp_cost[day]=min(
                   dp_cost[max(0,day-1)]+costs[0],#一天票
                    dp_cost[max(0,day-7)]+costs[1],#七天票
                    dp_cost[max(0,day-30)]+costs[2]#30天票
                )
        return dp_cost[max_day]