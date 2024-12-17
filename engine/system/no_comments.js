export default function no_comments(line) {
  if (line.indexOf("?") != -1)
    line = line
      .slice(0, line.indexOf("?"))
      .split(" ")
      .filter((x) => {
        return x != "";
      })
      .join(" ");

  return line;
}
