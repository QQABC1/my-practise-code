/**
 * @param {number[]} dist
 * @param {number} hour
 * @return {number}
 */
 //二分查找
 //总公式
 //t+ mid/dist[n−1]≤hour
// 100(mid⋅t+dist[n−1])≤mid⋅hr
var minSpeedOnTime = function(dist, hour) {
    //车辆数
    const n=dist.length;
    //定义hr
    const hr = Math.round(hour * 100);
    //如果hour小于等于n-1段数则不可能完成
    if(hr<=(n-1)*100){
        return -1;
    }
    //定义左右指针
    let l=1;
    let r=10000000;
    while(l<r){
        //需将前n-1段时间和第n段时间分开计算
        let t=0;
        //中间指针
        const mid=l+Math.floor((r-l)/2);
        for(let i=0;i<n-1;i++){
            //处理可以整除的情况，如（4/2）+1=3的错误情况 
            t+= Math.floor((dist[i]-1)/mid) + 1;
        }
        //计算n段时间
        t*=mid;
        t+=dist[n-1];
        //更新左右时间
        if(t * 100<=hr * mid){
            r=mid;
        }else{
            l=mid+1;
        }
    }
    return l;
};