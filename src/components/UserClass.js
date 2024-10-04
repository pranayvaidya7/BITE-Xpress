import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Pranay",
        location: "Bhilai",
        education: "CSE Student",
      },
    };
  }

  async componentDidMount() {
    //API call
    const data = await fetch("https://api.github.com/users/pranayvaidya7");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
  }
  render() {
    const { login, avatar_url } = this.state.userInfo;
    const { location, education } = this.props;
    return (
      <div className="user-card flex flex-col items-center p-4 rounded">
        <a
          href="https://www.linkedin.com/in/pranayvaidya/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={avatar_url}
            alt={`${login}'s avatar`}
            className="py-2 max-w-44 rounded-full cursor-pointer"
          />
        </a>
        <h1>{login || "Loading..."}</h1>
        <h2>{location}</h2>
        <h2>{education}</h2>
      </div>
    );
  }
}
export default UserClass;
