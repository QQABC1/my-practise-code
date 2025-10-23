def quicksort(array):
    # 基线条件
    if len(array) < 2:
        return array
    # 递归条件
    else:
        pivot = array[0]
        less = []
        greater = []
        
        # 使用 for 和 if 语句替代列表推导式
        for i in array[1:]:
            if i <= pivot:
                less.append(i)
            else:
                greater.append(i)
                
        return quicksort(less) + [pivot] + quicksort(greater)
print(quicksort([10,5,2,3]))