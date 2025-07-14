#include <iostream>
#include <iomanip>
using namespace std;

int main() {

    // print the average of numbers to f ve position

    int a,b,c,d,e;
    cout << "enter Num: ";
    cin >> a >> b >> c >> d >> e ;

    int sum = a + b + c + d + e / 5;
    cout << fixed << setprecision(5) << (float)sum << endl;
}