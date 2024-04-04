# Strings 💬

In programming, a string is a sequence of characters, typically used to represent text. Strings are a fundamental data type in most programming languages.

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
