export default function end(line, loops, storage, ignore, is_start) {
  if (line[0] != "end") return [false, "1000"];

  if (ignore.ignore_until != false) {
    ignore.ignore_until = ignore.ignore_until.filter(
      (x) => x != line.join(" ")
    );
    if (ignore.ignore_until.length == 0) ignore.ignore_until = false;
  }

  let loop_name = line[1];

  if (!loops.hasOwnProperty(loop_name)) return [false, "1001"];

  let condition = loops[loop_name].condition;
  let passed = false;

  if (condition.indexOf(">") != -1) {
    let params = condition.split(">");

    for (let i = 0; i < params.length; i++) {
      if (Number.isNaN(parseInt(params[i]))) {
        if (!storage.hasOwnProperty(params[i])) return [false, "902"];
        if (storage[params[i]].type != "number") return [false, "903"];

        params[i] = storage[params[i]].value;
      } else {
        params[i] = parseInt(params[i]);
      }
    }

    if (params[0] > params[1]) passed = true;
  } else return [false, "1002"];

  if (passed === true) return loops[loop_name].line;

  return true;
}
