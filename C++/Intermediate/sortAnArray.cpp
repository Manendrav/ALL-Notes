#include <iostream>
#include <algorithm>
using namespace std;

int main(){
    int n;
    cout << "Enter the size of array: ";
    cin >> n;

    int arr[n];

    for (int i = 0; i < n; i++){
        cin >> arr[i];
    }

    // Sort
    for (int i = 0; i < n - 1; i++) {
        for (int j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr[j], arr[j + 1]);
            }
        }
    }

    // 2 Method
    sort(arr, arr+n, greater<int>());           // this is present in algorithm library
                                                // greater<int>() it is a comparator it put greater element frist and rhen small

    cout << "Sorted Array: ";

    for (int i = 0; i < n; i++){
        cout << arr[i] << " ";
    }
    
    
    
   
}