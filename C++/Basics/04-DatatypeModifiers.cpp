#include <iostream>
#include <iomanip>
using namespace std;

int main() {
    long long int lg = 7893424234334533;
    short int sh = 8593;
    signed sg = -8349348;                   // here in 32 bit representation the frist bit represent the positve (0) and negative (1) 
    unsigned ug = 4093482;

    cout << "long int: " << lg << endl;
    cout << "short int: " << sh << endl;
    cout << "signed int: " << sg << endl;
    cout << "unsigned int: " << ug << endl;

    int a = 10;
    long long int b = 2063456476557452345;
    short int c = 30;

    cout << "int: " << sizeof(a) << endl;
    cout << "long int: " << sizeof(b) << endl;
    cout << "short int: " << sizeof(c) << endl;

    
    return 0;
}