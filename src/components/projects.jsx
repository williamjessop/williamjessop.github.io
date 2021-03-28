import React from "react";
import Game from "./game"
import Alert from "react-bootstrap/Alert"

class Projects extends React.Component {
    render() {
        return (
            <div>
                <h1>Welcome to My Projects Page!</h1>
                <p>Below you will find a live demo and some other projects</p>
                <div style={{display:"flex", justifyContent: "center", alignItems:"center", flexWrap:"wrap"}}>
                    <Game styles={{padding:"10px"}}/>
                    <Alert variant="success" style={{maxWidth:"30%"}}>
                        <Alert.Heading>The Rules for this game: </Alert.Heading>
                        <br/>
                        <p>
                            Welcome to a simple hangman game demo!
                            To play, you can put one letter in the guess box and hit enter or the submit button!
                            To reset the game with a new word, click the Reset button!
                        </p>
                    </Alert>
                </div>
                        
                 
                
            </div>
        );
      }
  }

export default Projects;