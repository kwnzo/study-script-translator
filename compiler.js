import fs from "fs";

import Study_Script from "./index.js";

const compiler = new Study_Script();

let code = fs.readFileSync("loop.ss", { encoding: "utf8" });

await compiler.run(code);
