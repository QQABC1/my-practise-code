#divide and conquer 分而治之方法
#递归函数找出数组中最大的数
def max(arr) :
    #基线条件
    if len(arr) == 2 :
        return arr[0] if arr[0] > arr[1] else arr[1]
    sub_max=max(arr[1:])
    return arr[0] if arr[0] > sub_max else sub_max
#求出数组之和
def sum (list) :
    if list == [] :
        return 0
    return list[0]+sum(list[1:])
