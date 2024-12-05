function e_code(x) {
  console.log("\x1b[31m", `\tERROR_CODE: ${x}`);
}

function e(x) {
  console.log("\x1b[31m", `\t${x}`);
}

let errors = {
  undefined: "undefined error",
  0: "undefined command",

  // log
  "000": "not a 'log' operator",
  "001": "wrong log data type operator",
  "002": "variable does not exist",
  "003": "variable type is not a number",
  "004": "undefined math operation with numbers",
  "005": "cannot use variable in sentences, memory storage does not exist",

  // new
  100: "not a 'new' operator",
  101: "this variable is already exist",
  102: "wrong variable type",
  103: "cannot create a new variable, memory storage does not exist",

  // set
  200: "not a 'set' operator",
  201: "cannot set a value for a variable that does not exist",
  202: "wrong variable value for String type",
  203: "wrong variable value for Number type",
  204: "cannot set value for this variable. undefined type",
  205: "number is out of range",
  206: "cannot set a variable value, memory storage does not exist",

  // delete
  300: "not a 'delete' operator",
  301: "cannot delete a variable that does not exist",
  302: "cannot delete a variable, memory storage does not exist",

  // start
  400: "not a 'start' operator",
  401: "'start' command found more arguments than expected (0)",
  402: "storage already assembled",
};

export default function catch_error(status, index, line) {
  if (status === false || status?.[0] === false) {
    console.log("\x1b[31m", `> error in line: ${index}`);
    e_code(status?.[1]);
    e(errors[status?.[1]]);

    return true;
  } else return false;
}
