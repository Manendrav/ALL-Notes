#include <iostream>
using namespace std;

int main(){

    // Reference variable:  it is a another name for an already existing variable

    int x = 10;

    int &y = x;             // <<--- Thats how reference variable is created

    x++;

    cout << x << endl;      // 11
    cout << y << endl;      // 11

    return 0;
}