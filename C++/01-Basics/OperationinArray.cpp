#include <iostream>
using namespace std;

void searchElement(int arr[], int size, int key)
{
    int i;
    for (i = 0; i < size; i++){
        if (arr[i] == key){
            cout << "Element exist at " << i << " index" << endl;
            break;
        }
    }
    if (i == size){
        cout << "Element does not exist" << endl;
    }
}

void reverseArray(int arr[], int size){
    cout << "Reverse Array: ";
    for(int i = size - 1; i >= 0; i--){
        cout << arr[i] << " ";
    }

    cout << endl;

    // 2 method
    for (int i=0; i < size; i++){
        cout << arr[size - i - 1] << " ";           // for index 2 ->   [10 - 2 - 1] = 7    <<--- 7th index
    }
}

void reverseArrayInPlace(int *arr, int size){       // it does not create new array so then it make changes in original array
    int s = 0;
    int e = size-1;

    while (s < e ){
        swap(arr[s], arr[e]);
        s++;
        e--;
    }
    for(int i = 0; i < size; i++){
        cout << arr[i] << " ";
    }
}

int main()
{
    // multiple operation we can perform in array

    int arr[] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
    int size = sizeof(arr) / sizeof(int);
    int key;

    //* 1 -> Linear Search
    // cout << "Enter the element to search: ";
    // cin >> key;
    // searchElement(arr, size, key);


    //* 2 -> reverse an array
    // reverseArray(arr, size);


    //* 3 -> reverse array in place (without creating a new array)
        reverseArrayInPlace(arr, size);                 // this function will reverse the original array


        return 0;
}