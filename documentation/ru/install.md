# инструкция по установке `Study Script`

инструкция разработана для Linux, актуальна для Windows и Mac

## Шаг 1. создайте папку для разработки и откройте её в терминале

## Шаг 2. убедитесь, что Node.js и NPM были установлены

официальная инструкция для скачивания и установки Node.js и npm - https://nodejs.org/en/download

## Шаг 3. развернуть проект

```
npm init
```

нажимайте Enter для каждого следующего шага, если вам не важны конфигурации

## Step 4. установить Study Script

```
npm i study-script
```

## Step 5. создайте вашу первую программу

файл `test.ess`:
```
start

log string "Привет мир"

finish
```

используйте любой текстовый редактор для написания кода на `Study Script`.
лично я рекомендую `Sublime Text`, `Visual Studio Code` или используйте блокнот, если вам не важен редактор кода

## Step 6. запустите вашу первую программу

```
npm node_module/study-script/compiler.js --file=test
```

поменяйте `test` в конце строчки на название вашего файла без расширения `.ess`

## Шаг 7. проверьте корректность работы программы

```
Привет мир
 > program finished
 	  compilation time: 3ms.
 	  forgotten garbage size: 0 bites
```
