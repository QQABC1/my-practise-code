#二分查找法只能在有序数列中使用
def binary_search(list,item):
    #跟踪其中要查表的区间，low，high
    low=0
    high=len(list)-1
    #循环结束条件为至到范围为一个元素
    while low <= high:
        mid=(low+high)//2
        guess=list[mid]
        #找到该元素
        if guess == item :
            return mid
        #猜的数字过大
        if guess > item :
            high=mid-1
        #猜的数字过小
        else:
            low=mid+1
    return None
my_list=[1,3,5,7,9]

print(binary_search(my_list, 3))
print(binary_search(my_list, -1))
