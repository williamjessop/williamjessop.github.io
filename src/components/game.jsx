import React from "react";
import Card from "react-bootstrap/Card"

class Game extends React.Component {
    render() {
        return (
            <div className="side-by-side" >
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Game</Card.Title>
                        <Card.Text>
                            Hello, this is where the game will be renderd
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        );
      }
  }

export default Game;