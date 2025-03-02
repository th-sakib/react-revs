/**
 * 1 set up babel
 * 2 use source map to help debug
 * 3 source map file request from devtools. and it contain our main js files content
 * 4 write --source-maps to enable source mapping or,
 * 5 put sourceMaps: true in babel config file
 */

const h2 = <h1 className={"newHeading"}>Hello world</h1>;

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(h2);
