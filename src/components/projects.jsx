import React from "react";
import Game from "./game";
import Header from "./Header";
class Projects extends React.Component {
    render() {
        return (
            <div>
                <Header
                    title="Welcome to My Projects Page!"
                    description="Below you will find a live demo game! Check back later for more projects."
                />
                <div style={{display:"flex", justifyContent: "center", alignItems:"center", flexWrap:"wrap"}}>
                    <Game styles={{padding:"10px"}}/>
                </div>
            </div>
        );
      }
  }

export default Projects;