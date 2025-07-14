#include <iostream>
using namespace std;

int main(){
    int rate;
    cout << "-->>   Please Rate our Services    <<--" << endl;
    cout << "Note: Please chosse between 1 to 5" << endl;
    cin >> rate;

   cout << (rate > 5 ? "Please read the note!!!" : 
   (rate >= 4 ? "Thanks For your feedback!!!" : "We will Improve our services!!!"));      // ternary Operator

    return 0;

}