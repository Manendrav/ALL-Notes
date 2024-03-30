#include <iostream>
using namespace std;

int factorial(int n)
{
    if (n > 1)
    {
        return n * factorial(n - 1);
    }
    else
    {
        return 1;
    }
}

int main()
{
    // factorial using recursion
    int n = 5;
    cout << "Factorial of " << n << " is " << factorial(n) << endl;

    return 0;
}