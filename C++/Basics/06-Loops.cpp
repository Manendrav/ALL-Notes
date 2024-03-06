#include <iostream>
using namespace std;

int main(){

    // FInd the sum of n numbers

    int num;
    int sum = 0;
    cout << "Enter The Number you want to enter: ";
    cin >> num;

    while (num > 0)
    {
        int n;
        cin >> n;
        sum = sum + n;
        num = num - 1;
    }
    
      cout << sum << endl;


    // find the sum of numbers which are even

    for(int i = 0; i < num; i++){
        int n;
        cin >> n;
        if(n%2==0){
            sum = sum + n;
        }else{
            break;
        }
    }

    cout << sum << endl;


    // Read numbers until i don't get neagative numbers

    // do           // wrong way to do it
    // {
    //     int n;
    //     cin >> n;
    //     if(n < 0){
    //         break;
    //     }
    // } while (num > 0);

    int number;
    do
    {
        cin >> number;
    } while (number > 0);
    
    
    return 0;
}