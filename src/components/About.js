import { Component } from "react";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

class About extends Component {
  render() {
    return (
      <div className="text-center m-4 p-4">
        <h1 className='font-bold text-3xl p-4 m-4'>About Us</h1>

        <UserClass
          name="Pranay"
          location="Bhilai, India"
          education="CSE student"
        />
        <div className="flex justify-center">
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
