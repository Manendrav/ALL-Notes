// concatenation is the process of combining two strings together to create a new string.

let str1 = 'Hellow';
let str2 = 'World';

let str3 = str1 + ' ' + str2;


function Concatenation(str1, str2){
    for(let i=0; i < str2.length; i++){
        str1 += str2[i]
    }

    return str1
}

let newStr = Concatenation(str1, str2);

console.log(newStr)


// *Question 1

// Given a string s, reverse the order of characters in every word within the string, while still preserving whitespace and initial word order.

// Example:     s = "Let's code today"
//              "s'teL edoc yadot"

let greet = "Hello Friend";
let words = greet.split(" "); // Split the string into words

let revStr = "";
for(let word of words){
    let reversedWord = "";
    for(let i = word.length - 1; i >= 0 ; i--){
        reversedWord += word[i];
    }
    revStr += reversedWord + " ";
}

console.log(revStr.trim());


//* Question 2

// Repeated Concatenation: Create a program that takes a string and a number n as input and prints the string concatenated n times.

// Example: Suppose the input string is "Hello" and n is 3. The program should concatenate "Hello" three times, resulting in "HelloHelloHello", 
//           and then print this concatenated string.


function RepeatedConcatenation(str, n){
    let concatedStr = "";
    for(let i=0; i < n; i++){
        concatedStr += str;
    }
    return concatedStr;
} 

let conStr = RepeatedConcatenation("Hello", 5);

console.log(conStr)



// *Question 3

// Swap Characters: Implement a function that takes a string and two indices as input, swaps the characters at the specified indices, 
//                  and returns the modified string.


function swaper(str, ind1, ind2){
    let newStr = "";
    let strArr = [];
    for(let i = 0; i < str.length; i++){
       strArr.push(str[i]);                     // thats also a way to convert string into an array
    }

    let temp = strArr[ind1];
    strArr[ind1] = strArr[ind2];
    strArr[ind2] = temp;

    for(let i = 0; i < strArr.length; i++){
        newStr += strArr[i];
    }

     return newStr;
}

let swaped = swaper("Hellow Jignesh", 0 , 7)
console.log(swaped)