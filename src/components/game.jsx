import React from "react";
import Card from "react-bootstrap/Card"
import Image from "react-bootstrap/Image"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import pic from "./img/hangman_3.png"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

class Game extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            strikeNum: 0,
            correctGuessesString: "",
            word: "",
            win: false,
            guesses: []
        };

        this.checkWin = this.checkWin.bind(this);
    }

    checkWin(word, guessedChars) {
        //this is a quick way to eliminate duplicates in an array. I am using a set to eat identical keys
        word = [...new Set(word)];
    
        if (word.length !== guessedChars.length) return false;
    
        word.sort();
        guessedChars.sort();
        
        for(let i = 0; i < word.length; i++)
            if (word[i] !== guessedChars[i]) return false;
    
        return true;
    }  


    render() {
        return (
            <div className="side-by-side" >
                <Card style={{ width: '30%'}}>
                    <Card.Body>
                        <Card.Title>Welcome to Hangman!</Card.Title>
                        <Card.Body>
                            <Container>
                                <Image src={pic} alt="Some text"/>
                                
                                
                                    <p>This is where the word goes</p>
                                
                                <Row>
                                    <Col>
                                        <div style={{color:"green"}}>Here I will track the Correct Letters</div>
                                    </Col>
                                    <Col>
                                        <div style={{color:"red"}}>Here I will track the strikes</div>
                                    </Col>
                                    
                                </Row>
                                <br/>
                                
                                <Form style={{display: "flex"}}>
                                    <Form.Group>
                                        <Form.Control type="text" placeholder="Put Your Guess Here" />
                                    </Form.Group>
                                    <Button type="submit" style={{height:"70%"}}>Check!</Button>
                                </Form>

                            </Container>
                            
                        </Card.Body>
                    </Card.Body>
                </Card>
            </div>
        );
      }
  }

export default Game;