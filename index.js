'use strict';

class LogEntry {

  #text = '';

  black(text) {
    this.#text += `\u001b[30m${text}\u001b[0m`;
    return this;
  }

  red(text) {
    this.#text += `\u001b[31m${text}\u001b[0m`;
    return this;
  }

  green(text) {
    this.#text += `\u001b[32m${text}\u001b[0m`;
    return this;
  }

  yellow(text) {
    this.#text += `\u001b[33m${text}\u001b[0m`;
    return this;
  }

  blue(text) {
    this.#text += `\u001b[34m${text}\u001b[0m`;
    return this;
  }

  magenta(text) {
    this.#text += `\u001b[35m${text}\u001b[0m`;
    return this;
  }

  cyan(text) {
    this.#text += `\u001b[36m${text}\u001b[0m`;
    return this;
  }

  white(text) {
    this.#text += `\u001b[37m${text}\u001b[0m`;
    return this;
  }

  log() {
    console.log(this.#text);
  }

  info() {
    console.info(this.#text);
  }

  error() {
    console.error(this.#text);
  }
}

module.exports = class Log {

  static black(text) {
    return new LogEntry().black(text);
  }

  static red(text) {
    return new LogEntry().black(text);
  }

  static green(text) {
    return new LogEntry().black(text);
  }

  static yellow(text) {
    return new LogEntry().black(text);
  }

  static blue(text) {
    return new LogEntry().black(text);
  }

  static magenta(text) {
    return new LogEntry().black(text);
  }

  static cyan(text) {
    return new LogEntry().black(text);
  }

  static white(text) {
    return new LogEntry().black(text);
  }
}
