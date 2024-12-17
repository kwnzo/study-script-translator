export default function finish(line) {
  if (line[0] != "finish") return [false, "800"];
  if (line.length > 1) return [false, "801"];

  return "finish";
}
