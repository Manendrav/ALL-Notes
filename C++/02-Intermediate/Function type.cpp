#include<iostream>
using namespace std;

void function1();                                // function declaration
int function2();
void function3(int a, int b);
int function4(int a, int b);
int main(){
    int x, y;                                     // function call
    function1();
    x = function2();
    cout << "Return value from function:"<< x << endl;
    function3(25 , 45);
    y = function4(5 , 7);
    cout << "Return value from function:"<< y << endl;
    return 0;
}                                                        // function defination
                                                            
void function1(){                                // Function with no argument and no return value.
    cout << "Function with no argument and no return value"<< endl;
}

int function2(){                                 // Function with no argument but return value.
    int c = 50;
    return c;
}

void function3(int a, int b){                    // Function with argument but no return value.
    int c = a + b;
    cout << "Addtion is: " << c << endl;
}

int function4(int a, int b){                    // Function with argument and return value.
    int c = a * b;
    return c;
}

