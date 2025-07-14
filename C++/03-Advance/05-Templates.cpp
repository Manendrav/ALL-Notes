#include <iostream>
using namespace std;

template <typename T>           // template is used to make a generic function

T add(T a, T b){                // T is a generic type, it can be int, float, double, etc
    return a + b;
}

int main(){
    int a = 10;
    int b = 20;

    float c = 10.5;
    float d = 20.5;

    cout << add(a, b) << endl;      
    cout << add(c, d) << endl;


    
    return 0;
}