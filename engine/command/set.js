export default function set_variable(line, storage, is_start) {
  if (line[0] != "set") return [false, "200"];
  if (!is_start.status) return [false, "206"];

  let var_name = line[1];
  let var_value = line.slice(2).join(" ");
  if (!storage.hasOwnProperty(var_name)) return [false, "201"];

  switch (storage[var_name].type) {
    case "string":
      let params = var_value.split("+");
      for (let i = 0; i < params.length; i++) {
        if (params[i].indexOf('"') != -1) {
          params[i] = params[i].slice(
            params[i].indexOf('"') + 1,
            params[i].lastIndexOf('"')
          );
        } else {
          params[i] = params[i].replaceAll(" ", "");
          if (!storage.hasOwnProperty(params[i])) return [false, "201"];
          if (storage[params[i]].type != "string") return [false, "202"];
          params[i] = storage[params[i]].value;
        }
      }

      storage[var_name].value = params.join("");
      break;
    case "number":
      let operators = [];

      for (let i = 0; i < var_value.length; i++) {
        if (["+", "-"].indexOf(var_value[i]) != -1)
          operators.push(var_value[i]);
      }

      let args = var_value.split("+").join("?").split("-").join("?").split("?");

      for (let i = 0; i < args.length; i++) {
        if (Number.isNaN(parseInt(args[i]))) {
          args[i] = args[i].replaceAll(" ", "");
          if (!storage.hasOwnProperty(args[i])) return [false, "201"];
          if (storage[args[i]].type != "number") return [false, "203"];
          args[i] = parseInt(storage[args[i]].value);
        } else {
          args[i] = parseInt(args[i]);
        }
      }

      let result = args[0];
      args = args.slice(1);
      for (let i = 0; i < args.length; i++) {
        if (operators[i] == "+") result += args[i];
        else if (operators[i] == "-") result -= args[i];
      }

      // if (Math.abs(result) > 16777216) return [false, "205"];
      storage[var_name].value = parseInt(result);
      break;
    default:
      return [false, "204"];
  }

  return true;
}
