
#include<iostream>
using namespace std;
int main(){
    int t;
    string s;
    cin>>t;
    while(t--){
        cin>>s;
        for(int i=0; i<s.size() ;i++){
            if(s[i]>='A' && s[i]<='Z'){
                s[i]=tolower(s[i]);
            }
        }
        if(s[0]=='y' && s[1]=='e' && s[2]=='s'){
             cout<<"YES"<<endl;
        }
        else {
            cout<<"NO"<<endl;
        }
    }
return 0;
}
