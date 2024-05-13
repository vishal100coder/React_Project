import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// const anotherElement = (
//   <a href="https://google.com" target="_blank">
//     Visit Google
//   </a>
// );
// const reactElement = React.createElement(
//   "a",
//   { href: "https://google.com", target: "_blank" },
//   "click me to visit the google"
// );

const anotherUser = "chai aur another User";

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
