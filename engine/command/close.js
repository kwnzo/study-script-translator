export default function close(line, ignore) {
  if (line[0] != "close") return [false, "600"];
  if (line.length > 1) return [false, "601"];

  this.ignore.status = false;

  return true;
}
