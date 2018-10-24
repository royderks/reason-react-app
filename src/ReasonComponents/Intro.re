/* Intro.re */
type visitor = {name: string, id: int};

type state = {
    count: int,
    visitors: list(visitor)
};

type action =
  | Add
  | Remove;

let component = ReasonReact.reducerComponent("Intro");

let make = (~name, ~visitors, _children) => {
  ...component,

  initialState: () => {count: List.length(visitors), visitors: visitors},

  reducer: (action, state) =>
    switch (action) {
    | Add => ReasonReact.Update({count: state.count + 1, visitors: [{name: "Visitor", id: state.count}, ...state.visitors]})
    | Remove => ReasonReact.Update({...state, count: state.count - 1})
    },

  render: self =>
    <div>
      <p>(ReasonReact.string("Hello " ++ name ++ "!"))</p>
      <p>(ReasonReact.string("Visitors: " ++ string_of_int(self.state.count)))</p>
      (ReasonReact.array(
          List.map(
            visitor => <div>
              (ReasonReact.string(visitor.name ++ ": "))
              (ReasonReact.string(string_of_int(visitor.id)))
            </div>,
            self.state.visitors
          ) |> Array.of_list
        ))
      <p><button onClick=(_event => self.send(Add))>
        (ReasonReact.string("Add Visitor"))
      </button></p>
      <p><button onClick=(_event => self.send(Remove))>
        (ReasonReact.string("Remove Visitor"))
      </button></p>
    </div>,
};

[@bs.deriving abstract]
type jsProps = {
    name: string,
    visitors: list(visitor)
};

let default =
  ReasonReact.wrapReasonForJs(~component, jsProps =>
    make(~name=jsProps->nameGet, ~visitors=jsProps->visitorsGet, [||])
  );
