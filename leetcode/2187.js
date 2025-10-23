//二分查找
var minimumTime = function(time, totalTrips) {
    //设置一个检查mid时间能否完成totalTrips
    const check=(t) => {
        let cnt=0;
        for(const period of time){
            //一辆车在mid时间内能够完成的次数
            cnt+=Math.floor(t/period);
        }
        return cnt>=totalTrips
    };
    //设置左右边界
    let r=totalTrips * Math.max(...time);
    let l=1;
    while(r>l){
        let mid=Math.floor((r+l)/2);
        if(check(mid)){
            r=mid
        }else{
            l=mid+1;
        }

    }
    return l;
};