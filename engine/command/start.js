export default function start(line, storage, is_start) {
  if (line[0] != "start") return [false, "400"];
  if (line.length > 1) return [false, "401"];
  if (is_start.status) return [false, "402"];

  is_start.status = true;

  return true;
}
