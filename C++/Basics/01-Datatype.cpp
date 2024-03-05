#include <iostream>
#include <iomanip>
using namespace std;

int main() {
    int a = 7;
    char ch = 'a';
    bool bo = true;
    float ft = 4.778;                               // it by default support only upto 4 places
    double db = 5.7777832289;                        // use for precision

    cout << "int: " << a << endl;
    cout << "char: " << ch << endl;
    cout << "bool: " << bo << endl;
    cout << "float: " << ft << endl;
    cout << "Pricise Double: " << setprecision(10) << db << endl;
    cout << "double: " << db << endl;
 
    return 0;
}
