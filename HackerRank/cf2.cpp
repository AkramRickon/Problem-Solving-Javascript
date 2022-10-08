
#include<iostream>
using namespace std;
int main(){
    int t,cnt;
    cin>>t;
    while(t--){
        cnt=0;
        int n,f[26];
        string s;
        cin>>n>>s;

        for(int i=0; i<26 ;i++){
            f[i]=0;
        }
        for(int i=0; i<n ;i++){
            if(f[s[i]-'A']==0){
                cnt+=2;
                f[s[i]-'A']++;
            }
            else{
                cnt++;
                f[s[i]-'A']++;
            }
        }
        cout<<cnt<<endl;
    }

return 0;
}
