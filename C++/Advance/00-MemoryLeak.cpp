#include <iostream>
using namespace std;

int main(){

    // memory leak: it is a situation where the program allocates the memory but forgets to deallocate it
    int *ptr;

    // not a recomended way to allocate the memory
    ptr = new int(1000);                            // new is used to allocate the memory
    cout << " Memory Allocated: " << *ptr << endl;

    delete [] ptr;                                      // delete is used to deallocate the memory  //* [] is used to deallocate the memory of an array
    cout << " Memory Deallocated: " << *ptr << endl;    // this will give us the garbage value


    // recomended way to allocate the memory
    try{
        ptr = new int(1000);
        cout << " Memory Allocated: " << *ptr << endl;
    }catch(...){
        cout << "Memory Allocation Failed" << endl;
    }

    delete [] ptr;

}