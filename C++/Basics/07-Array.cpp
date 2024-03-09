#include <iostream>
using namespace std;


void printArray(int * arr, int n){
    // arr containt the address of the array in the memory
    // so we use * to get the value of the array


    cout << "size of array through function:" <<sizeof(arr) << endl;   
    for (int i = 0; i < n; i++)
    {
        cout << arr[i] << " " << endl;
    } 
}

int main(){

    //* Array -> It is a collection of similar data types elements stored in contiguous memory locations

    // create an array
    int arr[10] = {1, 2, 3, 4, 5};

    // access the array
    cout << arr[0] << endl;     // 1

    // size of an array
    cout << sizeof(arr) << endl;    // size of int -> 4 x 5 = 20
    int n = sizeof(arr) / sizeof(int);  // find the size of array

    // print the array
    for (int i = 0; i < n; i++)
    {
        cout << arr[i] << " " << endl;
    }

    // take input from use
    cout << "Enter 5 elements: ";

    int arr2[5];
    for (size_t i = 0; i < 5; i++)
    {
        cin >> arr2[i];
    }

    for (size_t i = 0; i < 5; i++)
    {
        cout << arr2[i] << " " << endl;
    }


    // pass the array to the function

    int arr3[] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};  // <<-- size of array is automatically calculated
    
    int size = sizeof(arr3) / sizeof(int);
    
    printArray(arr3 , size);
    

    return 0;
}