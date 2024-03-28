#include <iostream>
using namespace std;

int func(){
    static int a = 12;      // static variable it is accessible only in this function
    a++;
    return a;
}

int main(){

    // qualifiers -> It is a keyword that is used to modify the properties of a variable

        // two types of qualifiers
        // 1. modification qualifiers
            // const -> it is used to make the variable constant
            // volatile -> it is used to tell the compiler that the value of the variable can be changed by the external source
            // mutable -> it is used to tell the compiler that the value of the variable can be changed by the member function of the class
            // restrict -> it is used to tell the compiler that the value of the variable can be changed by the pointer only


        // 2. lifetime qualifiers:
            // auto -> it is used to tell the compiler that the variable is automatic
            // static -> it is used to tell the compiler that the variable is static
            // register -> it is used to tell the compiler that the variable is register
            // extern -> it is used to tell the compiler that the variable is external


        // static
        int a = func();
        cout << a << endl;      


    return 0;
}