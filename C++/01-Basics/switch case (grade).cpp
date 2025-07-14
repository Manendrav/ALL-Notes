#include<iostream>
using namespace std;
int main(){
    char grade;
    cout << "Enter the grade of student:";
    cin >> grade;
    switch(grade){
        case 'O':
        cout << "Outstanding!";
        break;

        case 'A':
        cout << "Excelent!";
        break;

        case 'B':
        cout << "Good!";
        break;

        case 'C':
        cout << "Fair!";
        break;

        case 'F':
        cout << "Fail!";
        break;

        default:
        cout << "Invalid Grade!";
        break;
    }
       return 0;
}