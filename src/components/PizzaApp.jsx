import React, { Component } from "react";
import "../../src/App.css";
import NavBar from "./navbar2";
import Counters from "./counters";
class PizzaApp extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  constructor() {
    super();
    console.log("PizzaApp - Constructor");
  }

  // Alternative if initializing state on load
  //Constructor(props) {
  //  super(props);
  //  console.log("App - Constructor", this.props);
  //  // this.state = this.props.something
  //}

  componentDidMount() {
    console.log("PizzaApp - Mounted");
  }

  // After DOM is loaded, great to do AJAX calls
  //  componentDidMount() {
  // Ajax call ot load data ie: movies etc.
  //    this.setState({ movie });
  //  }

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleReset = () => {
    const counter = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counter });
  };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };

  render() {
    console.log("PizzaApp - Rendered");

    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        />
        <main className="Container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}
export default PizzaApp;
