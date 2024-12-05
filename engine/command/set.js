export default function set_variable(line, storage, is_start) {
  if (line[0] != "set") return [false, "200"];
  if (!is_start.status) return [false, "206"];

  let var_name = line[1];
  let var_value = line.slice(2).join(" ");
  if (!storage.hasOwnProperty(var_name)) return [false, "201"];

  switch (storage[var_name].type) {
    case "string":
      let non_spaced = var_value[0].replaceAll(" ", "");
      if (
        non_spaced[0] != '"' ||
        non_spaced.at(-1) != '"' ||
        non_spaced.length - 2 >= non_spaced.replaceAll('"', "").length
      )
        return [false, "202"];
      storage[var_name].value = var_value.slice(1, var_value.length - 1);
      break;
    case "number":
      if (Number.isNaN(parseFloat(var_value))) return [false, "203"];
      let current_number =
        var_value.indexOf(".") != -1
          ? parseFloat(var_value)
          : parseInt(var_value);
      if (Math.abs(current_number) > 16777216) return [false, "205"];
      storage[var_name].value = current_number;

      break;
    default:
      return [false, "204"];
  }

  return true;
}
