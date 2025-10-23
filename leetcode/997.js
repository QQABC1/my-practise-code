/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
    //计算出度与入度，初始化两个数组，下标对应相应人的出入度
    const Indegree= new Array(n+1).fill(0);
    const Outdegree= new Array(n+1).fill(0);
    //遍历信任关系数组
    for(const edge of trust){
        //出度
        var x=edge[0];
        //入度
        var y=edge[1];
        ++Outdegree[x];
        ++Indegree[y];
    }
    for(let i=1;i<=n;i++){
        if(Indegree[i] == n-1 && Outdegree[i]== 0){
              return i;
        }
          
    }
    return -1;
};