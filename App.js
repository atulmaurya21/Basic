import React from "react";
import ReactDOM from "react-dom/client";

//React Element
const heading = <h1 className="heg">Namste duniya using JSX👌</h1>;


const Title = () => (
    <h1 className="head">
        Tilte
    </h1>
)
// React component two types - 1. Class based Component , 2. Functional based component

// React Functional Component

// const HeadingComponent = () => {
//   return <h1 className="heading "> React Functional component</h1>;
// };

//  single line functional component
// component composition
const HeadingComponent = () => (
    <div className="container">
        {heading}
        <Title/>
    <h1 className="heading"> React Functional component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

//react element render
// root.render(heading);
root.render(<HeadingComponent/>);