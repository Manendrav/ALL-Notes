#include <iostream>
using namespace std;

void play();            // this is called forward declaration. it tell compiler that a function exist with this name forward

void sing(int song){
    cout << "Singing: " << song ;
}
int main(){
    play();
    sing(5);
    return 0;
}

void play(){
    cout << "Playing some Videos\n";
}