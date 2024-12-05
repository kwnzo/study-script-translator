export default function detect_command(line, engine, storage, is_start) {
  switch (line[0]) {
    case "":
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
    default:
      return [false, "0"];
  }
}
