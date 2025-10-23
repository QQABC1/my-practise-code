//减少搜索法，根据题解公式
var canCompleteCircuit = function(gas, cost) {
    //计算n的长度
    let n=gas.length;
    //起始站i
    let i=0;
    while(i<n){
        //初始化记录总和的值
        let sum_gas=0;
        let sum_cost=0;
        //cnt记录从初始站到终点站是否遍历了一圈
        let cnt=0;
        while(cnt<n){
            //j到达目前的站，超过n，则从零开始
            const j=(i+cnt)%n;
            sum_gas+=gas[j];
            sum_cost+=cost[j];
            //入不付出
            if(sum_cost > sum_gas){
                break;
            }
          cnt++;
        }
        //更新起始站点
        if(cnt == n){
            return i;
        }else{
            i=i+cnt+1;
        }
    }
    return -1;
};