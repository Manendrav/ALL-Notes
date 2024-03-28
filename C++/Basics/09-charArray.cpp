#include <iostream>
#include <string.h>
using namespace std;

int main(){

    char arr[] = {'a', 'b', 'c', 'd', 'e', '\0'};  // '\0' -> null terminated character -> it is used to tell the compiler that the string has ended
    cout << arr << endl;    // abcde            // it gives value of array until it find null character or Zero

    // method 1 to print the array
    for (int i = 0; arr[i]; i++){
        cout << arr[i] << endl;         // Work same
    }

    cout << "break" << endl;

    // method 2 to print the array
    for (char *ptr = arr; *ptr != '\0'; ptr++){
        cout << *ptr << endl;                       // derefrence the pointer
    }


    char arr2[20] = "hello";              // it automatically add null character at the end of the string

    
    // String function
    strcpy(arr2 , "world");             // it copy the string from one to another
    cout << arr2 << endl;               // it replace the 'hello' with 'world'

    // length of string
    cout << "Length of array: " <<strlen(arr2) << endl;       // 5
    cout << "Size of array: "<< sizeof(arr2) << endl;        // 20


    char arr3[20];
    cout << "Enter Something: ";
    cin.getline(arr3, 20, '$');               // it take input from user and store in arr3      // $ is a delimiter it stop taking input when it find $ in the input
    cout << arr3 << endl;

    // use cin in you want to take single character input
    // use getline if you want to take sting as input


}