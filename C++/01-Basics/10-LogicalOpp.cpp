#include <iostream>
using namespace std;

int main(){
    bool isUser = false;
    bool isAdmin = true;
    bool isLogin = true;

    if (isUser && isAdmin){
        cout << "You are a user and admin" << endl;
    }
    else{
        cout << "You are not a user and admin" << endl;
    }

    if(isAdmin || isLogin){
        cout << "You are an admin or logged in" << endl;
    }
    else{
        cout << "You are not an admin or logged in" << endl;
    }

    if((isUser || isAdmin) && isLogin){
        cout << "You are a user or admin and logged in" << endl;
    }
    else{
        cout << "You are not a user or admin and logged in" << endl;
    }
}