"use strict";

const p = require("./siffror-parser").parse;
const flatten = require("lodash.flatten");
const find = require("lodash.find");

/*


The basic strategy would be to have a value variable that you work with. Each time you see a string "one", "two",
"eleven", "seventy" you would add that amount to value. When you see a string like "hundred", "thousand", "million",
you would multiply value by that amount.

For larger numbers you'll probably need to create a few subtotals and combine at the end.
The steps to process a number like 111,374 written out as "one hundred eleven thousand three hundred seventy four" would be

"one" -> value[0] += 1 (now 1)
"hundred" -> value[0] *= 100 (now 100)
"eleven" -> value[0] += 11 (now 111)
"thousand" -> value[0] *= 1000 (now 111000)
"three" -> value[1] += 3
"hundred" -> value[1] *= 100 (now 300)
"seventy" -> value[1] += 70 (now 370)
"four" -> value[1] += 4 now (374)

You'll still need to figure out how to decide when to build it as multiple values.
It appears you should start a new subtotal when you encounter a multiplier ("hundred") which is smaller than the most recently seen multiplier.

5   100    5   1000  5   100    5
fem hundra fem tusen fem hundra fem

505 000

[ { pos: 1, v: 5 },
      { pos: 2, v: 100 },
      [ { pos: 3, v: 90 }, { pos: 4, v: 9 } ] ]

*/
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
  const vals = flatten(dst);
  let subTot = 0;
  const val = [];

  for (let i = 0; i < vals.length; i++) {
    let current = vals[i].v;

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
};

const _eval = dst => {
  console.log(dst);
  if (!Array.isArray(dst)) {
    return dst.v;
  }
  return dst.reduce((acc, current) => {
    let c = current;
    if (Array.isArray(c)) {
      return acc + _eval(c);
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

module.exports = { parse, __eval };
