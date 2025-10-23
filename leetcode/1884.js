//dp问题
var twoEggDrop = function(n) {
    //初始化数组最大值，f[i]表示 i 层楼的建筑需要的最小的操作次数。
    const f=new Array(n+1).fill(Number.MAX_SAFE_INTEGER / 2);
    //初始化0层的特殊情况
    f[0]=0;
    //i为所在的楼层，
    for(let i = 1;i <= n;i++){
        //k为第一次尝试的丢鸡蛋的楼层，遍历所有可能楼层
        for(let k=1;k <= i;k++){
            f[i]=Math.min(f[i], Math.max(k-1 , f[i-k]) + 1);//Math.max(k-1 , f[i-k])比较鸡蛋碎与不碎的两种情况，后续找到确切值
            //+1是将第一次尝试算入
        }

    }
    return f[n];
};