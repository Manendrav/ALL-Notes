#include <iostream>
using namespace std;

int main(){
    // 2D array

    // create
    int rows, cols;

    cout << "enter the number of rows and columns: " << endl;
    cin >> rows >> cols;

    int arr2D[rows][cols];

    // input
    cout << "Enter the elements of the array: " << endl;
    for(int i=0; i<rows; i++){                              // frist it take 0 and
        for(int j=0; j<cols; j++){                          // then it take 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
            cin >> arr2D[i][j];
        }
    }

    // output
    for(int i=0; i<rows; i++){
        for(int j=0; j<cols; j++){
            cout << arr2D[i][j] << " ";
        }
        cout << endl;
    }




    return 0;
}