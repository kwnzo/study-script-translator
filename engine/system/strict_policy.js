const available_variable = '_0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM'.split('');
const available_number = '0123456789'.split('');

function check_variable_name(name) {
    if (available_number.indexOf(name[0]) != -1) return name;

    name = name
        .split('')
        .filter(x => {
            return available_variable.indexOf(x) == -1;
        })
        .join('');

    return name;
}

function check_number(number) {
    if (number[0] == '0') return number;

    number = number
        .split('')
        .filter(x => {
            return available_number.indexOf(x) == -1;
        })
        .join('');

    return number;
}

function check(sentence, command, type) {
    if (command == 'log') {
        if (type == 'string') {
            sentence = sentence.replaceAll(' ', '').split('>>');
            for (let i = 0; i < sentence.length; i++) {
                if (sentence[i][0] == '"' && sentence[i].at(-1) == '"') {} // "text"
                else { // variable
                    if (check_variable_name(sentence[i]) != '') return [false, 's006']
                }
            }
            return true;
        } else if (type == 'number') {
            sentence = sentence.replaceAll(' ', '')
                .split('+')
                .join('?')
                .split('-')
                .join('?')
                .split('?');
            
            for (let i = 0; i < sentence.length; i++) {
                if (!(check_number(sentence[i]) != -1 || check_variable_name(sentence[i]) != -1)) return [false, 's006_1'];
            }
            return true;
        } else return [false, 's001'];
    }

    return [false, undefined];
}

export default function strict_policy(line) {
    line = line.split(' ');

    switch (line[0]) {
        case "":
            return true;
        case undefined:
            return true;
        case "log":
            if (['number', 'string'].indexOf(line[1]) == -1) return [false, 's001'];
            return check(line.slice(2).join(' '), line[0], line[1]);
        case "new":
            // #inwork
            return true;
        case "set":
            // #inwork
            return true;
        case "delete":
            // #inwork
            return true;
        case "start":
            // #inwork
            return true;
        case "if":
            // #inwork
            return true;
        case "close":
            // #inwork
            return true;
        case "else":
            // #inwork
            return true;
        case "finish":
            // #inwork
            return true;
        case "loop":
            // #inwork
            return true;
        case "end":
            // #inwork
            return true;
        default:
            return [false, 's0'];
    }
}