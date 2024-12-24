# navigation of `Study Script` operators and definitions
- **operators**:
    - [Math operators](#math-operators)
    - [String operators](#string-operators)
    - [Logical operators](#logical-operators)
    - [Output operators](#output-operators)
- **definitions**:
    - [TIME](#TIME)
    - [binary](#binary)

--- 

# operators:

## Math operators

`+` - summarize 2 numbers

`-` - decreases 2nd number from 1st number

## String operators

`+` - combines 2 strings into 1

## Logical operators

`>` - shows is 1st side is higher/bigger/more then 2nd side.

## Outpout operators

`>>` - combines output without data type compression

# definitions:

## TIME

**description**:

_time is interactive variable constant that always equals to current time in timestamp format (number)_

**syntax**:
```
TIME
```
this variable is operatable

**example**:
```
log number TIME
```

## binary

**description**:

_this function helps for convert number to binary value that can be operatable as string_

**syntax**:
```
binary(<number>)
```

**example**

bio string
age = 14
```
set bio "I'm " + binary(age) + " years old"
```