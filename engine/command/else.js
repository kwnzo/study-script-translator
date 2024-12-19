export default function else_sentence(line, ignore) {
  if (line[0] != "else") return [false, "700"];
  if (line.length > 1) return [false, "701"];

  if (["all", "else"].indexOf(ignore.deep_ignore.at(-1)) != -1) {
    ignore.status = true;
    return true;
  }

  if (ignore.status === true) ignore.status = false;
  else ignore.status = true;

  return true;
}
