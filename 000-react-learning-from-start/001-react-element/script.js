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

// we can add multiple nested elements if we want
const container = React.createElement("div", { className: "contianer" }, [
  React.createElement("p", { className: "para" }, "Hello I am paragraph"),
  React.createElement("img", {
    className: "image",
    alt: "a test image",
    src: "https://cloudmatetechnologies.com/wp-content/uploads/2024/06/react.js-1536x864.png",
    height: "100px",
  }),
]);

root.render(container);

// note: if we keep complex this app it will be a huge mess and hard to maintain. So we write these codes with jsx syntax. which is parsed by "babel" into React.createElement and related methods.
// - JSX is looks like html so its easy to write and maintain.
