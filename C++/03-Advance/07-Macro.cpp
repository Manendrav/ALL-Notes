#include <iostream>
#include <cstdint>          // it is used to include int8_t, int16_t, int32_t, int64_t
using namespace std;

#define MYINT int8_t        // Macro is used to define a constant value, it will replace MYINT with int8_t

#define MSG cout << "Hello World"   // it will replace MSG with "Hello World"

int main(){

    MYINT a = 10;           // it will replace MYINT with int8_t
    cout << static_cast<int>(a)<< endl;

    MSG;
    
    return 0;
}