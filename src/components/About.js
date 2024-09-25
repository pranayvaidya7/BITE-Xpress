import {Component} from "react";
import UserClass from "./UserClass";

class About extends Component {
  render() {
    return (
      <div>
        <h1>About</h1>
        <h2>This is Namaste React About</h2>
        <UserClass
          name="Pranay"
          location="Bhilai, India"
          education="CSE student"
        />
      </div>
    );
  }
}

export default About;
