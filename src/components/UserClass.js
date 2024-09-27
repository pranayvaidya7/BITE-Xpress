import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Pranay",
        location: "Bhilai",
        education: "CSE Student"
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
      <div className="user-card">
        <img src={avatar_url} className="py-2 w-56"/>
        <h1>{login}</h1>
        <h2>{location}</h2>
        <h2>{education}</h2>
      </div>
    );
  }
}
export default UserClass;
