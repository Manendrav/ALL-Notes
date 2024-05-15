
// Substring extraction refers to the process of obtaining a portion of a string, known as a substring, from a larger string.

//* Q1) Write a program that takes a string and an integer n as input and prints the first n characters of the string.

//Example:  String: "Hello, World!"
//          n: 7
// 7 characters: Hello,

function printNchar(str, n){
    let newstr = '';
    for(let i=0; i < n; i++){
        newstr += str[i];
    }
    return newstr;
}

let printn = printNchar("Hello, Elliot", 7);
console.log(printn);


//* Q2) Create a program that takes a string and two integers start and end as input and prints the substring of the string from index start to index end.

// Example: String: "Hello, World!"
//          start: 7  end: 11
//      Substring: World

function extractStr(str, ind1, ind2){
    let newstr = '';
    for(let i=ind1; i <= ind2; i++){
        newstr += str[i];
    }
    return newstr;
}

let extracted = extractStr("Hello, World!", 7, 11);
console.log(extracted)


//* Q3) Write a function that takes a string and an integer n as input and prints every nth character of the string.

// Example: String: "Hello, World!"  n: 3
//  3rd position: l, ',' , o, d

function nthChar(str, n){
    let newstr = '';
    let strArr = [];
    let count = 1;

    for(let i = 0; i < str.length; i++){
        if(n == count){
            strArr.push(str[i]);
            count = 1;
        }else{
            count++;
        }
    }

    for(let i = 0; i < strArr.length; i++){
        newstr += strArr[i];
    }

    return newstr;
}

let extractNthchar = nthChar("Hello, World!", 3)
console.log(extractNthchar);


//* Q4) Write a function that takes a string and another string prefix as input and removes the prefix from the beginning of the string if it exists.

// Example: Input:  str = "hello world"     prefix = "hello "
//          Output: "world"

function removePrefix(str, prefix) {
    let newStr = "";
    let prefixIndex = 0;

    // Find the index where the prefix ends in the string
    while (prefixIndex < prefix.length && str[prefixIndex] === prefix[prefixIndex]) {
        prefixIndex++;
    }

    // Append the remaining characters of the string after the prefix to the new string
    for (let i = prefixIndex; i < str.length; i++) {
        newStr += str[i];
    }

    return newStr;
}

let remPrefix = removePrefix("Hello, World!", "Hello");
console.log(remPrefix);


//* Q5) Create a program that takes a string and another string suffix as input and removes the suffix from the end of the string if it exists.

    // Example: Input String: "hello_world"     Suffix: "_world"
    //              Output: "hello"


    function removeSufix(str, sufix){
        let newStr = "";
        let sufixIndex = sufix.length;

        while(sufixIndex > 0 && str[sufixIndex] === sufix[sufixIndex]){
            sufixIndex--;
        }

        for(let i = 0; i < sufixIndex; i++){
            newStr += str[i];
        }

        return newStr;
    }

    let remSufix = removeSufix("Hello, World!", "world")
    console.log(remSufix)



//* Q6) Implement a function that takes a sentence and an integer index as input and prints the word at the specified index in the sentence.
    
//  Example: Sentence: "This is a sample sentence."     Index: 2
//  output:     Word at index 2: "a"

function extractWord(str, index){
    let newStr = "";
    let wordCount = 0;

    for(let i = 0; i < str.length; i++){
        if(str[i] == " "){
            if (wordCount === index) {
                console.log("Word at index", index + ":", newStr);
                return; 
            }
            wordCount++;
            newStr= "";
        }else {
            newStr += str[i];
        }
    }
}


let word = extractWord("This is a sample sentence", 3);


