import React from "react";
import ReactDOM from "react-dom/client";


// React.createElement => ReactElement - JS Object  => HTMLElement(render)
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World using React",
);

console.log(heading);


//jsx introduction - HTML- like syntax - parcel- babel (compiler) -jsx to react create elememt 

// jsx => React.createElement => ReactElement - JS Object  => HTMLElement(render)
const jsxheading = <h1 id="heading">Namste duniya using JSX👌</h1>
console.log(jsxheading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxheading);
