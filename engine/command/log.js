export default function log(line, storage) {
  if (line[0] != "log") return [false, "000"];

  line = line.slice(1);
  let type = line[0];
  let text = line.slice(1).join(" ");

  switch (type) {
    case "string":
      text = text.split(">>");
      for (let i = 0; i < text.length; i++) {
        let non_spaced = text[i].replaceAll(" ", "");

        if (
          non_spaced[0] == '"' &&
          non_spaced.at(-1) == '"' &&
          non_spaced.replaceAll('"', "").length == non_spaced.length - 2
        ) {
          text[i] = text[i].slice(
            text[i].indexOf('"') + 1,
            text[i].lastIndexOf('"')
          );
        } else {
          if (!storage.hasOwnProperty(non_spaced)) return [false, "002"];
          text[i] = storage[non_spaced].value;
        }
      }
      text = text.join("");
      break;
    case "number":
      text = text.split(" ").join("");
      let operations = [];

      for (let i = 0; i < text.length; i++) {
        if (text[i] == "+") operations.push("+");
        else if (text[i] == "-") operations.push("-");
      }

      text = text.split("+").join("?").split("-").join("?").split("?");
      for (let i = 0; i < text.length; i++) {
        if (Number.isNaN(parseFloat(text[i]))) {
          if (!storage.hasOwnProperty(text[i])) return [false, "002"];
          if (storage[text[i]].type != "number") return [false, "003"];
          text[i] = storage[text[i]].value;
        } else if (text[i].indexOf(".") != -1) text[i] = parseFloat(text[i]);
        else text[i] = parseInt(text[i]);
      }

      let result = text[0];
      text = text.slice(1);

      for (let i = 0; i < text.length; i++) {
        if (operations[i] == "+") result += text[i];
        else if (operations[i] == "-") result -= text[i];
        else return [false, "004"];
      }

      text = result;

      break;
    default:
      return [false, "001"];
  }

  console.log(text);

  return true;
}
