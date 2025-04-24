// system
import detect_command from "./engine/system/detect_command.js";
import strict_policy from './engine/system/strict_policy.js';
import catch_error from "./engine/system/catch_error.js";
import garbage_collector from "./engine/system/garbage_collector.js";
import no_comments from "./engine/system/no_comments.js";
import computer from './engine/system/computer.js';

// commands
import log from "./engine/command/log.js";
import new_variable from "./engine/command/new.js";
import set_variable from "./engine/command/set.js";
import delete_variable from "./engine/command/delete.js";
import start from "./engine/command/start.js";
import if_sentence from "./engine/command/if.js";
import close from "./engine/command/close.js";
import else_sentence from "./engine/command/else.js";
import finish from "./engine/command/finish.js";
import loop from "./engine/command/loop.js";
import end from "./engine/command/end.js";

export default class Study_Script {
  #storage;
  #loops;

  constructor() {
    this.setup = new computer();

    this.#storage = this.setup.storage();
    this.#loops = this.setup.loops();
    this.is_start = this.setup.is_start();
    this.ignore = this.setup.ignore();

    // system
    this.detect_command = detect_command;
    this.catch_error = catch_error;
    this.garbage_collector = garbage_collector;
    this.no_comments = no_comments;
    this.strict_policy = strict_policy;

    // commands
    this.log = log;
    this.new = new_variable;
    this.set = set_variable;
    this.delete = delete_variable;
    this.start = start;
    this.if = if_sentence;
    this.close = close;
    this.else = else_sentence;
    this.finish = finish;
    this.loop = loop;
    this.end = end;
  }

  run(code) {
    let time = new Date().valueOf();

    code = code.split("\n");
    for (let i = 0; i < code.length; i++) {
      let line = this.no_comments(code[i]);
      let correct_syntax = this.strict_policy(line);

      if (this.catch_error(correct_syntax, i + 1, line)) {
        return false;
      }

      if (
        this.ignore.ignore_until != false &&
        this.ignore.ignore_until.indexOf(line) == -1
      ) {
        continue;
      }

      line = line.split(" ");

      let status = this.detect_command(
        i,
        line,
        this,
        this.#storage,
        this.#loops,
        this.is_start,
        this.ignore
      );
      if (status === "finish") {
        this.#storage = this.setup.storage();
        this.#loops = this.setup.loops();
        this.is_start = this.setup.is_start();
        this.ignore = this.setup.ignore();
        break;
      }
      if (typeof status == "number") i = status;
      if (this.catch_error(status, i + 1, line)) {
        return false;
      }
    }

    console.log("\x1b[32m", "> program finished");
    console.log(
      "\x1b[32m",
      `\tcompilation time: ${new Date().valueOf() - time}ms.`
    );
    console.log(
      "\x1b[32m",
      `\tforgotten garbage size: ${this.garbage_collector(this.#storage)} bites`
    );

    return true;
  }
}

function translate(studyscript) {
    const js = [];
    const lines = studyscript.split('\n');

    for (const line of lines) {
        const trimmed = line.trim();

        // Пропускаем start/delete/finish
        if (['start', 'delete', 'finish'].includes(trimmed)) continue;

        // Команда new → let
        if (trimmed.startsWith('new')) {
            const varName = trimmed.split(' ')[1];
            js.push(`let ${varName};`);
        }

        // Команда set → =
        else if (trimmed.startsWith('set')) {
            const [, varName, ...value] = trimmed.split(' ');
            js.push(`${varName} = ${value.join(' ')};`);
        }

        // Команда log → console.log
        else if (trimmed.startsWith('log')) {
            const [, , ...value] = trimmed.split(' ');
            js.push(`console.log(${value.join(' ')});`);
        }

        // Если строка не распознана, оставляем как есть (пока)
        else {
            js.push(trimmed);
        }
    }

    return js.join('\n');
}

console.log(translate(code));

