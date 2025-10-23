/**
 * @param {number} num
 * @return {string}
 */
const CONV = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
var toHex = function(num) {
    let ans = [];
    if(num < 0)
        num += 2**32;
    if(num==0)
    return "0";
    while(num){
        ans.push(CONV[num % 16]);
        num = Math.floor(num/16);
        
    }
    ans.reverse();
    return ans.join("");
};


