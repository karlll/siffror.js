"use strict";

const p = require("./siffror-parser").parse;
const flatten = require("lodash.flatten");
const find = require("lodash.find");

const magnitudes = [100, 1000, 1000000, 1000000000];

const newSubtotal = (currentMagnitude, tail) => {
  // decide if a new subtotal should be started
  // based on the current (magnitude) and the subsequent magnitude (if any)
  let subSeq = find(tail, e => {
    return magnitudes.includes(e.v);
  });
  // if we find a subsequent magnitude and it is smaller than the current
  // we should start a new sub total
  return subSeq !== undefined && subSeq.v < currentMagnitude;
};

const __eval = dst => {
  if (!Array.isArray(dst)) {
    // single value
    return dst.v;
  }

  const vals = flatten(dst);
  let subTot = 0;
  let initialized = false;
  const val = [];

  for (let i = 0; i < vals.length; i++) {
    if (vals[i] === null) {
      continue;
    }

    let current = vals[i].v;

    if (!initialized) {
      val[subTot] = current;
      initialized = true;
      continue;
    }

    // is current value a magnitude?
    if (magnitudes.includes(current)) {
      val[subTot] *= current;
      if (newSubtotal(current, vals.slice(i))) {
        // new subtotal
        subTot += 1;
      }
    } else {
      val[subTot] += current;
    }
  }
  return val.reduce((acc, v) => acc + v, 0);
};

const parse = string => {
  return __eval(p(string));
};

module.exports = { parse, __eval };
