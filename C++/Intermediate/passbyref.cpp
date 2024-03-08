#include <iostream>
using namespace std;

void incmoney(int *moneyPtr){
    cout << moneyPtr << endl;               // it gives the address
    *moneyPtr = 2 * (*moneyPtr);            // Here, we dereference it and manipulate the value
    cout << "Your Money Is Doubel Now: " << "$" <<(*moneyPtr)  << endl;
}

void inctax(int &myTax){        // here it has the address of the variable, it is refrence variable of passed value

    myTax = 2 * myTax;
    cout << myTax << endl;

}

int main(){
    // we have two ways to perfom it

    //* Method 1: using Pointers

    int money = 1000;               // it store in a ,e,ory somewhere
    incmoney(&money);               // here we pass the address of that memory like reference of the variable
    cout << money << endl;

    // Thats how we change the value of a variable using its reference 


    //* Method 2: using reference variable

    int tax = 100;
    inctax(tax);
    cout << "Your Tax:" << tax << endl;
    
}