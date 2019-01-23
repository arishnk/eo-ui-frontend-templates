/*!
  * Bootstrap util.js v4.2.1 (https://getbootstrap.com/)
  * Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('jquery')) :
  typeof define === 'function' && define.amd ? define(['jquery'], factory) :
  (global.Util = factory(global.jQuery));
}(this, (function ($) { 'use strict';

  $ = $ && $.hasOwnProperty('default') ? $['default'] : $;

  var cov_c7ihpjow2 = function () {
    var path = "/Users/jkoulish/Sites/eo-ui-frontend-templates/js/src/util.js",
        hash = "aa755acc2f964c384597bc2a58afbae405baf898",
        Function = function () {}.constructor,
        global = new Function('return this')(),
        gcv = "__coverage__",
        coverageData = {
      path: "/Users/jkoulish/Sites/eo-ui-frontend-templates/js/src/util.js",
      statementMap: {
        "0": {
          start: {
            line: 16,
            column: 23
          },
          end: {
            line: 16,
            column: 38
          }
        },
        "1": {
          start: {
            line: 17,
            column: 16
          },
          end: {
            line: 17,
            column: 23
          }
        },
        "2": {
          start: {
            line: 18,
            column: 32
          },
          end: {
            line: 18,
            column: 36
          }
        },
        "3": {
          start: {
            line: 22,
            column: 2
          },
          end: {
            line: 22,
            column: 68
          }
        },
        "4": {
          start: {
            line: 26,
            column: 2
          },
          end: {
            line: 35,
            column: 3
          }
        },
        "5": {
          start: {
            line: 30,
            column: 6
          },
          end: {
            line: 32,
            column: 7
          }
        },
        "6": {
          start: {
            line: 31,
            column: 8
          },
          end: {
            line: 31,
            column: 61
          }
        },
        "7": {
          start: {
            line: 33,
            column: 6
          },
          end: {
            line: 33,
            column: 22
          }
        },
        "8": {
          start: {
            line: 39,
            column: 15
          },
          end: {
            line: 39,
            column: 20
          }
        },
        "9": {
          start: {
            line: 41,
            column: 2
          },
          end: {
            line: 43,
            column: 4
          }
        },
        "10": {
          start: {
            line: 42,
            column: 4
          },
          end: {
            line: 42,
            column: 17
          }
        },
        "11": {
          start: {
            line: 45,
            column: 2
          },
          end: {
            line: 49,
            column: 14
          }
        },
        "12": {
          start: {
            line: 46,
            column: 4
          },
          end: {
            line: 48,
            column: 5
          }
        },
        "13": {
          start: {
            line: 47,
            column: 6
          },
          end: {
            line: 47,
            column: 37
          }
        },
        "14": {
          start: {
            line: 51,
            column: 2
          },
          end: {
            line: 51,
            column: 13
          }
        },
        "15": {
          start: {
            line: 55,
            column: 2
          },
          end: {
            line: 55,
            column: 51
          }
        },
        "16": {
          start: {
            line: 56,
            column: 2
          },
          end: {
            line: 56,
            column: 71
          }
        },
        "17": {
          start: {
            line: 65,
            column: 13
          },
          end: {
            line: 169,
            column: 1
          }
        },
        "18": {
          start: {
            line: 70,
            column: 4
          },
          end: {
            line: 73,
            column: 45
          }
        },
        "19": {
          start: {
            line: 72,
            column: 6
          },
          end: {
            line: 72,
            column: 43
          }
        },
        "20": {
          start: {
            line: 74,
            column: 4
          },
          end: {
            line: 74,
            column: 17
          }
        },
        "21": {
          start: {
            line: 78,
            column: 19
          },
          end: {
            line: 78,
            column: 54
          }
        },
        "22": {
          start: {
            line: 80,
            column: 4
          },
          end: {
            line: 83,
            column: 5
          }
        },
        "23": {
          start: {
            line: 81,
            column: 23
          },
          end: {
            line: 81,
            column: 51
          }
        },
        "24": {
          start: {
            line: 82,
            column: 6
          },
          end: {
            line: 82,
            column: 68
          }
        },
        "25": {
          start: {
            line: 85,
            column: 4
          },
          end: {
            line: 85,
            column: 73
          }
        },
        "26": {
          start: {
            line: 89,
            column: 4
          },
          end: {
            line: 91,
            column: 5
          }
        },
        "27": {
          start: {
            line: 90,
            column: 6
          },
          end: {
            line: 90,
            column: 14
          }
        },
        "28": {
          start: {
            line: 94,
            column: 29
          },
          end: {
            line: 94,
            column: 66
          }
        },
        "29": {
          start: {
            line: 95,
            column: 26
          },
          end: {
            line: 95,
            column: 60
          }
        },
        "30": {
          start: {
            line: 97,
            column: 36
          },
          end: {
            line: 97,
            column: 66
          }
        },
        "31": {
          start: {
            line: 98,
            column: 33
          },
          end: {
            line: 98,
            column: 60
          }
        },
        "32": {
          start: {
            line: 101,
            column: 4
          },
          end: {
            line: 103,
            column: 5
          }
        },
        "33": {
          start: {
            line: 102,
            column: 6
          },
          end: {
            line: 102,
            column: 14
          }
        },
        "34": {
          start: {
            line: 106,
            column: 4
          },
          end: {
            line: 106,
            column: 57
          }
        },
        "35": {
          start: {
            line: 107,
            column: 4
          },
          end: {
            line: 107,
            column: 51
          }
        },
        "36": {
          start: {
            line: 109,
            column: 4
          },
          end: {
            line: 109,
            column: 99
          }
        },
        "37": {
          start: {
            line: 113,
            column: 4
          },
          end: {
            line: 113,
            column: 31
          }
        },
        "38": {
          start: {
            line: 117,
            column: 4
          },
          end: {
            line: 117,
            column: 38
          }
        },
        "39": {
          start: {
            line: 122,
            column: 4
          },
          end: {
            line: 122,
            column: 34
          }
        },
        "40": {
          start: {
            line: 126,
            column: 4
          },
          end: {
            line: 126,
            column: 35
          }
        },
        "41": {
          start: {
            line: 130,
            column: 4
          },
          end: {
            line: 144,
            column: 5
          }
        },
        "42": {
          start: {
            line: 131,
            column: 6
          },
          end: {
            line: 143,
            column: 7
          }
        },
        "43": {
          start: {
            line: 132,
            column: 30
          },
          end: {
            line: 132,
            column: 51
          }
        },
        "44": {
          start: {
            line: 133,
            column: 30
          },
          end: {
            line: 133,
            column: 46
          }
        },
        "45": {
          start: {
            line: 134,
            column: 30
          },
          end: {
            line: 135,
            column: 37
          }
        },
        "46": {
          start: {
            line: 137,
            column: 8
          },
          end: {
            line: 142,
            column: 9
          }
        },
        "47": {
          start: {
            line: 138,
            column: 10
          },
          end: {
            line: 141,
            column: 52
          }
        },
        "48": {
          start: {
            line: 148,
            column: 4
          },
          end: {
            line: 150,
            column: 5
          }
        },
        "49": {
          start: {
            line: 149,
            column: 6
          },
          end: {
            line: 149,
            column: 17
          }
        },
        "50": {
          start: {
            line: 153,
            column: 4
          },
          end: {
            line: 156,
            column: 5
          }
        },
        "51": {
          start: {
            line: 154,
            column: 19
          },
          end: {
            line: 154,
            column: 40
          }
        },
        "52": {
          start: {
            line: 155,
            column: 6
          },
          end: {
            line: 155,
            column: 53
          }
        },
        "53": {
          start: {
            line: 158,
            column: 4
          },
          end: {
            line: 160,
            column: 5
          }
        },
        "54": {
          start: {
            line: 159,
            column: 6
          },
          end: {
            line: 159,
            column: 20
          }
        },
        "55": {
          start: {
            line: 163,
            column: 4
          },
          end: {
            line: 165,
            column: 5
          }
        },
        "56": {
          start: {
            line: 164,
            column: 6
          },
          end: {
            line: 164,
            column: 17
          }
        },
        "57": {
          start: {
            line: 167,
            column: 4
          },
          end: {
            line: 167,
            column: 50
          }
        },
        "58": {
          start: {
            line: 171,
            column: 0
          },
          end: {
            line: 171,
            column: 25
          }
        }
      },
      fnMap: {
        "0": {
          name: "toType",
          decl: {
            start: {
              line: 21,
              column: 9
            },
            end: {
              line: 21,
              column: 15
            }
          },
          loc: {
            start: {
              line: 21,
              column: 21
            },
            end: {
              line: 23,
              column: 1
            }
          },
          line: 21
        },
        "1": {
          name: "getSpecialTransitionEndEvent",
          decl: {
            start: {
              line: 25,
              column: 9
            },
            end: {
              line: 25,
              column: 37
            }
          },
          loc: {
            start: {
              line: 25,
              column: 40
            },
            end: {
              line: 36,
              column: 1
            }
          },
          line: 25
        },
        "2": {
          name: "(anonymous_2)",
          decl: {
            start: {
              line: 29,
              column: 4
            },
            end: {
              line: 29,
              column: 5
            }
          },
          loc: {
            start: {
              line: 29,
              column: 18
            },
            end: {
              line: 34,
              column: 5
            }
          },
          line: 29
        },
        "3": {
          name: "transitionEndEmulator",
          decl: {
            start: {
              line: 38,
              column: 9
            },
            end: {
              line: 38,
              column: 30
            }
          },
          loc: {
            start: {
              line: 38,
              column: 41
            },
            end: {
              line: 52,
              column: 1
            }
          },
          line: 38
        },
        "4": {
          name: "(anonymous_4)",
          decl: {
            start: {
              line: 41,
              column: 35
            },
            end: {
              line: 41,
              column: 36
            }
          },
          loc: {
            start: {
              line: 41,
              column: 41
            },
            end: {
              line: 43,
              column: 3
            }
          },
          line: 41
        },
        "5": {
          name: "(anonymous_5)",
          decl: {
            start: {
              line: 45,
              column: 13
            },
            end: {
              line: 45,
              column: 14
            }
          },
          loc: {
            start: {
              line: 45,
              column: 19
            },
            end: {
              line: 49,
              column: 3
            }
          },
          line: 45
        },
        "6": {
          name: "setTransitionEndSupport",
          decl: {
            start: {
              line: 54,
              column: 9
            },
            end: {
              line: 54,
              column: 32
            }
          },
          loc: {
            start: {
              line: 54,
              column: 35
            },
            end: {
              line: 57,
              column: 1
            }
          },
          line: 54
        },
        "7": {
          name: "(anonymous_7)",
          decl: {
            start: {
              line: 69,
              column: 2
            },
            end: {
              line: 69,
              column: 3
            }
          },
          loc: {
            start: {
              line: 69,
              column: 17
            },
            end: {
              line: 75,
              column: 3
            }
          },
          line: 69
        },
        "8": {
          name: "(anonymous_8)",
          decl: {
            start: {
              line: 77,
              column: 2
            },
            end: {
              line: 77,
              column: 3
            }
          },
          loc: {
            start: {
              line: 77,
              column: 34
            },
            end: {
              line: 86,
              column: 3
            }
          },
          line: 77
        },
        "9": {
          name: "(anonymous_9)",
          decl: {
            start: {
              line: 88,
              column: 2
            },
            end: {
              line: 88,
              column: 3
            }
          },
          loc: {
            start: {
              line: 88,
              column: 44
            },
            end: {
              line: 110,
              column: 3
            }
          },
          line: 88
        },
        "10": {
          name: "(anonymous_10)",
          decl: {
            start: {
              line: 112,
              column: 2
            },
            end: {
              line: 112,
              column: 3
            }
          },
          loc: {
            start: {
              line: 112,
              column: 18
            },
            end: {
              line: 114,
              column: 3
            }
          },
          line: 112
        },
        "11": {
          name: "(anonymous_11)",
          decl: {
            start: {
              line: 116,
              column: 2
            },
            end: {
              line: 116,
              column: 3
            }
          },
          loc: {
            start: {
              line: 116,
              column: 32
            },
            end: {
              line: 118,
              column: 3
            }
          },
          line: 116
        },
        "12": {
          name: "(anonymous_12)",
          decl: {
            start: {
              line: 121,
              column: 2
            },
            end: {
              line: 121,
              column: 3
            }
          },
          loc: {
            start: {
              line: 121,
              column: 26
            },
            end: {
              line: 123,
              column: 3
            }
          },
          line: 121
        },
        "13": {
          name: "(anonymous_13)",
          decl: {
            start: {
              line: 125,
              column: 2
            },
            end: {
              line: 125,
              column: 3
            }
          },
          loc: {
            start: {
              line: 125,
              column: 17
            },
            end: {
              line: 127,
              column: 3
            }
          },
          line: 125
        },
        "14": {
          name: "(anonymous_14)",
          decl: {
            start: {
              line: 129,
              column: 2
            },
            end: {
              line: 129,
              column: 3
            }
          },
          loc: {
            start: {
              line: 129,
              column: 54
            },
            end: {
              line: 145,
              column: 3
            }
          },
          line: 129
        },
        "15": {
          name: "(anonymous_15)",
          decl: {
            start: {
              line: 147,
              column: 2
            },
            end: {
              line: 147,
              column: 3
            }
          },
          loc: {
            start: {
              line: 147,
              column: 26
            },
            end: {
              line: 168,
              column: 3
            }
          },
          line: 147
        }
      },
      branchMap: {
        "0": {
          loc: {
            start: {
              line: 30,
              column: 6
            },
            end: {
              line: 32,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 30,
              column: 6
            },
            end: {
              line: 32,
              column: 7
            }
          }, {
            start: {
              line: 30,
              column: 6
            },
            end: {
              line: 32,
              column: 7
            }
          }],
          line: 30
        },
        "1": {
          loc: {
            start: {
              line: 46,
              column: 4
            },
            end: {
              line: 48,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 46,
              column: 4
            },
            end: {
              line: 48,
              column: 5
            }
          }, {
            start: {
              line: 46,
              column: 4
            },
            end: {
              line: 48,
              column: 5
            }
          }],
          line: 46
        },
        "2": {
          loc: {
            start: {
              line: 80,
              column: 4
            },
            end: {
              line: 83,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 80,
              column: 4
            },
            end: {
              line: 83,
              column: 5
            }
          }, {
            start: {
              line: 80,
              column: 4
            },
            end: {
              line: 83,
              column: 5
            }
          }],
          line: 80
        },
        "3": {
          loc: {
            start: {
              line: 80,
              column: 8
            },
            end: {
              line: 80,
              column: 37
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 80,
              column: 8
            },
            end: {
              line: 80,
              column: 17
            }
          }, {
            start: {
              line: 80,
              column: 21
            },
            end: {
              line: 80,
              column: 37
            }
          }],
          line: 80
        },
        "4": {
          loc: {
            start: {
              line: 82,
              column: 17
            },
            end: {
              line: 82,
              column: 68
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 82,
              column: 48
            },
            end: {
              line: 82,
              column: 63
            }
          }, {
            start: {
              line: 82,
              column: 66
            },
            end: {
              line: 82,
              column: 68
            }
          }],
          line: 82
        },
        "5": {
          loc: {
            start: {
              line: 82,
              column: 17
            },
            end: {
              line: 82,
              column: 45
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 82,
              column: 17
            },
            end: {
              line: 82,
              column: 25
            }
          }, {
            start: {
              line: 82,
              column: 29
            },
            end: {
              line: 82,
              column: 45
            }
          }],
          line: 82
        },
        "6": {
          loc: {
            start: {
              line: 85,
              column: 11
            },
            end: {
              line: 85,
              column: 73
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 85,
              column: 58
            },
            end: {
              line: 85,
              column: 66
            }
          }, {
            start: {
              line: 85,
              column: 69
            },
            end: {
              line: 85,
              column: 73
            }
          }],
          line: 85
        },
        "7": {
          loc: {
            start: {
              line: 85,
              column: 11
            },
            end: {
              line: 85,
              column: 55
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 85,
              column: 11
            },
            end: {
              line: 85,
              column: 19
            }
          }, {
            start: {
              line: 85,
              column: 23
            },
            end: {
              line: 85,
              column: 55
            }
          }],
          line: 85
        },
        "8": {
          loc: {
            start: {
              line: 89,
              column: 4
            },
            end: {
              line: 91,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 89,
              column: 4
            },
            end: {
              line: 91,
              column: 5
            }
          }, {
            start: {
              line: 89,
              column: 4
            },
            end: {
              line: 91,
              column: 5
            }
          }],
          line: 89
        },
        "9": {
          loc: {
            start: {
              line: 101,
              column: 4
            },
            end: {
              line: 103,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 101,
              column: 4
            },
            end: {
              line: 103,
              column: 5
            }
          }, {
            start: {
              line: 101,
              column: 4
            },
            end: {
              line: 103,
              column: 5
            }
          }],
          line: 101
        },
        "10": {
          loc: {
            start: {
              line: 101,
              column: 8
            },
            end: {
              line: 101,
              column: 57
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 101,
              column: 8
            },
            end: {
              line: 101,
              column: 32
            }
          }, {
            start: {
              line: 101,
              column: 36
            },
            end: {
              line: 101,
              column: 57
            }
          }],
          line: 101
        },
        "11": {
          loc: {
            start: {
              line: 126,
              column: 12
            },
            end: {
              line: 126,
              column: 25
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 126,
              column: 12
            },
            end: {
              line: 126,
              column: 18
            }
          }, {
            start: {
              line: 126,
              column: 22
            },
            end: {
              line: 126,
              column: 25
            }
          }],
          line: 126
        },
        "12": {
          loc: {
            start: {
              line: 131,
              column: 6
            },
            end: {
              line: 143,
              column: 7
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 131,
              column: 6
            },
            end: {
              line: 143,
              column: 7
            }
          }, {
            start: {
              line: 131,
              column: 6
            },
            end: {
              line: 143,
              column: 7
            }
          }],
          line: 131
        },
        "13": {
          loc: {
            start: {
              line: 134,
              column: 30
            },
            end: {
              line: 135,
              column: 37
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 135,
              column: 12
            },
            end: {
              line: 135,
              column: 21
            }
          }, {
            start: {
              line: 135,
              column: 24
            },
            end: {
              line: 135,
              column: 37
            }
          }],
          line: 134
        },
        "14": {
          loc: {
            start: {
              line: 134,
              column: 30
            },
            end: {
              line: 134,
              column: 60
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 134,
              column: 30
            },
            end: {
              line: 134,
              column: 35
            }
          }, {
            start: {
              line: 134,
              column: 39
            },
            end: {
              line: 134,
              column: 60
            }
          }],
          line: 134
        },
        "15": {
          loc: {
            start: {
              line: 137,
              column: 8
            },
            end: {
              line: 142,
              column: 9
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 137,
              column: 8
            },
            end: {
              line: 142,
              column: 9
            }
          }, {
            start: {
              line: 137,
              column: 8
            },
            end: {
              line: 142,
              column: 9
            }
          }],
          line: 137
        },
        "16": {
          loc: {
            start: {
              line: 148,
              column: 4
            },
            end: {
              line: 150,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 148,
              column: 4
            },
            end: {
              line: 150,
              column: 5
            }
          }, {
            start: {
              line: 148,
              column: 4
            },
            end: {
              line: 150,
              column: 5
            }
          }],
          line: 148
        },
        "17": {
          loc: {
            start: {
              line: 153,
              column: 4
            },
            end: {
              line: 156,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 153,
              column: 4
            },
            end: {
              line: 156,
              column: 5
            }
          }, {
            start: {
              line: 153,
              column: 4
            },
            end: {
              line: 156,
              column: 5
            }
          }],
          line: 153
        },
        "18": {
          loc: {
            start: {
              line: 155,
              column: 13
            },
            end: {
              line: 155,
              column: 53
            }
          },
          type: "cond-expr",
          locations: [{
            start: {
              line: 155,
              column: 42
            },
            end: {
              line: 155,
              column: 46
            }
          }, {
            start: {
              line: 155,
              column: 49
            },
            end: {
              line: 155,
              column: 53
            }
          }],
          line: 155
        },
        "19": {
          loc: {
            start: {
              line: 158,
              column: 4
            },
            end: {
              line: 160,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 158,
              column: 4
            },
            end: {
              line: 160,
              column: 5
            }
          }, {
            start: {
              line: 158,
              column: 4
            },
            end: {
              line: 160,
              column: 5
            }
          }],
          line: 158
        },
        "20": {
          loc: {
            start: {
              line: 163,
              column: 4
            },
            end: {
              line: 165,
              column: 5
            }
          },
          type: "if",
          locations: [{
            start: {
              line: 163,
              column: 4
            },
            end: {
              line: 165,
              column: 5
            }
          }, {
            start: {
              line: 163,
              column: 4
            },
            end: {
              line: 165,
              column: 5
            }
          }],
          line: 163
        }
      },
      s: {
        "0": 0,
        "1": 0,
        "2": 0,
        "3": 0,
        "4": 0,
        "5": 0,
        "6": 0,
        "7": 0,
        "8": 0,
        "9": 0,
        "10": 0,
        "11": 0,
        "12": 0,
        "13": 0,
        "14": 0,
        "15": 0,
        "16": 0,
        "17": 0,
        "18": 0,
        "19": 0,
        "20": 0,
        "21": 0,
        "22": 0,
        "23": 0,
        "24": 0,
        "25": 0,
        "26": 0,
        "27": 0,
        "28": 0,
        "29": 0,
        "30": 0,
        "31": 0,
        "32": 0,
        "33": 0,
        "34": 0,
        "35": 0,
        "36": 0,
        "37": 0,
        "38": 0,
        "39": 0,
        "40": 0,
        "41": 0,
        "42": 0,
        "43": 0,
        "44": 0,
        "45": 0,
        "46": 0,
        "47": 0,
        "48": 0,
        "49": 0,
        "50": 0,
        "51": 0,
        "52": 0,
        "53": 0,
        "54": 0,
        "55": 0,
        "56": 0,
        "57": 0,
        "58": 0
      },
      f: {
        "0": 0,
        "1": 0,
        "2": 0,
        "3": 0,
        "4": 0,
        "5": 0,
        "6": 0,
        "7": 0,
        "8": 0,
        "9": 0,
        "10": 0,
        "11": 0,
        "12": 0,
        "13": 0,
        "14": 0,
        "15": 0
      },
      b: {
        "0": [0, 0],
        "1": [0, 0],
        "2": [0, 0],
        "3": [0, 0],
        "4": [0, 0],
        "5": [0, 0],
        "6": [0, 0],
        "7": [0, 0],
        "8": [0, 0],
        "9": [0, 0],
        "10": [0, 0],
        "11": [0, 0],
        "12": [0, 0],
        "13": [0, 0],
        "14": [0, 0],
        "15": [0, 0],
        "16": [0, 0],
        "17": [0, 0],
        "18": [0, 0],
        "19": [0, 0],
        "20": [0, 0]
      },
      _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184"
    },
        coverage = global[gcv] || (global[gcv] = {});

    if (coverage[path] && coverage[path].hash === hash) {
      return coverage[path];
    }

    coverageData.hash = hash;
    return coverage[path] = coverageData;
  }();
  /**
   * ------------------------------------------------------------------------
   * Private TransitionEnd Helpers
   * ------------------------------------------------------------------------
   */

  var TRANSITION_END = (cov_c7ihpjow2.s[0]++, 'transitionend');
  var MAX_UID = (cov_c7ihpjow2.s[1]++, 1000000);
  var MILLISECONDS_MULTIPLIER = (cov_c7ihpjow2.s[2]++, 1000); // Shoutout AngusCroll (https://goo.gl/pxwQGp)

  function toType(obj) {
    cov_c7ihpjow2.f[0]++;
    cov_c7ihpjow2.s[3]++;
    return {}.toString.call(obj).match(/\s([a-z]+)/i)[1].toLowerCase();
  }

  function getSpecialTransitionEndEvent() {
    cov_c7ihpjow2.f[1]++;
    cov_c7ihpjow2.s[4]++;
    return {
      bindType: TRANSITION_END,
      delegateType: TRANSITION_END,
      handle: function handle(event) {
        cov_c7ihpjow2.f[2]++;
        cov_c7ihpjow2.s[5]++;

        if ($(event.target).is(this)) {
          cov_c7ihpjow2.b[0][0]++;
          cov_c7ihpjow2.s[6]++;
          return event.handleObj.handler.apply(this, arguments); // eslint-disable-line prefer-rest-params
        } else {
          cov_c7ihpjow2.b[0][1]++;
        }

        cov_c7ihpjow2.s[7]++;
        return undefined; // eslint-disable-line no-undefined
      }
    };
  }

  function transitionEndEmulator(duration) {
    var _this = this;

    cov_c7ihpjow2.f[3]++;
    var called = (cov_c7ihpjow2.s[8]++, false);
    cov_c7ihpjow2.s[9]++;
    $(this).one(Util.TRANSITION_END, function () {
      cov_c7ihpjow2.f[4]++;
      cov_c7ihpjow2.s[10]++;
      called = true;
    });
    cov_c7ihpjow2.s[11]++;
    setTimeout(function () {
      cov_c7ihpjow2.f[5]++;
      cov_c7ihpjow2.s[12]++;

      if (!called) {
        cov_c7ihpjow2.b[1][0]++;
        cov_c7ihpjow2.s[13]++;
        Util.triggerTransitionEnd(_this);
      } else {
        cov_c7ihpjow2.b[1][1]++;
      }
    }, duration);
    cov_c7ihpjow2.s[14]++;
    return this;
  }

  function setTransitionEndSupport() {
    cov_c7ihpjow2.f[6]++;
    cov_c7ihpjow2.s[15]++;
    $.fn.emulateTransitionEnd = transitionEndEmulator;
    cov_c7ihpjow2.s[16]++;
    $.event.special[Util.TRANSITION_END] = getSpecialTransitionEndEvent();
  }
  /**
   * --------------------------------------------------------------------------
   * Public Util Api
   * --------------------------------------------------------------------------
   */


  var Util = (cov_c7ihpjow2.s[17]++, {
    TRANSITION_END: 'bsTransitionEnd',
    getUID: function getUID(prefix) {
      cov_c7ihpjow2.f[7]++;
      cov_c7ihpjow2.s[18]++;

      do {
        cov_c7ihpjow2.s[19]++;
        // eslint-disable-next-line no-bitwise
        prefix += ~~(Math.random() * MAX_UID); // "~~" acts like a faster Math.floor() here
      } while (document.getElementById(prefix));

      cov_c7ihpjow2.s[20]++;
      return prefix;
    },
    getSelectorFromElement: function getSelectorFromElement(element) {
      cov_c7ihpjow2.f[8]++;
      var selector = (cov_c7ihpjow2.s[21]++, element.getAttribute('data-target'));
      cov_c7ihpjow2.s[22]++;

      if ((cov_c7ihpjow2.b[3][0]++, !selector) || (cov_c7ihpjow2.b[3][1]++, selector === '#')) {
        cov_c7ihpjow2.b[2][0]++;
        var hrefAttr = (cov_c7ihpjow2.s[23]++, element.getAttribute('href'));
        cov_c7ihpjow2.s[24]++;
        selector = (cov_c7ihpjow2.b[5][0]++, hrefAttr) && (cov_c7ihpjow2.b[5][1]++, hrefAttr !== '#') ? (cov_c7ihpjow2.b[4][0]++, hrefAttr.trim()) : (cov_c7ihpjow2.b[4][1]++, '');
      } else {
        cov_c7ihpjow2.b[2][1]++;
      }

      cov_c7ihpjow2.s[25]++;
      return (cov_c7ihpjow2.b[7][0]++, selector) && (cov_c7ihpjow2.b[7][1]++, document.querySelector(selector)) ? (cov_c7ihpjow2.b[6][0]++, selector) : (cov_c7ihpjow2.b[6][1]++, null);
    },
    getTransitionDurationFromElement: function getTransitionDurationFromElement(element) {
      cov_c7ihpjow2.f[9]++;
      cov_c7ihpjow2.s[26]++;

      if (!element) {
        cov_c7ihpjow2.b[8][0]++;
        cov_c7ihpjow2.s[27]++;
        return 0;
      } else {
        cov_c7ihpjow2.b[8][1]++;
      } // Get transition-duration of the element


      var transitionDuration = (cov_c7ihpjow2.s[28]++, $(element).css('transition-duration'));
      var transitionDelay = (cov_c7ihpjow2.s[29]++, $(element).css('transition-delay'));
      var floatTransitionDuration = (cov_c7ihpjow2.s[30]++, parseFloat(transitionDuration));
      var floatTransitionDelay = (cov_c7ihpjow2.s[31]++, parseFloat(transitionDelay)); // Return 0 if element or transition duration is not found

      cov_c7ihpjow2.s[32]++;

      if ((cov_c7ihpjow2.b[10][0]++, !floatTransitionDuration) && (cov_c7ihpjow2.b[10][1]++, !floatTransitionDelay)) {
        cov_c7ihpjow2.b[9][0]++;
        cov_c7ihpjow2.s[33]++;
        return 0;
      } else {
        cov_c7ihpjow2.b[9][1]++;
      } // If multiple durations are defined, take the first


      cov_c7ihpjow2.s[34]++;
      transitionDuration = transitionDuration.split(',')[0];
      cov_c7ihpjow2.s[35]++;
      transitionDelay = transitionDelay.split(',')[0];
      cov_c7ihpjow2.s[36]++;
      return (parseFloat(transitionDuration) + parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
    },
    reflow: function reflow(element) {
      cov_c7ihpjow2.f[10]++;
      cov_c7ihpjow2.s[37]++;
      return element.offsetHeight;
    },
    triggerTransitionEnd: function triggerTransitionEnd(element) {
      cov_c7ihpjow2.f[11]++;
      cov_c7ihpjow2.s[38]++;
      $(element).trigger(TRANSITION_END);
    },
    // TODO: Remove in v5
    supportsTransitionEnd: function supportsTransitionEnd() {
      cov_c7ihpjow2.f[12]++;
      cov_c7ihpjow2.s[39]++;
      return Boolean(TRANSITION_END);
    },
    isElement: function isElement(obj) {
      cov_c7ihpjow2.f[13]++;
      cov_c7ihpjow2.s[40]++;
      return ((cov_c7ihpjow2.b[11][0]++, obj[0]) || (cov_c7ihpjow2.b[11][1]++, obj)).nodeType;
    },
    typeCheckConfig: function typeCheckConfig(componentName, config, configTypes) {
      cov_c7ihpjow2.f[14]++;
      cov_c7ihpjow2.s[41]++;

      for (var property in configTypes) {
        cov_c7ihpjow2.s[42]++;

        if (Object.prototype.hasOwnProperty.call(configTypes, property)) {
          cov_c7ihpjow2.b[12][0]++;
          var expectedTypes = (cov_c7ihpjow2.s[43]++, configTypes[property]);
          var value = (cov_c7ihpjow2.s[44]++, config[property]);
          var valueType = (cov_c7ihpjow2.s[45]++, (cov_c7ihpjow2.b[14][0]++, value) && (cov_c7ihpjow2.b[14][1]++, Util.isElement(value)) ? (cov_c7ihpjow2.b[13][0]++, 'element') : (cov_c7ihpjow2.b[13][1]++, toType(value)));
          cov_c7ihpjow2.s[46]++;

          if (!new RegExp(expectedTypes).test(valueType)) {
            cov_c7ihpjow2.b[15][0]++;
            cov_c7ihpjow2.s[47]++;
            throw new Error(componentName.toUpperCase() + ": " + ("Option \"" + property + "\" provided type \"" + valueType + "\" ") + ("but expected type \"" + expectedTypes + "\"."));
          } else {
            cov_c7ihpjow2.b[15][1]++;
          }
        } else {
          cov_c7ihpjow2.b[12][1]++;
        }
      }
    },
    findShadowRoot: function findShadowRoot(element) {
      cov_c7ihpjow2.f[15]++;
      cov_c7ihpjow2.s[48]++;

      if (!document.documentElement.attachShadow) {
        cov_c7ihpjow2.b[16][0]++;
        cov_c7ihpjow2.s[49]++;
        return null;
      } else {
        cov_c7ihpjow2.b[16][1]++;
      } // Can find the shadow root otherwise it'll return the document


      cov_c7ihpjow2.s[50]++;

      if (typeof element.getRootNode === 'function') {
        cov_c7ihpjow2.b[17][0]++;
        var root = (cov_c7ihpjow2.s[51]++, element.getRootNode());
        cov_c7ihpjow2.s[52]++;
        return root instanceof ShadowRoot ? (cov_c7ihpjow2.b[18][0]++, root) : (cov_c7ihpjow2.b[18][1]++, null);
      } else {
        cov_c7ihpjow2.b[17][1]++;
      }

      cov_c7ihpjow2.s[53]++;

      if (element instanceof ShadowRoot) {
        cov_c7ihpjow2.b[19][0]++;
        cov_c7ihpjow2.s[54]++;
        return element;
      } else {
        cov_c7ihpjow2.b[19][1]++;
      } // when we don't find a shadow root


      cov_c7ihpjow2.s[55]++;

      if (!element.parentNode) {
        cov_c7ihpjow2.b[20][0]++;
        cov_c7ihpjow2.s[56]++;
        return null;
      } else {
        cov_c7ihpjow2.b[20][1]++;
      }

      cov_c7ihpjow2.s[57]++;
      return Util.findShadowRoot(element.parentNode);
    }
  });
  cov_c7ihpjow2.s[58]++;
  setTransitionEndSupport();

  return Util;

})));
//# sourceMappingURL=util.js.map
