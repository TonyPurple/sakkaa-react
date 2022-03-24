import React, { Component } from "react";
import { getAllProfiles } from "../../services/profileService";

class Profiles extends Component {
  state = {
    profiles: [],
  };

  async componentDidMount() {
    const profiles = await getAllProfiles();
    this.setState({ profiles });
  }

  render() {
    return (
        <>
          <h1>Hello. This is a list of all the profiles.</h1>
          {this.state.profiles.length ? 
            <>
              {this.state.profiles.map(profile=>
                <p key={profile._id}>{profile.name}</p>
              )}
            </>
          :
            <p>No profiles yet</p>
          }
        </>
      )
    }}

export default Profiles;
