"use strict";

const s = require("./scan");
const find = require("lodash.find");

const magnitudes = [100, 1000, 1000000, 1000000000, 1000000000000];

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
  let subTot = 0;
  let initialized = false;
  const val = [];

  for (let i = 0; i < dst.length; i++) {
    let current = dst[i].v;

    if (!initialized) {
      val[subTot] = current;
      initialized = true;
      continue;
    }

    // is current value a magnitude?
    if (magnitudes.includes(current)) {
      val[subTot] *= current;
      if (newSubtotal(current, dst.slice(i + 1))) {
        // new subtotal
        subTot += 1;
        initialized = false; // reinitialize
      }
    } else {
      val[subTot] += current;
    }
  }
  return val.reduce((acc, v) => acc + v, 0);
};

const parse = string => {
  const scanned = s(string);
  if (Array.isArray(scanned.res) && scanned.res.length > 0) {
    return __eval(scanned.res);
  } else {
    throw new Error(scanned.error);
  }
};

module.exports = { parse, __eval };
