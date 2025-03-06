import { Component } from "react";
/**
 * react provide Component class, which have properties in it ( without those properties no component can be react component)
 
 * Thats why we extend that component so that we can inherit those properties.
*/

class ClassComp extends Component {
  constructor(props) {
    super(props);
  }
}

export default ClassComp;
