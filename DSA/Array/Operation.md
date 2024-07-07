
### Accessing array elements

Two unique and different ways of accessing an element from an array.

1. **Using pointer** `*(arr+1)`

```cpp
int arr[10] = {1, 5, 2, 7, 9};
  
for (int i = 0; i < 10; i++) {
    cout << *(arr + i) << ' ';
}
```

- `arr` The address of the first element of the array.
- `arr + 1` The address of the second element of the array.
- `*` is the dereference operator. When you apply it to a pointer, it gives you the value at the address the pointer is pointing to.

2. **Normal & Conventional method**

```cpp
int arr[10] = {1, 5, 2, 7, 9};
    
for (int i = 0; i < 10; i++) {
    cout << arr[i] << ' ';
}
```

### Inserting Elements in an Array

```cpp
// Inserting Elements in an Array at the End


```
















