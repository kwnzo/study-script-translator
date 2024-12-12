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
    
## commands

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

### new

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
