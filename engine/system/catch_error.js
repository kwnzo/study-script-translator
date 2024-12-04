function e_code(x) {
  console.log("\x1b[31m", `\tERROR_CODE: ${x}`);
}

function e(x) {
  console.log("\x1b[31m", `\t${x}`);
}

let errors = {
  undefined: "undefined error",
  // log
  "000": "not a 'log' operator",
  "001": "wrong log data type operator",
  "002": "variable does not exist",
  "003": "variable type is not a number",
  "004": "undefined math operation with numbers",

  // new
  100: "not a 'new' operator",
  101: "this variable is already exist",
  102: "wrong variable type",

  // set
  200: "not a 'set' operator",
  201: "variable does not exist",
  202: "wrong variable value for String type",
  203: "wrong variable value for Number type",
  204: "cannot set value for this variable. undefined type",
  205: "number is out of range",
};

export default function catch_error(status, index, line) {
  if (status === false || status?.[0] === false) {
    console.log("\x1b[31m", `> error in line: ${index}`);
    e_code(status?.[1]);
    e(errors[status?.[1]]);

    return true;
  } else return false;
}
