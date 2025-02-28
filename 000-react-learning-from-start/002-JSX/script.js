const h2 = <h2 className="subheading">this a heading</h2>;
/**
 * JSX part - <h2 className="subheading">this a heading</h2>;
 * this part is tranferred by bebel into this: 
 
1 "use strict";

2 var h2 = React.createElement("h2", {
3   className: "subheading"
4 }, "this a heading");
5 var root = ReactDOM.createRoot(document.querySelector("#root"));
6 root.render(h2);
7 console.log(h2);
8
9 //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJoMiIsIlJlYWN0IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsInJvb3QiLCJSZWFjdERPTSIsImNyZWF0ZVJvb3QiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJyZW5kZXIiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZXMiOlsiaHR0cDovLzEyNy4wLjAuMTo1NTAwLzAwMC1yZWFjdC1sZWFybmluZy1mcm9tLXN0YXJ0LzAwMi1KU1gvc2NyaXB0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGgyID0gPGgyIGNsYXNzTmFtZT1cInN1YmhlYWRpbmdcIj50aGlzIGEgaGVhZGluZzwvaDI+O1xyXG5jb25zdCByb290ID0gUmVhY3RET00uY3JlYXRlUm9vdChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Jvb3RcIikpO1xyXG5yb290LnJlbmRlcihoMik7XHJcbmNvbnNvbGUubG9nKGgyKTtcclxuIl0sIm1hcHBpbmdzIjoiOztBQUFBLElBQU1BLEVBQUUsZ0JBQUdDLEtBQUEsQ0FBQUMsYUFBQTtFQUFJQyxTQUFTLEVBQUM7QUFBWSxHQUFDLGdCQUFrQixDQUFDO0FBQ3pELElBQU1DLElBQUksR0FBR0MsUUFBUSxDQUFDQyxVQUFVLENBQUNDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ2pFSixJQUFJLENBQUNLLE1BQU0sQ0FBQ1QsRUFBRSxDQUFDO0FBQ2ZVLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDWCxFQUFFLENBQUMiLCJpZ25vcmVMaXN0IjpbXX0=
 */

const user = "sakib";
const test = (
  <div className="contianer">
    {/* We can pass variables or any js code inside curly braces {} */}
    <h2>user: {user}</h2>
  </div>
);

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(h2);

/**
 * note: babel understand JSX code
 * JSX codes are tranformed in js (react) code by babel.
 */
