import React from "react";
import Game from "./game"

class Projects extends React.Component {
    render() {
        return (
            <div>
                <h1>Welcome to My Projects Page</h1>
                <p>Below you will find a live demo and some other projects</p>
                <Game/>
            </div>
        );
      }
  }

export default Projects;