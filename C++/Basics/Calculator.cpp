#include<iostream>
using namespace std;

int main()
{
    int a, b;
    char n;

    cout<<"Enter two Numbers:";
    cin>>a>>b;

    cout<<"Enter operation:";
    cin>>n;

    switch(n)
    {
    case '+':
        cout<<a+b<<endl;
        break;

    case '-':
        cout<<a-b<<endl;
        break;

    case '*':
        cout<<a*b<<endl;
        break;

    case '/':
        cout<<a/b<<endl;
        break;

    case '%':
        cout<<a%b<<endl;
        break;

    default:
        cout<<"Enter valid operation";
    }

    return 0;
}
