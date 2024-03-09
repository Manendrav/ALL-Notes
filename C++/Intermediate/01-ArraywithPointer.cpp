#include <iostream>
using namespace std;

int main(){
    int arr[5] = {1, 2, 4};

    // if you want to update the value of array using pointers

    *arr = 9;

    cout << arr[0] << endl;     // <<-- only updated the frist position
    cout << arr[1] << endl;

    int *array = &arr[0];
    array++;
    cout << *array;

}