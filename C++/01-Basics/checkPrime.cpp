#include <iostream>
using namespace std;

int main(){

    int num;
    int i;
    cout << "Enter a Num: ";
    cin >> num;

    for(i = 2; i < num; i++){                       // concept -->  [1, _, _ , _ , _, _ , _, _ , _, _ , _, num ]    if any nuber between it divide the num then it is not a prime number
        if(num%i == 0){
            break;
        }
    }

    if(i == num){
        cout << "Its a prime number!!!";
    }else{
        cout << "Its a non prime number!!!";
    }

    return 0;
}