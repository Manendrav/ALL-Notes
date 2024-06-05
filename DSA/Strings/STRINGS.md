# Strings 💬

In programming, a string is a sequence of characters, typically used to represent text. Strings are a fundamental data type in most programming languages.

Examples of string literals: "Hello", "world", "123".
Examples of string variables: 'name', 'message', 'text'.

### Character Array

A character array, often called a C-string, is a contiguous sequence of characters terminated by a null character ('\0').

Examples of character arrays:
char str[10];
char name[] = "John";
char message[100];

## Types Of Strings 📝

1. **_Immutable Strings_**:
   Immutable strings are strings whose contents cannot be changed after they are created. This means that once a string object is created, its value cannot be modified.

   - Instead, any operation that appears to modify a string actually creates a new string with the desired changes.

2. **_Mutable Strings_**:
   Mutable strings, on the other hand, allow their contents to be modified after they are created. This means that you can directly change individual characters or substrings within a mutable string without creating a new string object.
   - Can be more memory-efficient for certain operations, as they avoid creating new string objects.

## Substring Extration

Substring extraction refers to the process of obtaining a portion of a string, known as a substring, from a larger string. It involves selecting a contiguous sequence of characters from the original string based on specified indices or conditions.

**Substring extraction is a common operation in programming:**

1.  **Text Processing**: Extracting specific information or patterns from textual data.

2.  **Data Manipulation**: Manipulating and transforming strings based on certain criteria.

3.  **Search and Replace**: Finding occurrences of substrings within a larger string and replacing them with other substrings.

4.  **Parsing**: Breaking down complex strings into smaller, more manageable parts for analysis or processing.

# Questions

## Basic Questions

**Q1) Perform given operations:**

1.  **Add a character at specific location**
2.  **Remove a character at specific location**

**Q2) Repeated Concatenation:**  
 Create a program that takes a string and a number 'n' as input and prints the string concatenated 'n' times.

```bash
   input_string = "Hello"
   n = 3
   Output:  "HelloHelloHello"
```

**Q3) Swap Characters:**  
 Implement a function that takes a string and two indices as input, swaps the characters at the specified indices, and returns the modified string.

```bash
  input_string = "Hello"
  two indices 1 and 3
  Output:  ['H', 'l', 'l', 'e', 'o'].
```

**Q4) Implement String Concatenation:**  
 Write a function to concatenate two strings without using any built-in string concatenation functions or operators.

```bash
  str1 = "Hello"
  str2 = "World"
  Output:  "HelloWorld".
```

**Q5) Reverse Concatenated String:**  
 Given a string s, reverse the order of characters in every word within the string, while still preserving whitespace and initial word order.

```bash
   input_string = "Let's code today"
   Output:  "s'teL edoc yadot".
```

**Q6) First N Characters:**  
 Write a program that takes a string and an integer n as input and prints the first n characters of the string.

```bash
   input_string = "Hello, World!"   n: 7
   Output:  "Hello,"
```

**Q7) Extract Substring:**  
 Create a program that takes a string and two integers start and end as input and prints the substring of the string from index start to index end.

```bash
  String: "Hello, World!"
  start: 7
  end: 11
  Output:  "World"
```

**Q8) Every Nth Character:**  
 Write a function that takes a string and an integer n as input and prints every nth character of the string.

```bash
  String: "Hello, World!"
  n: 3
  3rd position: l, ',' , o, d
```

**Q9) Remove Prefix:**  
 Write a function that takes a string and another string prefix as input and removes the prefix from the beginning of the string if it exists.

```bash
  str = "hello world"
  prefix = "hello "
  Output:  "World"
```

**10) Extract Word:**  
 Implement a function that takes a sentence and an integer index as input and prints the word at the specified index in the sentence.

```bash
  Sentence: "This is a sample sentence"
  Index: 3
  Output:  "sample"
```

### Case Conversion

**11) Convert to Uppercase:**  
 Write a program that takes a string as input and converts all characters to uppercase. (same for other cases)

```bash
  Input:  "Hello, World!"
  Output: "HELLO, WORLD!"
```

**12) Toggle Case:**  
 Create a program that takes a string as input and toggles the case of each character (converts uppercase letters to lowercase and vice versa)

```bash
  Input:  "Hello, World!"
  Output: "hELLO, wORLD!"
```

**13) Convert to Uppercase First Letter:**  
 Write a program that takes a string as input and converts the first letter of the string to uppercase while keeping the rest of the string unchanged.

```bash
  Input:  "hello, world!"
  Output: "Hello, world!"
```

**14) Reverse Case Conversion:**  
 Write a function that takes a string as input and converts uppercase letters to lowercase and vice versa, while also reversing the order of the characters in the string.

```bash
  Input:  "Hello, World!"
  Output: "!DLROw ,OLLEh".
```

### Trimming

**15) Remove Leading and Trailing Whitespaces:**  
 Write a program that takes a string as input and removes any leading and trailing whitespace characters. (remove space form front and end only).

```bash
  Input:  " Hello, World! "
  Output: "Hello, World!"
```

**16) Trim Specific Character:**  
 Write a function that takes a string and a specific character as input, and removes all occurrences of that character from both the beginning and end of the string.

```bash
  Input:  "***Hello, World!***", '*'
  Output: "Hello, World!"
```

**17) Remove Specific Characters:**  
 Write a function that takes a string as input, and removes all the character between A-Z, a-z and 0-9

```bash
  Input:  "Hello, World!"
  Output: ", !"
```

**18) Remove Whitespace between Words:**  
 Write a function that takes a string containing multiple words separated by whitespace characters and removes any extra whitespace between the words, leaving only a single space between them.

```bash
  Input:  " This is  an   example string   with extra   whitespace. "
  Output: "This is an example string with extra whitespace."
```

