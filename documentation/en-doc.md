## `Study Script` documentation

**navigation**

- **commands**:
    - [start](#start)
    - [new](#new)
    - [set](#set)
    - [log](#log)
    - [if](#if)
    - [close](#close)
    - [delete](#delete)
- **operators**:
    - [Math operators](#math-operators)
    - [Logical operators](#logical-operators)
    - [Combined operators](#combined-operators)
- **data types**:
    - [number](#number)
    - [text](#string)
    
# commands

### start

**technical description**: 

_this command provides access to data storage (virtual memory)._

**analog description**:

_there is a RAM inside of your computer. this part of computer needs to store temproray data for programs and proccesses and deletes/clear this space after program or proccess will finish. so `start` imitates access to RAM or just RAM itself, so now our program can use computer's temproray storage for store some data for our program._


syntax:
```
start
```

---

## new

**technical description**:

_create a new variable in our storage with an indication of the type_

**analog description**:

_RAM is the detail, that contains chips - memory block, and each chip can store some data inside of smaller part of memory, we'll call it "bank cell", like in real banks we can save our jewelry. same to it we can take access for 1 "bank cell" for our program and save there our data. but now we only said for bank, that this "bank cell" is for us and nobody can do something with it._

syntax:
```
new <variable_name> <data_type>
```

`<variable_name>` name of variable can contain letters a-z, A-Z (**keyboard case DOES matter!**), 0-9 and _ (underline symbol) in any order you want

`<data_type>` now only available types are: `number` (for numbers), `string` (for text data)

example:

variable `PI` with type number
```
new PI number
```

variable `first_name` with type string (text)
```
new first_name string
```

## set

**technical description**:

_sets a value to existed variable with correct data type_

**analog description**:

_now, when we rented a "bank cell" we can store some data there. but there is one exception, "bank cells" can be 2 types, Number and String (text), we'll say that number is our regular money (that is just a number of dollars in our account) and string (text) is our car keys, jewerly, gold, etc. (that is like a set of many different things that I can only describe by words)_

syntax:
```
set <variable_name> <data_expression>
```

`<variable_name>` is a name of variable that exist (we used `new` for create it)

`<data_expression>` is a expression of data in type of variable type, one or more parametrs combined into one (if numbers, then it's a result of math expression) (if text, then it's a new string, that joined to themself). in expression you can use as raw data (numbers and string) such as stored data (variables)

example:

b = 2<br>
x = 5 + b - 7<br>
```
set x 5 + b - 7
```
(x = 7)

---

name = "Tempest"<br>
greetings = "My name is " + name
```
set greetings "My name is" + name
```
(greetings = "My name is Tempest")

## log

**technical description**:

_writes information into console (screen)_

**analog description**:

_that's literally it is. just shows somthing on your screen (I mean console)._

syntax:
```
log <data_type> <data_expression>
```

`<data_type>` - data type of `<data_expression>`

`<data_expression>` - any combination of the raw and stored data in the indificated data type. use `>>` for join variables (any type) into strings.

example:

text<br>
name = "John"<br> 
age = 17 (number)
```
log string "My name is " >> name >> ", I'm " >> age >> " years old."
```

number<br>
x = 5
```
log number 2 + x - 7
```

## if

**technical description**:

_condition case for execute next code only if condition are true_

**analog description**:

> (transistor explanation is better I guess)

_our program can return different information depends on data we have. so for make program variable we have this command. we can ask is (something) true or false_

syntax:
```
if (<condition>)
    <code>
close
```

`<condition>` is expression of comprasion 2 sides. we can say if 1st (left) side bigger/higher/more then 2nd (right) side. if it's correct then `<code>` of any code written on `Study Script` will be executed. for compare 2 sides we have `>` operator.

example:

we have to determine is someone adult or not and can he/she buy alchohol. remember in different countries adult age is different, so we'll take `18` as it.

age = 17<br>
adult = 18
```
if (age > adult)
    log string "he/she is adult and can buy alchohol"
close

if (adult > age)
    log string "he/she is NOT adult and can NOT buy alchohol"
close
```

## close

**technical description**:

_operator for finish code block after condition `if`_

**analog description**:

_program doesn't know when finish `<code>` block for `if` operator, so this commands says to program that right here we finish `if` brackets and continues our program_

syntax:
```
close
```

example:<br>
go to `if` example

## delete

**technical description**:

_this command deletes a variable_

**analog description**:

_as you remember we took "bank cell" for our variable and now we refuse from using this memory cell. I mean we taking out our money and jewelry and leaving bank, now our "bank cell" is not our and anybody can do anything with it._

syntax:
```
delete <variable_name>
```

`<variable_name>` - name of existed variable that you created with `new` before

example:

a = 10
```
delete a
```

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

integer number without fractional part. limit - `16777216`

## string

text information inside of `"` symbols like `"text"` without limit of maximum length
