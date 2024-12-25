# navigation of `Study Script` errors
- **syntax policy errors**:
- **compile errors**:
    - [log](#log)
    - [new](#new)
    - [set](#set)
    - [delete](#delete)
    - [start](#start)
    - [if](#if)
    - [close](#close)
    - [else](#else)
    - [finish](#finish)
- **unexpected errors**:
    - [undefined](#undefined)

# syntax policy errors

# compile errors

## log

**ERROR_CODE**: `000`<br>
**ERROR_OUTPUT**: `not a 'log' operator`<br>
**Solution**: _line for a log command must start from `log`_

**ERROR_CODE**: `001`<br>
**ERROR_OUTPUT**: `wrong log data type operator`<br>
**Solution**: _write correct data type after log such as `log number` or `log string`_

**ERROR_CODE**: `002`<br>
**ERROR_OUTPUT**: `variable does not exist`<br>
**Solution**: _text must be in `"` like `"text"`, variable must be setted first `set <variable> <type>`_

**ERROR_CODE**: `003`<br>
**ERROR_OUTPUT**: `variable type is not a number`<br>
**Solution**: _`log number <variable>`. variable must be number like `set variable numer` or use `log string <variable>` for write string_

**ERROR_CODE**: `004`<br>
**ERROR_OUTPUT**: `undefined math operation with numbers`<br>
**Solution**: _it's able to use only `+` and `-` like `log number 1 + 1 - 1`_

**ERROR_CODE**: `005`<br>
**ERROR_OUTPUT**: `cannot use variable in sentences, memory storage does not exist`<br>
**Solution**: _add `start` in the beginning of your program_

## new

**ERROR_CODE**: `100`<br>
**ERROR_OUTPUT**: `not a 'new' operator`<br>
**Solution**: _line for a new command must start from `new`_

**ERROR_CODE**: `101`<br>
**ERROR_OUTPUT**: `this variable is already exist`<br>
**Solution**: _cannot create a variable that was created before, for set a value use `set` or rename variable for succefull creation_

**ERROR_CODE**: `102`<br>
**ERROR_OUTPUT**: `wrong variable type`<br>
**Solution**: _it must be correct type such as `number` or `string`, like `new x number`_

**ERROR_CODE**: `103`<br>
**ERROR_OUTPUT**: `cannot create a new variable, memory storage does not exist`<br>
**Solution**: _add `start` in the beginning of your program_

## set

**ERROR_CODE**: `200`<br>
**ERROR_OUTPUT**: `not a 'set' operator`<br>
**Solution**: _line for a set command must start from `set`_

**ERROR_CODE**: `201`<br>
**ERROR_OUTPUT**: `cannot set a value for a variable that does not exist`<br>
**Solution**: _create variable first, `new <name> <type>`_

**ERROR_CODE**: `202`<br>
**ERROR_OUTPUT**: `wrong variable value for String type`<br>
**Solution**: _string must be inside of `"` like `"text"`_

**ERROR_CODE**: `203`<br>
**ERROR_OUTPUT**: `wrong variable value for Number type`<br>
**Solution**: _just a default positive non-fractional integer number like `123`_

**ERROR_CODE**: `204`<br>
**ERROR_OUTPUT**: `cannot set value for this variable. undefined type`<br>
**Solution**: _somehow variable have undefiend type, use `new <name> <type>` where type will be correct_

**ERROR_CODE**: `205`<br>
**ERROR_OUTPUT**: `number is out of range`<br>
**Solution**: _number is too big (in v.1.1.5 there is not limits)_

**ERROR_CODE**: `206`<br>
**ERROR_OUTPUT**: `cannot set a variable value, memory storage does not exist`<br>
**Solution**: _add `start` in the beginning of your program_

## delete

**ERROR_CODE**: `300`<br>
**ERROR_OUTPUT**: `not a 'delete' operator`<br>
**Solution**: _line for a delete command must start from `delete`_

**ERROR_CODE**: `301`<br>
**ERROR_OUTPUT**: `cannot delete a variable that does not exist`<br>
**Solution**: _variable must be created before with `new` and not deleted before with `delete`. maybe your used wrong name or didn't created or already deleted the variable_

**ERROR_CODE**: `302`<br>
**ERROR_OUTPUT**: `cannot delete a variable, memory storage does not exist`<br>
**Solution**: _add `start` in the beginning of your program_

## start

**ERROR_CODE**: `400`<br>
**ERROR_OUTPUT**: `not a 'start' operator`<br>
**Solution**: _line for a start command must start from `start`_

**ERROR_CODE**: `401`<br>
**ERROR_OUTPUT**: `'start' command found more arguments than expected (0)`<br>
**Solution**: _that's just `start`, anything else, you trying `start a b c ...`, where a, b, c, etc. is different options_

**ERROR_CODE**: `402`<br>
**ERROR_OUTPUT**: `storage already assembled`<br>
**Solution**: _program already started with `start`, so can delete `start` here_

## if

**ERROR_CODE**: `500`<br>
**ERROR_OUTPUT**: `not a 'if' operator`<br>
**Solution**: _line for a if command must start from `if`_

**ERROR_CODE**: `501`<br>
**ERROR_OUTPUT**: `undefined condition operator`<br>
**Solution**: _there is only 1 able condition operator (v.1.1.5) `>` with syntax `if (a > b)`_

**ERROR_CODE**: `502`<br>
**ERROR_OUTPUT**: `cannot use variables in sentences, memory storage does not exist`<br>
**Solution**: _add `start` in the begging of your program_

**ERROR_CODE**: `503`<br>
**ERROR_OUTPUT**: `cannot operate sentence, variable does not exist`<br>
**Solution**: _maybe misspell or really didn't create and set variable with `new` and `set` before_

**ERROR_CODE**: `504`<br>
**ERROR_OUTPUT**: `cannot operate with this variable, arguments must be in Number type`<br>
**Solution**: _this variable have type different from number, use `new <variable> number` or use different variable_

## close

**ERROR_CODE**: `600`<br>
**ERROR_OUTPUT**: `not a 'close' operator`<br>
**Solution**: _close command must starts from `close`_

**ERROR_CODE**: `601`<br>
**ERROR_OUTPUT**: `'close' command found more arguments than expected (0)`<br>
**Solution**: _that's just `close`, anything else, you trying `close a b c ...`, where a, b, c, etc. is different options_

## else

**ERROR_CODE**: `700`<br>
**ERROR_OUTPUT**: `not a 'else' operator`<br>
**Solution**: _line for a command else must start from `else`_

**ERROR_CODE**: `701`<br>
**ERROR_OUTPUT**: `'else' command found more arguments than expected (0)`<br>
**Solution**: _that's just `else`, anything other options, you trying `else a b c ...`, where a, b, c, etc. is different options_

## finish

**ERROR_CODE**: `800`<br>
**ERROR_OUTPUT**: `not a 'finish' operator`<br>
**Solution**: _line for a command finish must starts from `finish`_

**ERROR_CODE**: `801`<br>
**ERROR_OUTPUT**: `'finish' command found more arguments than expected (0)`<br>
**Solution**: _that's just `finish`, anything else, you trying `finish a b c ...`, where a, b, c, etc. is different options_

# unexpected errors

## undefined

**ERROR_CODE**: `undefined`<br>
**ERROR_OUTPUT**: `undefined error`<br>
**Solution**: _-_

**ERROR_CODE**: `0`<br>
**ERROR_OUTPUT**: `undefined command`<br>
**Solution**: _each line (expect empty) must start from existed command such as `if`, `set`, `start`, etc._
