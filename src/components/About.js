import { Component } from "react";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

class About extends Component {
  render() {
    return (
      <div>
        <h1>About</h1>

        <h2>This is my React Page About</h2>

        <UserClass
          name="Pranay"
          location="Bhilai, India"
          education="CSE student"
        />
        <div className="flex">
            User : 
            <UserContext.Consumer>
              {({logInUser}) => (
                <h1 className="text-xl font-bold"> {logInUser}</h1>
                )}
            </UserContext.Consumer>
        </div>
      </div>
    );
  }
}

export default About;
