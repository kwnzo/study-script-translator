export default function detect_command(
  line,
  engine,
  storage,
  is_start,
  ignore
) {
  if (line.length > 1) {
    while (line[0] == "") {
      line = line.slice(1);
    }
  }

  if (ignore.status && ["close", "else"].indexOf(line[0]) == -1) return true;

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
    default:
      return [false, "0"];
  }
}
