// Generated by BUCKLESCRIPT VERSION 4.0.6, PLEASE EDIT WITH CARE
'use strict';

var List = require("bs-platform/lib/js/list.js");
var $$Array = require("bs-platform/lib/js/array.js");
var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var ReasonReact = require("reason-react/src/ReasonReact.js");

var component = ReasonReact.reducerComponent("Intro");

function make(name, visitors, _) {
  return /* record */[
          /* debugName */component[/* debugName */0],
          /* reactClassInternal */component[/* reactClassInternal */1],
          /* handedOffState */component[/* handedOffState */2],
          /* willReceiveProps */component[/* willReceiveProps */3],
          /* didMount */component[/* didMount */4],
          /* didUpdate */component[/* didUpdate */5],
          /* willUnmount */component[/* willUnmount */6],
          /* willUpdate */component[/* willUpdate */7],
          /* shouldUpdate */component[/* shouldUpdate */8],
          /* render */(function (self) {
              return React.createElement("div", undefined, React.createElement("p", undefined, "Hello " + (name + "!")), React.createElement("p", undefined, "Visitors: " + String(self[/* state */1][/* count */0])), $$Array.of_list(List.map((function (visitor) {
                                    return React.createElement("div", undefined, visitor[/* name */0] + ": ", String(visitor[/* id */1]));
                                  }), self[/* state */1][/* visitors */1])), React.createElement("p", undefined, React.createElement("button", {
                                  onClick: (function () {
                                      return Curry._1(self[/* send */3], /* Add */0);
                                    })
                                }, "Add Visitor")), React.createElement("p", undefined, React.createElement("button", {
                                  onClick: (function () {
                                      return Curry._1(self[/* send */3], /* Remove */1);
                                    })
                                }, "Remove Visitor")));
            }),
          /* initialState */(function () {
              return /* record */[
                      /* count */List.length(visitors),
                      /* visitors */visitors
                    ];
            }),
          /* retainedProps */component[/* retainedProps */11],
          /* reducer */(function (action, state) {
              if (action) {
                return /* Update */Block.__(0, [/* record */[
                            /* count */state[/* count */0] - 1 | 0,
                            /* visitors */state[/* visitors */1]
                          ]]);
              } else {
                return /* Update */Block.__(0, [/* record */[
                            /* count */state[/* count */0] + 1 | 0,
                            /* visitors : :: */[
                              /* record */[
                                /* name */"Visitor",
                                /* id */state[/* count */0]
                              ],
                              state[/* visitors */1]
                            ]
                          ]]);
              }
            }),
          /* jsElementWrapped */component[/* jsElementWrapped */13]
        ];
}

var $$default = ReasonReact.wrapReasonForJs(component, (function (jsProps) {
        return make(jsProps.name, jsProps.visitors, /* array */[]);
      }));

exports.component = component;
exports.make = make;
exports.$$default = $$default;
exports.default = $$default;
exports.__esModule = true;
/* component Not a pure module */
