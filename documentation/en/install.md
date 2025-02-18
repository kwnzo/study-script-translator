# `Study Script` installation instructiondocumentation

instruction developed for Linux, actual for Windows and Mac

## Step 1. create new folder for workflow and open in terminal

## Step 2. make sure Node.js and NPM were installed

official instruction for download and install Node.js & npm - https://nodejs.org/en/download

## Step 3. setup project

```
npm init
```

press enter for each step, if you don't mind about configurations

## Step 4. install Study Script

```
npm i study-script
```

## Step 5. create your first programm

file `test.ess`:
```
start

log string "Hello world"

finish
```

use any text editor for write code on `Study Script`.
personally I can recommend `Sublime Text`, `Visual Studio Code` or just use notepad if you don't mind

## Step 6. run your first program

```
npm node_module/study-script/compiler.js --file=test
```

replace `test` in end of line with your file without extention `.ess`

## Step 7. check if it works correct 

```
Hello world
 > program finished
 	  compilation time: 3ms.
 	  forgotten garbage size: 0 bites
```
