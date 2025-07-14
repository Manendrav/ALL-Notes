#include <iostream>
using namespace std;

int main(){

    // stack memory
    int a = 10;             // stack memory

    // heap memory
    int* p = new int(10);   // heap memory

    delete p;               // delete the memory from heap

    
    return 0;
}