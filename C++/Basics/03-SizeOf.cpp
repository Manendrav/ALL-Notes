#include <iostream>
#include <iomanip>
using namespace std;

int main() {
    int a = 7;
    char ch = 'a';
    bool bo = true;
                                        // sizeof is a keyword not a function
    cout << sizeof(a) << endl;          // give output in byte like 4 byte = 32 bit
    cout << sizeof(ch) << endl;
    cout << sizeof(bo) << endl;
    cout << sizeof(float) << endl;
    cout << sizeof(double) << endl;     // 8 byte

    
    return 0;
}