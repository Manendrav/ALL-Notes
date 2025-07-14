#include <iostream>
using namespace std;

int main(){
    int call_api = 1;

    try{ 
        cout << "calling api" << endl;
        if(call_api == 1){
            throw 1;
        }
    }catch(int error){                              // exception or error comes with their own data type
        cout << "Error: " << error << endl;
    }catch(...){                                     // ... is used to catch any type of error  // its variadic function
        cout << "Default Error" << endl;
    }                                               // you can define as many as many catch block you want
}