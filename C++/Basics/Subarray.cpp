#include <iostream>
using namespace std;

int main(){

    // subarray -> small contiguous part of the array

    // print all subarray of given array
    int arr[] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
    int size = sizeof(arr) / sizeof(int);

    for(int i=0; i<size; i++){
        for(int j=i; j<size; j++){
            for(int k=i; k<=j; k++){
                cout << arr[k] << " ";
            }
            cout << endl;
        }
    }


    return 0;
}