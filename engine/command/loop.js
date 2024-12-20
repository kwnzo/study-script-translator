export default function loop(
  line_index,
  line,
  loops,
  storage,
  ignore,
  is_start
) {
  if (line[0] != "loop") return [false, "900"];

  let loop_name = line[1];
  let condition = line.slice(2).join(" ");

  condition = condition.slice(
    condition.indexOf("(") + 1,
    condition.indexOf(")")
  );

  condition = condition.split(" ").join("");
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
  } else return [false, "901"];

  loops[loop_name] = {
    condition: condition,
    line: line_index,
  };

  if (passed === false) {
    if (ignore.ignore_until == false) ignore.ignore_until = [];
    ignore.ignore_until.push(`end ${loop_name}`);
  }

  return true;
}
