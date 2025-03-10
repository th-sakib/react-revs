import { Component } from "react";

class OldCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  render() {
    const { name } = this.props;

    return (
      <div>
        <h1 className="mt-4">{name}</h1>
        <div className="mt-6 flex items-center gap-4">
          <button
            className="rounded bg-blue-400 px-4 py-1"
            onClick={function () {
              this.setState({ count: this.state.count - 1 });
            }.bind(this)} // we need to expecitely bine "this"+
          >
            -
          </button>
          <h2>{this.state.count}</h2>
          <button
            className="rounded bg-blue-400 px-4 py-1"
            onClick={() => this.setState({ count: this.state.count + 1 })}
          >
            +
          </button>
        </div>
      </div>
    );
  }
}

export default OldCounter;
