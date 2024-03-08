#include <iostream>
using namespace std;

int main(){
    int num;
    cout << "Enter The Num: ";
    cin >> num;

    int fact = 1;

    for(int i=1 ; i <= num; i++){               // concept =>   5 = 1 x 2 x 3 x 4 x 5 => 120    (we have to multiply with the previous value)
        fact = fact * i;
    }

    cout << "Factorial Of Given Num is: " << fact;
}