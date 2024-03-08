#include <iostream>
using namespace std;

int main(){
    // pointers points to a memory location 

    int card = 42;
    int my_card = card;

    int *myp = &card;           // creating a pointer and pointing to the memory address of card variable

    // int *myp;                <<-- initialization of a pointer

    my_card = *myp;             // pointer dereference

    printf("value of a pointer %p\n" , myp);          // for printing pointers we use %p  <<--- it gives hexvalue
    cout << "Value of my card: " << my_card << endl;



    // Reference --->> &

    int &new_card = card;           // it store the reference of the card variable
    new_card = 12;                  // this will update the value of card

    cout << "the value of card: " << card << endl; 



    // Address Of Operator -> (&)
    int x = 5;
    cout << "Address Of x: " << &x << endl;        // <<-- &x is used to print the address

    // In array both arr or &arr both gives the same memory address 

    // In case of char it does not print the memory address but it prints the character store in that memory address
    char letter = 'a';
    cout << &letter << endl;


    // Pointers:    hold the address of another variable
    int z = 10 , y = 2;

    // Declaring the pointer
    int *ptr = &z;

    int *ytr;                   // declare
    ytr = &y;                   // assigne

    cout << ptr << " : " << *ptr << endl;                // it outputs the memory address of z
    cout << ytr << " : " << *ytr << endl;               // *ptr is used to access the value stored in the memory address

    // *ptr and *ytr , here (*) is a dereference operator


    int **pttr = &ptr;                                  // ** is used to point the address of pointer
    cout << "Address of Pointer: " << pttr << endl; 


    // Dreference Operator

    // *ptr and *ytr , here (*) is a dereference operator



    // TODO:    Concept

        //*     &ptr    =>    Address
        //*     *address =>  bucket                     ([] <- bucket)


    int num = 3;                    // num -->  [3]         // address of this bucket "0xb123"     
    int *numptr = &num;             // numptr --> [0xb123]      // &num -->  0xb123         (&) give address of bucket     

    cout << num << endl;            // 3
    cout << numptr << endl;         // 0xb123 
    cout << &numptr << endl;        // address of pointer Bucket        [numptr]    -->     address of this bucket
    cout << *numptr << endl;        // value pointing by the pointer    // 3    numptr -->  [0xb123]    -->     value

    // *numptr it is the example of dereference operator // here it resolve the value of address stored in the pointer
    

    // NULL Pointer

    int *nuptr = NULL;
    int *xptr = 0;
    
    
    
    
    
    
    
    
    return 0;
}