/**
 * @param {number} x
 * @return {number}
 */
//二分法
var mySqrt = function (x) {
    //左右边界
    let left = 0, right = x
    while (left <= right) {
        //舍弃小数部位函数
        let mid = Math.trunc((left + right) / 2)
        if (mid > x / mid) {
            right = mid - 1
        } else {
            left = mid + 1
        }
    }
    return right
};