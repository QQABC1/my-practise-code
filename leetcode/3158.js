/**
 * @param {number[]} nums
 * @return {number}
 */
var duplicateNumbersXOR = function(nums) {
    //创建集合
    let ans=new Set();
    let res=0;
    for(const num of nums){
        //如果集合有包含num，则进行异或
        if(ans.has(num)){
            res^=num;
        }else{
            ans.add(num);//没有包含则加入到集合中
        }
    }
    return res;
};