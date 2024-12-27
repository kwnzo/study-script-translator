export default function garbage_collector(storage) {
  let garbage = 0;
  let constants = ['TIME'];

  for (let key in storage) {
    if (constants.indexOf(key) != -1) continue;

    if (storage[key].type == "string")
      garbage +=
        storage[key].value.length *
        4; // possible calculate the real number of bytes, not just * 4, there are many symbols for 1/2/3 bytes
    else if (storage[key].type == "number") {
      let number = Math.abs(storage[key].value);

      if (number >= 0) garbage += 1;
      if (number >= 256) garbage += 1;
      else if (number >= 65536) garbage += 1;

      if (storage[key].value < 0) garbage += 1;
    }
  }

  return garbage;
}
