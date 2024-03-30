#include <iostream>
#include <vector>
using namespace std;



int main(){

    vector<int> v = {1, 2, 3, 4, 5};        // vector is a dynamic array
    v.push_back(6);                         // push_back() is used to add an element at the end of the vector

    for (int i = 0; i < v.size(); i++)       // size() is used to get the size of the vector
    {
        cout << v[i] << " ";
    }

    // another way to iterate the vector 
    for (auto i = v.begin(); i != v.end(); ++i )                        // auto is used to automatically detect the data type
    {
        cout << *i << " ";
    }

    
    return 0;
}