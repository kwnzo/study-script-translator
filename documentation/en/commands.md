# navigation of `Study Script` commands
## process commands:
    - [start](#start)
    - [finish](#finish)
## variable commands:
    - [new](#new)
    - [set](#set)
    - [delete](#delete)
## condition commands:
    - [if](#if)
    - [else](#else)
    - [close](#close)
## loop commands:
    - [loop](#loop)
    - [end](#end)
## input/output commands:
    - [log](#log)
## comments command:
    - [comments](#comments)

---

# process commands:

### start

**description**: 

_this command provides access to data storage (virtual memory)._

**syntax**:
```
start
```

### finish

**description**:

_this command clears storage, kills program process and finishes the program._

**syntax**:
```
finish
```

---

# variable commands

## new

**description**:

_create a new variable in our storage with an indication of the type_

**syntax**:
```
new <variable_name> <data_type>
```

`<variable_name>` name of variable can contain letters a-z, A-Z (**keyboard case DOES matter!**), 0-9 and _ (underline symbol) in any order you want

`<data_type>` now only available types are: `number` (for numbers), `string` (for text data)

**example**:

variable `PI` with type number
```
new PI number
```

variable `first_name` with type string (text)
```
new first_name string
```

## set

**description**:

_sets a value to existed variable with correct data type_

**syntax**:
```
set <variable_name> <data_expression>
```

`<variable_name>` is a name of variable that exist (we used `new` for create it)

`<data_expression>` is a expression of data in type of variable type, one or more parametrs combined into one (if numbers, then it's a result of math expression) (if text, then it's a new string, that joined to themself). in expression you can use as raw data (numbers and string) such as stored data (variables)

**example**:

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

## delete

**description**:

_this command deletes a variable_

**syntax**:
```
delete <variable_name>
```

`<variable_name>` - name of existed variable that you created with `new` before

**example**:

a = 10
```
delete a
```

---

# condition commands

## if

**description**:

_condition case for execute next code only if condition are true_

**syntax**:
```
if (<condition>)
    <code>
close
```

`<condition>` is expression of comprasion 2 sides. we can say if 1st (left) side bigger/higher/more then 2nd (right) side. if it's correct then `<code>` of any code written on `Study Script` will be executed. for compare 2 sides we have `>` operator.

**example**:

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

## else 

**description**:

_optional command in condition construction that able to execute another code if condition was false_

**syntax**:
```
if (<condition>)
    <code>
else
    <code>
close
```

**example**

let's improve `if` example with `else` command
```
if (age > adult)
    log string "he/she is adult and can buy alchohol"
else
    log string "he/she is NOT adult and can NOT buy alchohol"    
close
```

## close

**description**:

_operator for finish code block after condition `if`_

**syntax**:
```
close
```

---

# loop commands

## loop

**description**:

_creates code loop while condition is true_

**syntax**:
```
loop <loop_name> (<condition>)
    <code>
end <loop_name>
```

`<loop_name>` - name of loop, such as variables have the same naming limits. stores in different memory pool, but it's not good practice to name variables and loops with same names
`<condition>` - default condition of 2 sides. while condition is true, loop will run code over and over again
`<code>` - any your code for compile

**example**

i = 1
```
loop counter (6 > i)
    log number i
    set i i + 1
end counter
```

output:
```
1
2
3
4
5
```

## end

**description**:

_end of current loop command_

**syntax**:
```
end <loop_name>
```

# input/output commands:

## log

**description**:

_writes information into console (screen)_

**syntax**:
```
log <data_type> <data_expression>
```

`<data_type>` - data type of `<data_expression>`

`<data_expression>` - any combination of the raw and stored data in the indificated data type. use `>>` for join variables (any type) into strings.

**example**:

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

# comments command

**description**

_comments are helpful for explain your code or leave few marks for developer. comments are able to be in the same line to another commands_

**syntax**:
```
? <text>
```

`<text>` - any text in current line