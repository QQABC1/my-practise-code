//栈的运用
char pairs(char a){
    if(a == '}') return '{';
    if(a == ']') return '[';
    if(a == ')') return '(';
    return 0;
}
//将所有左括号入栈
bool isValid(char* s) {
    int n = strlen(s);
    //不为偶数即为错误答案
    if(n % 2 == 1){
        return false;
    }
    int stk[n+1],top = 0;
    for(int i = 0; i < n ;i++){
        char ch =pairs(s[i]);
        if(ch){ 
            //为空或者括号不匹配
            if(top == 0 || stk[top-1] != ch){
                return false;
            }
            //出栈
            top--;
        }else{
            //入栈
            stk[top++]=s[i];
        }
    }
    //只有栈为空时为真
     return top == 0;
}