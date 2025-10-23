#BFS广度优先搜索
def search(name):
    #创建队列
    search_queue=deque()
    search_queue+=graph[name]
    #记录已经搜查过的人
    searched=[]
    while search_queue :
        #取出队列第一个
        person = search_queue.popleft()
        if person not in searched :
            if person_is_seller(person):
                print(person+"is a mango seller")
                return True
            else :
                search_queue+=graph[person]
                #标记此人已检查
                searched.append(person)
    return False