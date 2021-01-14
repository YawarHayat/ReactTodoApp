import React from "react";
import shortid from "shortid";
class AddTask extends React.Component {
  state = {
    text: "",
  };
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit({
      id: shortid.generate(),
      text: this.state.text,
      complete: false,
    });
    this.setState({ text: "" });
  };
  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        style={{
          height: "50px",
          padding: "10px",
        }}
      >
        <input
          style={{
            height: "45px",
            width: "250px",
            borderRadius: "10px",
            border: "1px solid blue",
          }}
          name="text"
          value={this.state.text}
          onChange={this.handleChange}
          placeholder="Add a Task"
        />
        <button
          onClick={this.handleSubmit}
          style={{
            height: "48px",
            width: "60px",
            borderRadius: "10px",
            border: "1px solid blue",
            margin: "5px",
            fontSize: "16px",
          }}
        >
          Submit
        </button>
      </form>
    );
  }
}

export default AddTask;
