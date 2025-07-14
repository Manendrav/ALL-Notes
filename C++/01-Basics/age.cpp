#include<iostream>
using namespace std;

void age(int a){
     cout<<"Your age is:"<<2022-a<<" Years";
}

int main(){
    int a;
	   cout<<"Enter Your Birth Year:";
    cin>>a;
    age(a);
    return 0;
}