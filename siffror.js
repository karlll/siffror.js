"use strict";

const p = require("./siffror-parser").parse;

const _eval = dst => {
  console.log(dst);
  return dst.reduce((acc, current) => {
    let c = current;
    if (Array.isArray(c)) {
      c = c[0];
    }
    console.log(current, acc);
    if (c === null && acc !== null) {
      return acc;
    } else if (c === null && acc === null) {
      return 0;
    }
    return acc + c.v;
  }, 0);
};

const parse = string => {
  return _eval(p(string));
};

module.exports = parse;
