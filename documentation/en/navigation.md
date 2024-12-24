# `Study Script` documentation

## navigation

- [commands](https://github.com/SenatorMorra/study-script/blob/main/documentation/en/commands.md)
- [operators](https://github.com/SenatorMorra/study-script/blob/main/documentation/en/operators.md)
- [data types](https://github.com/SenatorMorra/study-script/blob/main/documentation/en/data_types.md)
- [errors](https://github.com/SenatorMorra/study-script/blob/main/documentation/en/errors.md)

**navigation**

- **operators**:
    - [Math operators](#math-operators)
    - [Logical operators](#logical-operators)
    - [Combined operators](#combined-operators)
- **data types**:
    - [number](#number)
    - [text](#string)
- **errors**:

# operators

## Math operators

`-` - minus operator for decrease second number from first number

```
5 - 2 = 3
```

`+` - plus operator for increase first number on second number

```
5 + 2 = 7
```

## Logical operators

`>` - more operator check if first number more then 

false
```
7 > 10
```

true
```
7 > 5
```

## Text operators

`+` - concat 2 text strings into 1

## Combined operators 

`>>` - special operator for log, concat any 2 data expression / variables / raw data type 

```
"I'm " >> 20 >> " years old"
```

legit example:
```
new number age
set age 20

log string "I'm " >> age >> " years old"
```

# Data types

## number

integer number without fractional part.

## string

text information inside of `"` symbols like `"text"` without limit of maximum length
