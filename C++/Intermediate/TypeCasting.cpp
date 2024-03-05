#include <iostream>
using namespace std;

int main() {
    /* 
        Typecasting: Type casting refers to the conversion of one data type to another in a program. Type Casting is also known as Type Conversion.
            Typecasting can be done in two ways: 
                -> automatically by the compiler and 
                -> manually by the programmer or user. 
    */

    // Priority ==>     double >> float >> int >> char >> bool

    // Implicit Type Casting  <<----    It is known as the automatic type casting.
        // Note: Implicit Type Casting should be done from low to higher data types

        int x = 10;
        double y = x;

        cout << "int: " << x << endl;
        cout << "double: " << y << endl;

        double db = 8.9005669;
        float a = db;                   // it shows incorection, r implicit conversions to lose information

        cout << "double: " << db << endl;
        cout << "float: " << a << endl;



    // Explicit Typecasting:    <<----  manual type casting in a program
        
        int num;      
        num = (int) 4.534;          // cast into int data type  
        cout << num << endl;  

        double p = 3.141414;
        int b = (int)p;
        cout << b << endl;


}