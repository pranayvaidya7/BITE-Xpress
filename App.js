import React from "react";
import ReactDOM from "react-dom";

// React.createElement => ReactElement-JS Object => HTMLElement(render)
// React Element
const heading = React.createElement(
  "h1",
  { id: "parent" },
  "It is a h1 heading wow🍁"
);

// JSX (transpiled before it reaches the JS) - PARCEL - BABEL

//JSX => React.createElement => ReactElement-JS Object => HTMLElement(render)
// element inside element
const elem = <span>element inside element🍒</span>
// in jsx we write "className" not "class"
const jsxHeading = (
    <h1 id="heading" className="head">
      {elem}
          Namaste JSX Heading🥨
  </h1>
);
// If one line code then we can avoid writing "return"
const HeadingCompo = () => <h1>it will get return as a jsx🍙</h1>;

// React Functional Component
// Functional Components returns JSX code
const HeadingComponent = () => (
  <div>
    <HeadingCompo/>
    {jsxHeading}
    <h1 id="heading" className="head">
      Returns From the Heading Component🍀{" "}
    </h1>
  </div>
);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>)

/* <div id= "parent">
    <div id= "child1">
        <h1>It is a h1 Tag</h1>
        <h2>It is a h2 Tag</h2>
    </div>
    <div id= "child2">
        <h1>It is a h1 Tag</h1>
        <h2>It is a h2 Tag</h2>
    </div>
</div>
 */

// const parent = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child1" }, [
//     React.createElement("h1", {}, "It issss a h1 Tag⚽"),
//     React.createElement("h2", {}, "It is a h2 Tag"),
//   ]),
//   React.createElement("div", { id: "child2" }, [
//     React.createElement("h3", {}, "It is a h3 Tag"),
//     React.createElement("h4", {}, "It is a h4 Tag"),
//   ]),
// ]);

// //object
// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello Pranay from React! "
// );
// const root = ReactDOM.createRoot(document.getElementById("root"));
// console.log(parent);
// root.render(heading);
// root.render(parent);
