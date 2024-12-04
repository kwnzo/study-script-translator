export default function garbage_collector(storage) {
  let garbage = 0;

  for (let key in storage) {
    if (storage[key].type == "string") garbage += storage[key].value.length * 4;
    else if (storage[key].type == "number") {
      let number = Math.abs(storage[key].value);
      if (number > 0) garbage += 1;
      else if (number > 255) garbage += 1;
      else if (number < 65536) garbage += 1;
    }
  }

  return garbage;
}
