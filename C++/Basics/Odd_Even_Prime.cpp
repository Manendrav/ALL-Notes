#include<iostream>
using namespace std;

int main()
{
  int n, i, flag = 0;

  cout <<"Enter a Number:";
  cin >> n;

  for (i = 2; i <= n / 2; ++i){
        if (n % i == 0) {
      flag = 1;
      break;
    }
}
  if(flag == 0){
        cout<<"It's prime number";
    }
  else{
        if(n%2==0){
        cout<<"It's Even";
    }
  else{
        cout<<"It's Odd:";
    }
}
  return 0;
}
    