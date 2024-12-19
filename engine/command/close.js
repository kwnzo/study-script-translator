export default function close(line, ignore) {
  if (line[0] != "close") return [false, "600"];
  if (line.length > 1) return [false, "601"];

  if (ignore.deep_ignore.at(-1) == "all") ignore.status = true;
  else ignore.status = false;

  ignore.deep_ignore.pop();

  return true;
}
