import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement(
  "h1",
  {
    id: "title",
    key: "h1",
  },
  "Click Me just now"
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

