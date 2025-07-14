#include <iostream>
using namespace std;


string apiCall(){
    return "DATA FROM API CALL";
}

int main(){
    auto response = apiCall();              // auto will automatically detect the type of response

    cout << "Response come from api call:" << response << endl;


    
    return 0;
}