### Split and Join

**19) Split by Space:**  
 Write a program that takes a sentence as input and splits it into individual words based on whitespace characters.

```bash
  Input:  "The quick brown fox"
  Output: ["The", "quick", "brown", "fox"]
```

**20) Join Words with Space:**  
 Write a function that takes a list of words as input and joins them together into a single string with spaces between each word.

```bash
  Input:   ["Hello", "world", "how", "are", "you"]
  Output: "Hello world how are you"
```

**21) Split by Delimiter:**  
 Create a program that takes a string and a delimiter as input and splits the string into substrings based on the specified delimiter.

```bash
  Input:    "apple,banana,orange"
  delimiter = ","
  Output:  ["apple", "banana", "orange"]
```

### Replace Character

**22) Replace Character:**  
 Write a program that takes a string and two characters as input, and replaces all occurrences of the first character with the second character in the string.

```bash
  input_string = "hello world"
  char_to_replace = 'l'
  replacement_char = 'z'
  Output:   "hezzo worzd"
```

**23) Replace All Digits:**  
 Implement a function that takes a string as input and replaces all digits (numeric characters) with a specified character (e.g., '\*').

```bash
  input_string = "hello123world456"
  replacement_char = '*'
  Output: "hello***world***"
```

**24) Replace First Occurrence:**  
 Write a function that takes a string and two characters as input, and replaces the first occurrence of the character with the second character in the string.

```bash
  input_string = "hello world"
  char_to_replace = 'o'
  replacement_char = 'a'
  Output:     "hella world"
```

**25) Get Substring:**  
Write a program that takes a string and two integers representing the start and end indices as input, and returns the substring of the string from the start index to the end index.

```bash
  input_string = "hello world"
  start_index = 3
  end_index = 8
  Output: "lo wo"
```

**26) Get Every Nth Character:**  
Implement a program that takes a string and an integer 'n' as input, and returns a substring containing every nth character of the string.

```bash
  Input: "abcdefg", 
  n = 2
  Output: "bdf"
```

## Intermediate Questions

**1) CamelCase to Snake Case:**  
 Create a program that takes a string in CamelCase format as input and converts it to snake_case format.

```bash
  Input: "CamelCaseString"
  Output: "camel_case_string"
```

**2) Conditional Case Conversion:**  
 Create a function that takes a string as input and converts uppercase letters to lowercase if they occur at odd indices in the string, and converts lowercase letters to uppercase if they occur at even indices

```bash
  Input:  "Hello, World!"
  Output: "HeLlO, wOrLd!"
```

**3) Remove Prefix:**  
 Implement a program that takes a string and another string as input, and removes the specified prefix from the beginning of the string if it exists. (same do for suffix)

```bash
  Input:  "apple"
  prefix = "app"
  Output: "le"

  Input = "banana"
  prefix = "app"
  Output: "banana"
```

**4) Remove Duplicates:**  
 Implement a function that takes a string as input and removes consecutive duplicate characters, keeping only one occurrence of each character.

```bash
  Input:  "bookkeeper"
  Output: "bokeper"
```

**5) Remove Prefixes and Suffixes:**  
 Implement a function that takes a two string prefixes and suffixes as input, and removes any occurrences of prefixes and suffixes from the string.

```bash
  Input = "unhappiness"
  prefixes = "un"
  suffixes = "ness"
  Output: "happi"
```

**6) Remove HTML Tags:**  
 Create a program that takes an HTML string as input and removes all HTML tags (enclosed within angle brackets < >) from the string, leaving only the text content.

```bash
  Input = "<p>This is <b>bold</b> and <i>italic</i> text.</p>"
  Output: "This is bold and italic text."
```

**7) Split and Join to Uppercase:**  
 Write a program that takes a sentence as input, splits it into individual words, converts each word to uppercase, and then joins them back together into a single string.

```bash
  Input = "The quick brown fox"
  Output: "THE QUICK BROWN FOX"
```

**8) Split by Multiple Delimiters:**  
 Write a program that takes a string and a list of delimiters as input and splits the string into substrings based on any of the specified delimiters.

```bash
  Input = "apple,banana.orange"
  delimiters = [",", "."]
  Output: ["apple", "banana", "orange"]
```

**9) Join Words with Formatting:**  
 Implement a program that takes a list of words and their corresponding formatting options as input (e.g., uppercase, lowercase, title case) and joins them together into a single string with the specified formatting.

```bash
  Input = [("hello", "uppercase"), ("world", "titlecase"), ("python", "lowercase")]
  Output: "HELLO World python"
```

**10) Split and Join with Filtering:**  
 Create a function that takes a string as input, splits it into individual words, filters out words that contain specific characters, and then joins the remaining words back together into a single string.

```bash
  Input = "hello ji DSA Padho"
  filter_characters = {'o', 'b'}
  Output: "ji DSA"
```

**11) Replace with Conditional:**  
 Create a function that takes a string as input and replaces all vowels (a, e, i, o, u) with a specified character (e.g., '\*').

```bash
  input_string = "hello world"
  replacement_char = '*'
  Output: "h*ll* w*rld"
```

**12) Replace with Random Character:**  
 Write a program that takes a string as input and replaces each character in the string with a randomly selected character from a specified set of characters (e.g., 'abcdefghijklmnopqrstuvwxyz').

```bash
  input_string = "hello world"
  character_set = 'abcdefghijklmnopqrstuvwxyz'
  Output : It should Random each time
```

**13) Get Middle Substring:**  
 Write a function that takes a string as input and returns the middle substring of odd-length strings, or the two middle substrings of even-length strings.

```bash
  input_string = "hello"
  Odd-Length String:      Output -->  "l"
  Even-Length String:      Output -->  "or" "rl"
```