#include <iostream>
using namespace std;

class X{
   public:
    static int count;
};

int X::count = 10;                // define static data member it has higest priority of all

int main ()
{
   int X = 7;    
    cout << "Local variable: " << X << endl ;            
    cout << "Global variable: " << X::count << endl;      
}