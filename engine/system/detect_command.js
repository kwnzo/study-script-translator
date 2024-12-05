export default function detect_command(line, engine, storage) {
  switch (line[0]) {
    case "":
      return true;
    case "log":
      return engine.log(line, storage);
    case "new":
      return engine.new(line, storage);
    case "set":
      return engine.set(line, storage);
    case "delete":
      return engine.delete(line, storage);
    default:
      return false;
  }
}
