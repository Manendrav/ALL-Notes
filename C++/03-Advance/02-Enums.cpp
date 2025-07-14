#include <iostream>
using namespace std;
#define PI 3.14             // its a preprocessor directive

enum Status{                // its a user defined data type
    PENDING,                    // 0
    APPROVED = 5,               // 1        it will give 1 if you not assign value to it
    DECLINED                    // 2
};

// enum is used for the constant values
// enum is actually a auto incrementing integer

int main(){
    Status s = PENDING;         // s is a variable of type Status
    cout << s << endl;          // it will print 0

    Status s1 = APPROVED;
    cout << s1 << endl;          // it will print 5

    Status s2 = DECLINED;
    cout << s2 << endl;          // it will print 6



    return 0;
}