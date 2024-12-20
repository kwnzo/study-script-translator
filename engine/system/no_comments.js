export default function no_comments(line) {
  if (line.indexOf("?") != -1)
    line = line.slice(0, line.indexOf("?")).join(" ");

  line = line
    .split(" ")
    .filter((x) => x != "")
    .join(" ");

  return line;
}
