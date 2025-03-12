export function render(reactElement, rootElement) {
  console.log(reactElement);
  function createDomElement(reactElement) {
    if (reactElement && typeof reactElement.type === "function") {
      return createDomElement(reactElement.type(reactElement.props));
    }
    // if its an array
    if (Array.isArray(reactElement)) {
      const reactElementFromArray = reactElement.map((el) => {
        return createDomElement(el);
      });
      return reactElementFromArray;
    }

    // if its a string
    if (typeof reactElement === "string") {
      const textNode = document.createTextNode(reactElement);
      return textNode;
    }

    // if its an actual react-element
    const { type, props } = reactElement;

    // creating the dom element
    const DOMElement = document.createElement(type);

    if (props) {
      // passing props
      Object.entries(props).forEach(([key, value]) => {
        DOMElement[key] = value;
      });

      // passing childrens to it
      props.children?.forEach((child) => {
        if (Array.isArray(child)) {
          DOMElement.append(...child.map((el) => createDomElement(el)));
        } else if (typeof child?.type === "string") {
          DOMElement.append(createDomElement(child));
        } else {
          const textNode = document.createTextNode(child);
          DOMElement.append(textNode);
        }
      });
      return DOMElement;
    }
  }

  const DOMElement = createDomElement(reactElement);

  if (Array.isArray(DOMElement)) {
    rootElement.append(...DOMElement);
  } else {
    rootElement.append(DOMElement);
  }
}

export default { render };
