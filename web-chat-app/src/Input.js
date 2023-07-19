import { Component } from "react";
import React from "react";

class Input extends Component {
  constructor() {
    super();

    this.state = {
      text: "",
    };
  }

  onChange = (e) => {
    this.setState({ text: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (!this.state.text) return;
    this.setState({ text: "" });
    this.props.onSendMessage(this.state.text);
  };

  render() {
    return (
      <div className="Input">
        <form onSubmit={this.onSubmit}>
          <input
            onChange={this.onChange}
            value={this.state.text}
            type="text"
            placeholder="Enter your message"
            autoFocus
          />
          <button>Send</button>
        </form>
      </div>
    );
  }
}

export default Input;
