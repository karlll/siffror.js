"use strict";

const emit = (res, count, v) => {
  return res.push({ p: count, v });
};

const consumeAndEmit = (s, str, v, res, count) => {
  if (s.scan(str)) {
    emit(res, count, v);
    return true;
  }
  return false;
};

class Scanner {
  constructor(str) {
    this.str = str;
    this.cur = 0;
    this.end = str.length;
  }
  terminated() {
    return this.cur >= this.end;
  }
  getCurrent() {
    return this.str[this.cur];
  }

  peek(match) {
    let sl = this.str.slice(this.cur, this.cur + match.length);
    return sl === match;
  }
  scan(match) {
    if (this.peek(match)) {
      this.cur += match.length;
      return true;
    }
    return false;
  }
}

module.exports = str => {
  const res = [];
  let count = 1;
  let error = null;
  const s = new Scanner(str);
  const c = (str, v) => {
    if (consumeAndEmit(s, str, v, res, count)) {
      count += 1;
      return true;
    }
    return false;
  };

  do {
    if (c("elva", 11)) continue;
    if (c("tolv", 12)) continue;
    if (c("tretton", 13)) continue;
    if (c("fjorton", 14)) continue;
    if (c("femton", 15)) continue;
    if (c("sexton", 16)) continue;
    if (c("sjutton", 17)) continue;
    if (c("arton", 18)) continue;
    if (c("nitton", 19)) continue;
    if (c("tjugo", 20)) continue;
    if (c("trettio", 30)) continue;
    if (c("fyrtio", 40)) continue;
    if (c("femtio", 50)) continue;
    if (c("sextio", 60)) continue;
    if (c("sjuttio", 70)) continue;
    if (c("åttio", 80)) continue;
    if (c("nittio", 90)) continue;
    if (c("hundra", 100)) continue;
    if (c("tusen", 1000)) continue;
    if (c("miljoner", 1000000)) continue;
    if (c("miljon", 1000000)) continue;
    if (c("miljarder", 1000000000)) continue;
    if (c("miljard", 1000000000)) continue;
    if (c("biljoner", 1000000000000)) continue;
    if (c("biljon", 1000000000000)) continue;
    if (c("biljarder", 1000000000000000)) continue;
    if (c("biljard", 1000000000000000)) continue;
    if (c("ett", 1)) continue;
    if (c("en", 1)) continue;
    if (c("två", 2)) continue;
    if (c("tre", 3)) continue;
    if (c("fyra", 4)) continue;
    if (c("fem", 5)) continue;
    if (c("sex", 6)) continue;
    if (c("sju", 7)) continue;
    if (c("åtta", 8)) continue;
    if (c("nio", 9)) continue;
    if (c("tio", 10)) continue;
    error = `Unexpected token '${s.getCurrent()}'`;
    break;
  } while (!s.terminated());
  if (error) {
    return { res: [], error };
  }
  return { res };
};
