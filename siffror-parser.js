/*
 * Generated by PEG.js 0.10.0.
 *
 * http://pegjs.org/
 */

"use strict";

function peg$subclass(child, parent) {
  function ctor() {
    this.constructor = child;
  }
  ctor.prototype = parent.prototype;
  child.prototype = new ctor();
}

function peg$SyntaxError(message, expected, found, location) {
  this.message = message;
  this.expected = expected;
  this.found = found;
  this.location = location;
  this.name = "SyntaxError";

  if (typeof Error.captureStackTrace === "function") {
    Error.captureStackTrace(this, peg$SyntaxError);
  }
}

peg$subclass(peg$SyntaxError, Error);

peg$SyntaxError.buildMessage = function(expected, found) {
  var DESCRIBE_EXPECTATION_FNS = {
    literal: function(expectation) {
      return '"' + literalEscape(expectation.text) + '"';
    },

    class: function(expectation) {
      var escapedParts = "",
        i;

      for (i = 0; i < expectation.parts.length; i++) {
        escapedParts +=
          expectation.parts[i] instanceof Array
            ? classEscape(expectation.parts[i][0]) +
              "-" +
              classEscape(expectation.parts[i][1])
            : classEscape(expectation.parts[i]);
      }

      return "[" + (expectation.inverted ? "^" : "") + escapedParts + "]";
    },

    any: function(expectation) {
      return "any character";
    },

    end: function(expectation) {
      return "end of input";
    },

    other: function(expectation) {
      return expectation.description;
    }
  };

  function hex(ch) {
    return ch
      .charCodeAt(0)
      .toString(16)
      .toUpperCase();
  }

  function literalEscape(s) {
    return s
      .replace(/\\/g, "\\\\")
      .replace(/"/g, '\\"')
      .replace(/\0/g, "\\0")
      .replace(/\t/g, "\\t")
      .replace(/\n/g, "\\n")
      .replace(/\r/g, "\\r")
      .replace(/[\x00-\x0F]/g, function(ch) {
        return "\\x0" + hex(ch);
      })
      .replace(/[\x10-\x1F\x7F-\x9F]/g, function(ch) {
        return "\\x" + hex(ch);
      });
  }

  function classEscape(s) {
    return s
      .replace(/\\/g, "\\\\")
      .replace(/\]/g, "\\]")
      .replace(/\^/g, "\\^")
      .replace(/-/g, "\\-")
      .replace(/\0/g, "\\0")
      .replace(/\t/g, "\\t")
      .replace(/\n/g, "\\n")
      .replace(/\r/g, "\\r")
      .replace(/[\x00-\x0F]/g, function(ch) {
        return "\\x0" + hex(ch);
      })
      .replace(/[\x10-\x1F\x7F-\x9F]/g, function(ch) {
        return "\\x" + hex(ch);
      });
  }

  function describeExpectation(expectation) {
    return DESCRIBE_EXPECTATION_FNS[expectation.type](expectation);
  }

  function describeExpected(expected) {
    var descriptions = new Array(expected.length),
      i,
      j;

    for (i = 0; i < expected.length; i++) {
      descriptions[i] = describeExpectation(expected[i]);
    }

    descriptions.sort();

    if (descriptions.length > 0) {
      for (i = 1, j = 1; i < descriptions.length; i++) {
        if (descriptions[i - 1] !== descriptions[i]) {
          descriptions[j] = descriptions[i];
          j++;
        }
      }
      descriptions.length = j;
    }

    switch (descriptions.length) {
      case 1:
        return descriptions[0];

      case 2:
        return descriptions[0] + " or " + descriptions[1];

      default:
        return (
          descriptions.slice(0, -1).join(", ") +
          ", or " +
          descriptions[descriptions.length - 1]
        );
    }
  }

  function describeFound(found) {
    return found ? '"' + literalEscape(found) + '"' : "end of input";
  }

  return (
    "Expected " +
    describeExpected(expected) +
    " but " +
    describeFound(found) +
    " found."
  );
};

