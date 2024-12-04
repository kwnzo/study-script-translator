export default function new_variable(line, storage) {
  if (line[0] != "new") return [false, "100"];

  let var_name = line[1];
  let var_type = line[2];

  let types_definition = {
    string: "",
    number: 0,
  };

  if (storage.hasOwnProperty(var_name)) return [false, "101"];
  if (!types_definition.hasOwnProperty(var_type)) return [false, "102"];

  storage[var_name] = {
    type: var_type,
    value: types_definition[var_type],
  };

  return true;
}
