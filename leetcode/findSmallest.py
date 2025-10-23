#将数组找出最小元素
def findSmallest (arr) :
    smallest=arr[0]
    smallest_index=0
    for i in range(1,len(arr)) :
        if(arr[i]<smallest) :
            smallest=arr[i]
            smallest_index=i
    return smallest_index
#使用选择排序
def selectionSort(arr) :
    newArr=[]
    for i in range(len(arr)) :
        #找出最小元素并且加入到最新数组中
        smallest=findSmallest(arr)
        newArr.append(arr.pop(smallest))
    return newArr
print (selectionSort([4,6,7,10,3,2,1]))