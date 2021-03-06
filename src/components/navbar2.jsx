import React from "react";

// Class Based Component cc
//class NavBar extends Component {
//  render() {
//    return (
//      <nav className='navbar navbar-light bg-light'>
//        <a className='navbar-brand' href='#'>
//          Navbar{" "}
//          <span className='badge badge-pill badge-secondary'>
//            {this.props.totalCounters}
//          </span>
//        </a>
//      </nav>
//    );
//  }
//}

// Stateless Functional Component sfc

const NavBar = ({ totalCounters }) => {
  console.log("NavBar - Rendered");

  return (
    <nav className='navbar navbar-light bg-light'>
      <a className='navbar-brand' href=''>
        Navbar{" "}
        <span className='badge badge-pill badge-secondary'>
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
