class Solution {
public:
    int maxPower(string s) {
        int ans=1,cnt=1;
        //从头到尾进行对比
        for(int i=1;i<s.length();i++){
            //如果将第i位与前一位对比
            if(s[i] == s[i-1]){
                cnt++;
                ans=max(cnt,ans);
                //如果不相同则重新开始
            }else{
                cnt=1;
            }
        }
        return ans;
    }
};