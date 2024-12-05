export default function delete_variable(line, storage, is_start) {
  if (line[0] != "delete") return [false, "300"];
  if (!is_start.status) return [false, "302"];

  let var_name = line[1];
  if (!storage.hasOwnProperty(var_name)) return [false, "301"];

  delete storage[var_name];

  return true;
}
