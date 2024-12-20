export default function detect_command(
  line_index,
  line,
  engine,
  storage,
  loops,
  is_start,
  ignore
) {
  if (line.length > 1) {
    while (line[0] == "") {
      line = line.slice(1);
    }
  }

  if (ignore.status && ["close", "else", "if"].indexOf(line[0]) == -1)
    return true;

  switch (line[0]) {
    case "":
      return true;
    case undefined:
      return true;
    case "log":
      return engine.log(line, storage, is_start);
    case "new":
      return engine.new(line, storage, is_start);
    case "set":
      return engine.set(line, storage, is_start);
    case "delete":
      return engine.delete(line, storage, is_start);
    case "start":
      return engine.start(line, storage, is_start);
    case "if":
      return engine.if(line, storage, is_start, ignore);
    case "close":
      return engine.close(line, ignore);
    case "else":
      return engine.else(line, ignore);
    case "finish":
      return engine.finish(line);
    case "loop":
      return engine.loop(line_index, line, loops, storage, ignore, is_start);
    case "end":
      return engine.end(line, loops, storage, ignore, is_start);
    default:
      return [false, "0"];
  }
}
