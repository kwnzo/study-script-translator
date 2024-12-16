export default function if_sentence(line, storage, is_start, ignore) {
  if (line[0] != "if") return [false, "500"];

  let condition = line.join(" ");
  condition = condition.slice(
    condition.indexOf("(") + 1,
    condition.indexOf(")")
  );
  condition = condition.split(" ").join("");
  let operator;

  if (condition.indexOf(">") != -1) {
    condition = condition.split(">");
    operator = ">";
  } else return [false, "501"];

  for (let i = 0; i < condition.length; i++) {
    if (Number.isNaN(parseInt(condition[i]))) {
      if (!is_start.status) return [false, "502"];
      if (!storage.hasOwnProperty(condition[i])) return [false, "503"];
      if (storage[condition[i]].type != "number") return [false, "504"];

      condition[i] = storage[condition[i]].value;
    } else condition[i] = parseInt(condition[i]);
  }

  if (operator == ">" && condition[0] > condition[1]) ignore.status = false;
  else ignore.status = true;

  return true;
}
