
var distMoney = function(money, children) {
    //如果钱比人少就符合分配限制
    if(money < children) return -1;
    //先给每一位孩子1元
    money=money-children;
    //初始化记录分到8元的人数cnt
    let cnt=0;
    cnt=Math.min(Math.floor(money / 7),children);
    money-=cnt*7;
    //记录还剩多少孩子没有分到8元
    children=children-cnt;
    //特殊情况 1.不能四元 2.所有钱必须分配
    if( (children== 1 && money == 3) || (children == 0 && money > 0 )){
        cnt-=1;
    }
    return cnt;

};