function peg$parse(input, options) {
  options = options !== void 0 ? options : {};

  var peg$FAILED = {},
    peg$startRuleFunctions = { start: peg$parsestart },
    peg$startRuleFunction = peg$parsestart,
    peg$c0 = "ett",
    peg$c1 = peg$literalExpectation("ett", false),
    peg$c2 = function() {
      return insert(1);
    },
    peg$c3 = "tv\xE5",
    peg$c4 = peg$literalExpectation("tv\xE5", false),
    peg$c5 = function() {
      return insert(2);
    },
    peg$c6 = "tre",
    peg$c7 = peg$literalExpectation("tre", false),
    peg$c8 = function() {
      return insert(3);
    },
    peg$c9 = "fyra",
    peg$c10 = peg$literalExpectation("fyra", false),
    peg$c11 = function() {
      return insert(4);
    },
    peg$c12 = "fem",
    peg$c13 = peg$literalExpectation("fem", false),
    peg$c14 = function() {
      return insert(5);
    },
    peg$c15 = "sex",
    peg$c16 = peg$literalExpectation("sex", false),
    peg$c17 = function() {
      return insert(6);
    },
    peg$c18 = "sju",
    peg$c19 = peg$literalExpectation("sju", false),
    peg$c20 = function() {
      return insert(7);
    },
    peg$c21 = "\xE5tta",
    peg$c22 = peg$literalExpectation("\xE5tta", false),
    peg$c23 = function() {
      return insert(8);
    },
    peg$c24 = "nio",
    peg$c25 = peg$literalExpectation("nio", false),
    peg$c26 = function() {
      return insert(9);
    },
    peg$c27 = "tio",
    peg$c28 = peg$literalExpectation("tio", false),
    peg$c29 = function() {
      return insert(10);
    },
    peg$c30 = "elva",
    peg$c31 = peg$literalExpectation("elva", false),
    peg$c32 = function() {
      return insert(11);
    },
    peg$c33 = "tolv",
    peg$c34 = peg$literalExpectation("tolv", false),
    peg$c35 = function() {
      return insert(12);
    },
    peg$c36 = "tretton",
    peg$c37 = peg$literalExpectation("tretton", false),
    peg$c38 = function() {
      return insert(13);
    },
    peg$c39 = "fjorton",
    peg$c40 = peg$literalExpectation("fjorton", false),
    peg$c41 = function() {
      return insert(14);
    },
    peg$c42 = "femton",
    peg$c43 = peg$literalExpectation("femton", false),
    peg$c44 = function() {
      return insert(15);
    },
    peg$c45 = "sexton",
    peg$c46 = peg$literalExpectation("sexton", false),
    peg$c47 = function() {
      return insert(16);
    },
    peg$c48 = "sjutton",
    peg$c49 = peg$literalExpectation("sjutton", false),
    peg$c50 = function() {
      return insert(17);
    },
    peg$c51 = "arton",
    peg$c52 = peg$literalExpectation("arton", false),
    peg$c53 = function() {
      return insert(18);
    },
    peg$c54 = "nitton",
    peg$c55 = peg$literalExpectation("nitton", false),
    peg$c56 = function() {
      return insert(19);
    },
    peg$c57 = "tjugo",
    peg$c58 = peg$literalExpectation("tjugo", false),
    peg$c59 = function() {
      return insert(20);
    },
    peg$c60 = "trettio",
    peg$c61 = peg$literalExpectation("trettio", false),
    peg$c62 = function() {
      return insert(30);
    },
    peg$c63 = "fyrtio",
    peg$c64 = peg$literalExpectation("fyrtio", false),
    peg$c65 = function() {
      return insert(40);
    },
    peg$c66 = "femtio",
    peg$c67 = peg$literalExpectation("femtio", false),
    peg$c68 = function() {
      return insert(50);
    },
    peg$c69 = "sextio",
    peg$c70 = peg$literalExpectation("sextio", false),
    peg$c71 = function() {
      return insert(60);
    },
    peg$c72 = "sjuttio",
    peg$c73 = peg$literalExpectation("sjuttio", false),
    peg$c74 = function() {
      return insert(70);
    },
    peg$c75 = "\xE5ttio",
    peg$c76 = peg$literalExpectation("\xE5ttio", false),
    peg$c77 = function() {
      return insert(80);
    },
    peg$c78 = "nittio",
    peg$c79 = peg$literalExpectation("nittio", false),
    peg$c80 = function() {
      return insert(90);
    },
    peg$c81 = "hundra",
    peg$c82 = peg$literalExpectation("hundra", false),
    peg$c83 = function() {
      return insert(100);
    },
    peg$c84 = "tusen",
    peg$c85 = peg$literalExpectation("tusen", false),
    peg$c86 = function() {
      return insert(1000);
    },
    peg$c87 = "miljon",
    peg$c88 = peg$literalExpectation("miljon", false),
    peg$c89 = function() {
      return insert(1000000);
    },
    peg$c90 = "miljard",
    peg$c91 = peg$literalExpectation("miljard", false),
    peg$c92 = function() {
      return insert(1000000000);
    },
    peg$c93 = "biljon",
    peg$c94 = peg$literalExpectation("biljon", false),
    peg$c95 = function() {
      return insert(1000000000000);
    },
    peg$c96 = "biljard",
    peg$c97 = peg$literalExpectation("biljard", false),
    peg$c98 = function() {
      return insert(1000000000000000);
    },
    peg$currPos = 0,
    peg$savedPos = 0,
    peg$posDetailsCache = [{ line: 1, column: 1 }],
    peg$maxFailPos = 0,
    peg$maxFailExpected = [],
    peg$silentFails = 0,
    peg$result;

  if ("startRule" in options) {
    if (!(options.startRule in peg$startRuleFunctions)) {
      throw new Error(
        "Can't start parsing from rule \"" + options.startRule + '".'
      );
    }

    peg$startRuleFunction = peg$startRuleFunctions[options.startRule];
  }

  function text() {
    return input.substring(peg$savedPos, peg$currPos);
  }

  function location() {
    return peg$computeLocation(peg$savedPos, peg$currPos);
  }

  function expected(description, location) {
    location =
      location !== void 0
        ? location
        : peg$computeLocation(peg$savedPos, peg$currPos);

    throw peg$buildStructuredError(
      [peg$otherExpectation(description)],
      input.substring(peg$savedPos, peg$currPos),
      location
    );
  }

  function error(message, location) {
    location =
      location !== void 0
        ? location
        : peg$computeLocation(peg$savedPos, peg$currPos);

    throw peg$buildSimpleError(message, location);
  }

  function peg$literalExpectation(text, ignoreCase) {
    return { type: "literal", text: text, ignoreCase: ignoreCase };
  }

  function peg$classExpectation(parts, inverted, ignoreCase) {
    return {
      type: "class",
      parts: parts,
      inverted: inverted,
      ignoreCase: ignoreCase
    };
  }

  function peg$anyExpectation() {
    return { type: "any" };
  }

  function peg$endExpectation() {
    return { type: "end" };
  }

  function peg$otherExpectation(description) {
    return { type: "other", description: description };
  }

  function peg$computePosDetails(pos) {
    var details = peg$posDetailsCache[pos],
      p;

    if (details) {
      return details;
    } else {
      p = pos - 1;
      while (!peg$posDetailsCache[p]) {
        p--;
      }

      details = peg$posDetailsCache[p];
      details = {
        line: details.line,
        column: details.column
      };

      while (p < pos) {
        if (input.charCodeAt(p) === 10) {
          details.line++;
          details.column = 1;
        } else {
          details.column++;
        }

        p++;
      }

      peg$posDetailsCache[pos] = details;
      return details;
    }
  }

  function peg$computeLocation(startPos, endPos) {
    var startPosDetails = peg$computePosDetails(startPos),
      endPosDetails = peg$computePosDetails(endPos);

    return {
      start: {
        offset: startPos,
        line: startPosDetails.line,
        column: startPosDetails.column
      },
      end: {
        offset: endPos,
        line: endPosDetails.line,
        column: endPosDetails.column
      }
    };
  }

  function peg$fail(expected) {
    if (peg$currPos < peg$maxFailPos) {
      return;
    }

    if (peg$currPos > peg$maxFailPos) {
      peg$maxFailPos = peg$currPos;
      peg$maxFailExpected = [];
    }

    peg$maxFailExpected.push(expected);
  }

  function peg$buildSimpleError(message, location) {
    return new peg$SyntaxError(message, null, null, location);
  }

  function peg$buildStructuredError(expected, found, location) {
    return new peg$SyntaxError(
      peg$SyntaxError.buildMessage(expected, found),
      expected,
      found,
      location
    );
  }

  function peg$parsestart() {
    var s0;

    s0 = peg$parsenumber();

    return s0;
  }

  function peg$parsenumber() {
    var s0;

    s0 = peg$parsehundredToBilliard();
    if (s0 === peg$FAILED) {
      s0 = peg$parsetwentyToNinetynine();
      if (s0 === peg$FAILED) {
        s0 = peg$parsetens();
        if (s0 === peg$FAILED) {
          s0 = peg$parsesingles();
        }
      }
    }

    return s0;
  }

  function peg$parsesingles() {
    var s0;

    s0 = peg$parseone();
    if (s0 === peg$FAILED) {
      s0 = peg$parsetwo();
      if (s0 === peg$FAILED) {
        s0 = peg$parsethree();
        if (s0 === peg$FAILED) {
          s0 = peg$parsefour();
          if (s0 === peg$FAILED) {
            s0 = peg$parsefive();
            if (s0 === peg$FAILED) {
              s0 = peg$parsesix();
              if (s0 === peg$FAILED) {
                s0 = peg$parseseven();
                if (s0 === peg$FAILED) {
                  s0 = peg$parseeight();
                  if (s0 === peg$FAILED) {
                    s0 = peg$parsenine();
                  }
                }
              }
            }
          }
        }
      }
    }

    return s0;
  }

  function peg$parsetens() {
    var s0;

    s0 = peg$parseten();
    if (s0 === peg$FAILED) {
      s0 = peg$parseeleven();
      if (s0 === peg$FAILED) {
        s0 = peg$parsetwelve();
        if (s0 === peg$FAILED) {
          s0 = peg$parsethirteen();
          if (s0 === peg$FAILED) {
            s0 = peg$parsefourteen();
            if (s0 === peg$FAILED) {
              s0 = peg$parsefifteen();
              if (s0 === peg$FAILED) {
                s0 = peg$parsesixteen();
                if (s0 === peg$FAILED) {
                  s0 = peg$parseseventeen();
                  if (s0 === peg$FAILED) {
                    s0 = peg$parseeighteen();
                    if (s0 === peg$FAILED) {
                      s0 = peg$parsenineteen();
                    }
                  }
                }
              }
            }
          }
        }
      }
    }

    return s0;
  }

  function peg$parsetwentyToNinetynine() {
    var s0, s1, s2;

    s0 = peg$currPos;
    s1 = peg$parsetwenty();
    if (s1 !== peg$FAILED) {
      s2 = peg$parsesingles();
      if (s2 === peg$FAILED) {
        s2 = null;
      }
      if (s2 !== peg$FAILED) {
        s1 = [s1, s2];
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      s1 = peg$parsethirty();
      if (s1 !== peg$FAILED) {
        s2 = peg$parsesingles();
        if (s2 === peg$FAILED) {
          s2 = null;
        }
        if (s2 !== peg$FAILED) {
          s1 = [s1, s2];
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        s1 = peg$parseforty();
        if (s1 !== peg$FAILED) {
          s2 = peg$parsesingles();
          if (s2 === peg$FAILED) {
            s2 = null;
          }
          if (s2 !== peg$FAILED) {
            s1 = [s1, s2];
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
        if (s0 === peg$FAILED) {
          s0 = peg$currPos;
          s1 = peg$parsefifty();
          if (s1 !== peg$FAILED) {
            s2 = peg$parsesingles();
            if (s2 === peg$FAILED) {
              s2 = null;
            }
            if (s2 !== peg$FAILED) {
              s1 = [s1, s2];
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
          if (s0 === peg$FAILED) {
            s0 = peg$currPos;
            s1 = peg$parsesixty();
            if (s1 !== peg$FAILED) {
              s2 = peg$parsesingles();
              if (s2 === peg$FAILED) {
                s2 = null;
              }
              if (s2 !== peg$FAILED) {
                s1 = [s1, s2];
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
            if (s0 === peg$FAILED) {
              s0 = peg$currPos;
              s1 = peg$parseseventy();
              if (s1 !== peg$FAILED) {
                s2 = peg$parsesingles();
                if (s2 === peg$FAILED) {
                  s2 = null;
                }
                if (s2 !== peg$FAILED) {
                  s1 = [s1, s2];
                  s0 = s1;
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
              if (s0 === peg$FAILED) {
                s0 = peg$currPos;
                s1 = peg$parseeighty();
                if (s1 !== peg$FAILED) {
                  s2 = peg$parsesingles();
                  if (s2 === peg$FAILED) {
                    s2 = null;
                  }
                  if (s2 !== peg$FAILED) {
                    s1 = [s1, s2];
                    s0 = s1;
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
                if (s0 === peg$FAILED) {
                  s0 = peg$currPos;
                  s1 = peg$parseninety();
                  if (s1 !== peg$FAILED) {
                    s2 = peg$parsesingles();
                    if (s2 === peg$FAILED) {
                      s2 = null;
                    }
                    if (s2 !== peg$FAILED) {
                      s1 = [s1, s2];
                      s0 = s1;
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                }
              }
            }
          }
        }
      }
    }

    return s0;
  }

  function peg$parseoneToNinetynine() {
    var s0;

    s0 = peg$parsetwentyToNinetynine();
    if (s0 === peg$FAILED) {
      s0 = peg$parsetens();
      if (s0 === peg$FAILED) {
        s0 = peg$parsesingles();
      }
    }

    return s0;
  }

  function peg$parsehundredToBilliard() {
    var s0, s1, s2, s3;

    s0 = peg$currPos;
    s1 = peg$parsesingles();
    if (s1 === peg$FAILED) {
      s1 = null;
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$parsehundred();
      if (s2 !== peg$FAILED) {
        s3 = peg$parseoneToNinetynine();
        if (s3 === peg$FAILED) {
          s3 = null;
        }
        if (s3 !== peg$FAILED) {
          s1 = [s1, s2, s3];
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    if (s0 === peg$FAILED) {
      s0 = peg$parsethousand();
      if (s0 === peg$FAILED) {
        s0 = peg$parsemillion();
        if (s0 === peg$FAILED) {
          s0 = peg$parsemilliard();
          if (s0 === peg$FAILED) {
            s0 = peg$parsebillion();
            if (s0 === peg$FAILED) {
              s0 = peg$parsebilliard();
            }
          }
        }
      }
    }

    return s0;
  }

  function peg$parseone() {
    var s0, s1;

    s0 = peg$currPos;
    if (input.substr(peg$currPos, 3) === peg$c0) {
      s1 = peg$c0;
      peg$currPos += 3;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$c1);
      }
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c2();
    }
    s0 = s1;

    return s0;
  }

  function peg$parsetwo() {
    var s0, s1;

    s0 = peg$currPos;
    if (input.substr(peg$currPos, 3) === peg$c3) {
      s1 = peg$c3;
      peg$currPos += 3;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$c4);
      }
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c5();
    }
    s0 = s1;

    return s0;
  }

  function peg$parsethree() {
    var s0, s1;

    s0 = peg$currPos;
    if (input.substr(peg$currPos, 3) === peg$c6) {
      s1 = peg$c6;
      peg$currPos += 3;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$c7);
      }
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c8();
    }
    s0 = s1;

    return s0;
  }

  function peg$parsefour() {
    var s0, s1;

    s0 = peg$currPos;
    if (input.substr(peg$currPos, 4) === peg$c9) {
      s1 = peg$c9;
      peg$currPos += 4;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$c10);
      }
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c11();
    }
    s0 = s1;

    return s0;
  }

  function peg$parsefive() {
    var s0, s1;

    s0 = peg$currPos;
    if (input.substr(peg$currPos, 3) === peg$c12) {
      s1 = peg$c12;
      peg$currPos += 3;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$c13);
      }
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c14();
    }
    s0 = s1;

    return s0;
  }

  function peg$parsesix() {
    var s0, s1;

    s0 = peg$currPos;
    if (input.substr(peg$currPos, 3) === peg$c15) {
      s1 = peg$c15;
      peg$currPos += 3;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$c16);
      }
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c17();
    }
    s0 = s1;

    return s0;
  }

  function peg$parseseven() {
    var s0, s1;

    s0 = peg$currPos;
    if (input.substr(peg$currPos, 3) === peg$c18) {
      s1 = peg$c18;
      peg$currPos += 3;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$c19);
      }
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c20();
    }
    s0 = s1;

    return s0;
  }

  function peg$parseeight() {
    var s0, s1;

    s0 = peg$currPos;
    if (input.substr(peg$currPos, 4) === peg$c21) {
      s1 = peg$c21;
      peg$currPos += 4;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$c22);
      }
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c23();
    }
    s0 = s1;

    return s0;
  }

  function peg$parsenine() {
    var s0, s1;

    s0 = peg$currPos;
    if (input.substr(peg$currPos, 3) === peg$c24) {
      s1 = peg$c24;
      peg$currPos += 3;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$c25);
      }
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c26();
    }
    s0 = s1;

    return s0;
  }

  function peg$parseten() {
    var s0, s1;

    s0 = peg$currPos;
    if (input.substr(peg$currPos, 3) === peg$c27) {
      s1 = peg$c27;
      peg$currPos += 3;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$c28);
      }
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c29();
    }
    s0 = s1;

    return s0;
  }

  function peg$parseeleven() {
    var s0, s1;

    s0 = peg$currPos;
    if (input.substr(peg$currPos, 4) === peg$c30) {
      s1 = peg$c30;
      peg$currPos += 4;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$c31);
      }
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c32();
    }
    s0 = s1;

    return s0;
  }

  function peg$parsetwelve() {
    var s0, s1;

    s0 = peg$currPos;
    if (input.substr(peg$currPos, 4) === peg$c33) {
      s1 = peg$c33;
      peg$currPos += 4;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$c34);
      }
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c35();
    }
    s0 = s1;

    return s0;
  }

  function peg$parsethirteen() {
    var s0, s1;

    s0 = peg$currPos;
    if (input.substr(peg$currPos, 7) === peg$c36) {
      s1 = peg$c36;
      peg$currPos += 7;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$c37);
      }
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c38();
    }
    s0 = s1;

    return s0;
  }

  function peg$parsefourteen() {
    var s0, s1;

    s0 = peg$currPos;
    if (input.substr(peg$currPos, 7) === peg$c39) {
      s1 = peg$c39;
      peg$currPos += 7;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$c40);
      }
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c41();
    }
    s0 = s1;

    return s0;
  }

  function peg$parsefifteen() {
    var s0, s1;

    s0 = peg$currPos;
    if (input.substr(peg$currPos, 6) === peg$c42) {
      s1 = peg$c42;
      peg$currPos += 6;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$c43);
      }
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c44();
    }
    s0 = s1;

    return s0;
  }

  function peg$parsesixteen() {
    var s0, s1;

    s0 = peg$currPos;
    if (input.substr(peg$currPos, 6) === peg$c45) {
      s1 = peg$c45;
      peg$currPos += 6;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$c46);
      }
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c47();
    }
    s0 = s1;

    return s0;
  }

  function peg$parseseventeen() {
    var s0, s1;

    s0 = peg$currPos;
    if (input.substr(peg$currPos, 7) === peg$c48) {
      s1 = peg$c48;
      peg$currPos += 7;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$c49);
      }
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c50();
    }
    s0 = s1;

    return s0;
  }

  function peg$parseeighteen() {
    var s0, s1;

    s0 = peg$currPos;
    if (input.substr(peg$currPos, 5) === peg$c51) {
      s1 = peg$c51;
      peg$currPos += 5;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$c52);
      }
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c53();
    }
    s0 = s1;

    return s0;
  }

  function peg$parsenineteen() {
    var s0, s1;

    s0 = peg$currPos;
    if (input.substr(peg$currPos, 6) === peg$c54) {
      s1 = peg$c54;
      peg$currPos += 6;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$c55);
      }
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c56();
    }
    s0 = s1;

    return s0;
  }

  function peg$parsetwenty() {
    var s0, s1;

    s0 = peg$currPos;
    if (input.substr(peg$currPos, 5) === peg$c57) {
      s1 = peg$c57;
      peg$currPos += 5;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$c58);
      }
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c59();
    }
    s0 = s1;

    return s0;
  }

  function peg$parsethirty() {
    var s0, s1;

    s0 = peg$currPos;
    if (input.substr(peg$currPos, 7) === peg$c60) {
      s1 = peg$c60;
      peg$currPos += 7;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$c61);
      }
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c62();
    }
    s0 = s1;

    return s0;
  }

  function peg$parseforty() {
    var s0, s1;

    s0 = peg$currPos;
    if (input.substr(peg$currPos, 6) === peg$c63) {
      s1 = peg$c63;
      peg$currPos += 6;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$c64);
      }
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c65();
    }
    s0 = s1;

    return s0;
  }

  function peg$parsefifty() {
    var s0, s1;

    s0 = peg$currPos;
    if (input.substr(peg$currPos, 6) === peg$c66) {
      s1 = peg$c66;
      peg$currPos += 6;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$c67);
      }
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c68();
    }
    s0 = s1;

    return s0;
  }

  function peg$parsesixty() {
    var s0, s1;

    s0 = peg$currPos;
    if (input.substr(peg$currPos, 6) === peg$c69) {
      s1 = peg$c69;
      peg$currPos += 6;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$c70);
      }
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c71();
    }
    s0 = s1;

    return s0;
  }

  function peg$parseseventy() {
    var s0, s1;

    s0 = peg$currPos;
    if (input.substr(peg$currPos, 7) === peg$c72) {
      s1 = peg$c72;
      peg$currPos += 7;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$c73);
      }
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c74();
    }
    s0 = s1;

    return s0;
  }

  function peg$parseeighty() {
    var s0, s1;

    s0 = peg$currPos;
    if (input.substr(peg$currPos, 5) === peg$c75) {
      s1 = peg$c75;
      peg$currPos += 5;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$c76);
      }
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c77();
    }
    s0 = s1;

    return s0;
  }

  function peg$parseninety() {
    var s0, s1;

    s0 = peg$currPos;
    if (input.substr(peg$currPos, 6) === peg$c78) {
      s1 = peg$c78;
      peg$currPos += 6;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$c79);
      }
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c80();
    }
    s0 = s1;

    return s0;
  }

  function peg$parsehundred() {
    var s0, s1;

    s0 = peg$currPos;
    if (input.substr(peg$currPos, 6) === peg$c81) {
      s1 = peg$c81;
      peg$currPos += 6;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$c82);
      }
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c83();
    }
    s0 = s1;

    return s0;
  }

  function peg$parsethousand() {
    var s0, s1;

    s0 = peg$currPos;
    if (input.substr(peg$currPos, 5) === peg$c84) {
      s1 = peg$c84;
      peg$currPos += 5;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$c85);
      }
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c86();
    }
    s0 = s1;

    return s0;
  }

  function peg$parsemillion() {
    var s0, s1;

    s0 = peg$currPos;
    if (input.substr(peg$currPos, 6) === peg$c87) {
      s1 = peg$c87;
      peg$currPos += 6;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$c88);
      }
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c89();
    }
    s0 = s1;

    return s0;
  }

  function peg$parsemilliard() {
    var s0, s1;

    s0 = peg$currPos;
    if (input.substr(peg$currPos, 7) === peg$c90) {
      s1 = peg$c90;
      peg$currPos += 7;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$c91);
      }
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c92();
    }
    s0 = s1;

    return s0;
  }

  function peg$parsebillion() {
    var s0, s1;

    s0 = peg$currPos;
    if (input.substr(peg$currPos, 6) === peg$c93) {
      s1 = peg$c93;
      peg$currPos += 6;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$c94);
      }
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c95();
    }
    s0 = s1;

    return s0;
  }

  function peg$parsebilliard() {
    var s0, s1;

    s0 = peg$currPos;
    if (input.substr(peg$currPos, 7) === peg$c96) {
      s1 = peg$c96;
      peg$currPos += 7;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$c97);
      }
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c98();
    }
    s0 = s1;

    return s0;
  }

  let pos = 0;
  const insert = v => {
    pos = pos + 1;
    return { pos, v };
  };

  peg$result = peg$startRuleFunction();

  if (peg$result !== peg$FAILED && peg$currPos === input.length) {
    return peg$result;
  } else {
    if (peg$result !== peg$FAILED && peg$currPos < input.length) {
      peg$fail(peg$endExpectation());
    }

    throw peg$buildStructuredError(
      peg$maxFailExpected,
      peg$maxFailPos < input.length ? input.charAt(peg$maxFailPos) : null,
      peg$maxFailPos < input.length
        ? peg$computeLocation(peg$maxFailPos, peg$maxFailPos + 1)
        : peg$computeLocation(peg$maxFailPos, peg$maxFailPos)
    );
  }
}

module.exports = {
  SyntaxError: peg$SyntaxError,
  parse: peg$parse
};
