//将26个字母用hash表映射到对应行
const str = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];
const map =new Array(26);
for(let i=0; i < str.length;i++){
    for(let j=0;j < str[i].length;j++){
        //charCodeAt()为将字符取ASCII值，charAt(j)去字符串的第j个字符
        map[str[i].charAt(j).charCodeAt() - 'a'.charCodeAt()] = i;
    }
}
var findWords = function(words) {
    //设置返回值为空列表
    const ans =[];
    for(const word of words){
        //判断word是否符合条件
        let isValid=true;
        //使用第一个字母与剩下字母进行对比，并且都toLowerCase()区分大小写
        const idx = map[word[0].toLowerCase().charCodeAt() - 'a'.charCodeAt()];
        for(let i=1; i < word.length; i++){
            if(map[word[i].toLowerCase().charCodeAt() - 'a'.charCodeAt()] != idx){
                isValid=false;
                break;
            }
        }
        //如果满足条件
        if(isValid){
            ans.push(word);
        }
    }
    return ans;
};