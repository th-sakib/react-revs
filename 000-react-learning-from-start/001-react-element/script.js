const h2 = React.createElement(
  "h2",
  { className: "subheading" },
  "Hello I'm subheading"
); // Creating element using react library

// const root = document.querySelector("#root");
//root.append(h2); // dom don't know its a react node so it won't work

// so we'll use react-dom library for show the h2 element in screen
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(h2);

// note: these methods in the end js codes written in the library.
