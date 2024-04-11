
// Substrings: A substring is a contiguous sequence of characters within a string. It can be obtained by extracting a portion of the original string, 
//              starting from one index and ending at another index (inclusive or exclusive).

//* Q1) Write a program that takes a string and two integers representing the start and end indices as input, and returns the substring of the string from the start index to the end index.

    // Example:     input_string = "hello world"
    //              start_index = 3
    //              end_index = 8
    //              Output: "lo wo"


    // function subString(str, start, end){
    //     let newStr = "";

    //     for(let i = start; i < end; i++){
    //         newStr += str[i];
    //     }

    //     return newStr;
    // }

    // let getSubstring = subString("hello world", 3, 8);
    // console.log(getSubstring);


//* Q2) Implement a function that takes a string and an integer n as input, and returns the first n characters of the string as a substring.

    // Example:     input_string = "hello world"    n = 5
    //              Output: "hello"


    // function getPrefix(str, n){
    //     let newStr = "";

    //     for(let i = 0; i < n; i++){
    //         newStr += str[i];
    //     }

    //     return newStr;
    // }

    // let prefix = getPrefix("hello world", 5);
    // console.log('"' +prefix+ '"');


//* Q3) Create a program that takes a string and an integer n as input, and returns the last n characters of the string as a substring.

    // Example:     input_string = "hello world"
    //              Output:     "world"

    // function getSuffix(str, n){
    //     let newStr = "";
    //     let length = str.length;

    //     for(let i = length - n; i < length; i++){           // 11 - 5 = 6 so the loop will start from index -> 6
    //         if(i >= 0){
    //             newStr += str[i];
    //         }
    //     }
    //     return newStr;
    // }

    // let suffix = getSuffix("hello world", 5);
    // console.log('"' +suffix+ '"');


//* Q4) Write a function that takes a string as input and returns the middle substring of odd-length strings, or the two middle substrings of even-length strings.

    // Example:     input_string = "hello"
    //              Odd-Length String:      Output -->  "l"
    //              Even-Length String:      Output -->  "or" "rl"


// function getMiddle(str){
//     let newStr = "";

//     if((str.length) % 2 == 0){
//         let index = (0 + str.length / 2);
//         console.log('"' +str[index-1]+ '"' + " "+ '"' +str[index]+ '"');
//     } else {
//         let index = Math.floor(0 + str.length / 2);
//         newStr += str[index];
//         console.log('"' +newStr+ '"');
//     }

// }

// let middleEven = getMiddle("hellow");           // "l" "l"
// let middleOdd = getMiddle("hello");             // "l"


//* Q5) Implement a program that takes a string and an integer n as input, and returns a substring containing every nth character of the string.

    // Example:     Input: "abcdefg", n = 2
    //              Output: "bdf"

// function nthCharacter(str, n){
//     let newStr = "";

//     for(let i = n-1; i < str.length; i += n){
//         newStr += str[i];
//     }
//     return newStr;
// }

// let nthChar = nthCharacter("abcdefg", n = 2)
// console.log('"' +nthChar+ '"');


//* Q6) Create a function that takes a string as input and returns the reversed substring of the string

    // Example:     Input: "hello"
    //              Output: "olleh"

function reverseStr(str){
    let newStr = "";

    for(let i = str.length-1; i >= 0; i--){
        newStr += str[i];
    }
    return newStr;
}

let reverse = reverseStr("hello");
console.log(reverse);




