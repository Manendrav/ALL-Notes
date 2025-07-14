#include <iostream>
using namespace std;


struct Student{                 // its like blueprint
    const char* name;           // its a pointer so we can change the value of name
    int age;
    int SID;
};


int main(){
    Student s1 = {"LING", 20, 123};                             // object of structure                 
    cout << s1.name << " " << s1.age << " " << s1.SID << endl;

    Student s2 = {"KING", 21, 124};                                 // use double quotes for string
    cout << s2.name << " " << s2.age << " " << s2.SID << endl;

    s1.name = "LINGLING";                                           // change the value of name
    // We can change the value of name because we have used (char* name) we make constant to a pointer not to a value 

    return 0;

}