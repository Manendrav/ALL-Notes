#include <iostream>
#include <string.h>
using namespace std;

int main(){

    // Read Some string and find the largest string one

    //  part-1 reading strings
    char arr[100];
    int n;
    cout << "How many strings you want to enter: ";
    cin >> n;

    cin.get();  // it is used to take /n so loop will run properly


    char largest[100];
    int largestLength = 0;

    for (int i = 0; i < n; i++){                // you read string 
        cin.getline(arr, 100, '\n');
        int l = strlen(arr);
        if (l > largestLength){
            largestLength = l;
            strcpy(largest, arr);
        }
    }

    cout << "Largest String: " << largest << endl;
    cout << "Length: " << largestLength << endl;
    

    return 0;
}