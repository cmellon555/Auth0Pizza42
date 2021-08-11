import React, { Component } from "react";
class Counter extends Component {
  componentDidUpdate(prevProps, prevState) {
    // console.log("Counter - Updated");
    // Could add Ajax call back to server to get data if state data changed for example
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
    if (prevProps.counter.value !== this.props.counter.value) {
      // ajax call and get new data from the server
      console.log("New Value is ", this.props.counter.value);
    }
  }

  componentWillUnmount() {
    console.log("Counter - Unmount");
  }

  render() {
    console.log("Counter - Rendered");

    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className='primary btn-sm btn-dark'
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className='btn btn-danger btn-sm m-2'
        >
          Delete
        </button>
        <br />
      </React.Fragment>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }
  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}
export default Counter;
