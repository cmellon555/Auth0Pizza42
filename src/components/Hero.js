import React from "react";

//import logo from "../assets/logo.svg";
import logo from "../assets/Pizza42-chef-medium.png";
import banner1 from "../assets/works.png";
const Hero = () => (
  <React.Fragment>
    <div className="text-center hero my-5">
      <img className="mb-3 " src={logo} alt="Pizza 42 logo" width="300" />
      <h1 className="mb-4">PIZZA 42</h1>
      <span className="lead">
        The best pizza in town!
        <br />
        <img
          //className="mb-3 app-logo"
          src={banner1}
          alt="Full Menu"
          width="500"
        />
        <br />
        <span className="mb-lg-4">
          <b>Try one of our Pizza's today!</b>
        </span>
      </span>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Small</th>
            <th scope="col">Medium</th>
            <th scope="col">Large</th>
            <th scope="col">Xtra Large</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>10"</td>
            <td>12"</td>
            <td>14"</td>
            <td>16"</td>
          </tr>
        </tbody>
      </table>
    </div>
  </React.Fragment>
);

export default Hero;
