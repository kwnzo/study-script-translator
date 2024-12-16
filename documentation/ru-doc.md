## документация `Study Script`

**навигация**

- **команды**:
    - [start](#start)
    - [new](#new)
    - [set](#set)
    - [log](#log)
    - [if](#if)
    - [close](#close)
    - [delete](#delete)
- **операторы**:
    - [Математические операторы](#математические-операторы)
    - [Логические операторы](#логические-операторы)
    - [Комбиниованные операторы](#комбинированные-операторы)
- **Типы данных**:
    - [числа](#числа)
    - [текст](#текст)
- **ошибки**:
    
# Команды

### start

**Техническое описание**: 

_эта команда предоставляет доступ к хранилищу данных (виртуальная память)._

**Аналоговое описание**:

_внутри компютера есть Оперативная память. Эта часть компьютера нужна для хранения временных данных для программ и процессов, и последующей очистки этого пространства после окончания программы или процесса. таким образом `start` имитирует доступ к Оперативной памяти или просто имитирует её саму, теперь наша программа может использовать временное хранилище компьютера для хранения временной информации для нашей программы._


синтаксис:
```
start
```

---

## new

**Техническое описание**:

_создаёт новую переменную в нашем хранилище с указанием типа данных_

**Аналоговое описание**:

_Оперативная память, это деталь, которая содержит в себе Чипы - Блоки памяти, и каждый чип может хранить информацию внутри ещё меньших частей памяти, мы назовём их "бансковскими ячейками", как в настоящем банке мы можем хранить наши драгоценности. также как в банке, мы может получить доступ к 1 "Банковской ячейки" для нашей программы и сохранить там информацию. но прямо сейчас мы только можем сказать банку, что нам нужна вот эта "банковская ячейка" и никто другой (другая программа) не сможет ей воспользоваться._

синтаксис:
```
new <имя_переменной> <тип_данных>
```

`<имя_переменной>` имя переменной может состоять из латинских букв от `a` до `z`, от `A` до `Z` (**регистр клавиатуры ИМЕЕТ значение!**), цифр от `0` до `9` и `_` (символ нижнего подчёркивания) в любом порядке, котором вы хотите

`<тип_данных>` сейчас доступно всего 2 типа данных: `number` (для чисел), `string` (для текста)

пример:

числовая переменная `PI`
```
new PI number
```

текстовая переменная `first_name` 
```
new first_name string
```

## set

**техническое описание**:

_устанавливает значение для существующей переменной учитывая корректный тип данных_

**аналоговое описание**:

_теперь, когда мы орендовали "банковскую ячейку" мы можем хранить там данные. но есть 1 исключение, "банковская ячейка" может быть 2 типов, Число и Текст, мы скажем, что число это наши обычные деньги (которые просто цифра рублей на нашем счету) и текст, это наши ключи от машины, ювелирные украшения, золото и т.д. (это набор разных вещей, который я могу описать словами)_

синтаксис:
```
set <имя_переменной> <выражение_данных>
```

`<имя_переменной>` это имя существующей переменной (we used `new` for create it)

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
