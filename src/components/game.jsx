import React from "react";
import Card from "react-bootstrap/Card"
import Image from "react-bootstrap/Image"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import pic from "./img/hangman_3.png"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

const fs = require('fs');

class Game extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            strikeNum: 0,
            screenWord: "",
            word: "test",
            win: false,
            guessedChars: [],
            input: ""
        };

        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    checkWin(word, guessedChars) {
        //this is a quick way to eliminate duplicates in an array. I am using a set to eat identical keys
        word.replace(/\s/g, '');
        word = [...new Set(word)];
    
        if (word.length !== guessedChars.length) return false;
    
        word.sort();
        guessedChars.sort();
        
        for(let i = 0; i < word.length; i++)
            if (word[i] !== guessedChars[i]) return false;
    
        return true;
    }

    prepStrikesString(strikes, difficulty, missedChars) {
        let screenWord = '';
    
        for (let i = 0; i < difficulty; i++) {
            if (strikes !== 0) {
                screenWord = screenWord + ' X';
                strikes--;
            } else {
                screenWord = screenWord + ' _';
            }
        }
    
        screenWord = screenWord + ' Missed Letters:'
    
        for (let i = 0; i < missedChars.length; i++) {
            screenWord = screenWord + ` ${missedChars[i]}`
        }
    
        return screenWord + '\n';
    }
    
    updateScreenString() {
        this.setState((state) => {
            let something = '';
        
            for (let i = 0; i < state.word.length; i++) {
                if (state.guessedChars.includes(state.word[i]))
                    something = something + ' ' + state.word[i];
                else
                    something = something + ' _';
            }
            
            
            return {screenWord: something}
        });
    }

    updateGuesses(guess){
        this.setState((state) => {
            var joined = state.guessedChars.concat([guess]);

            return {
                guessedChars: joined 
            }
        });

        this.updateScreenString();
    }
    
    /*
    readWordsFromFile() {
        try {
            var data = fs.readFileSync('./words.txt', 'utf8')
            data = data.split('\n');
            return data;
        } catch (err) {
            console.error(err)
        }
    }
    */

    componentDidMount(){
        this.updateScreenString();
    }

    handleChange(event){
        this.setState({input: event.target.value});
    }

    handleSubmit(event){
        alert(this.state.input);
        event.preventDefault();
        this.setState({input: ''})
    }

    render() {
        return (
            <div className="side-by-side" >
                <Card style={{ width: '30%'}}>
                    <Card.Body>
                        <Card.Title>Welcome to Hangman!</Card.Title>
                        <Card.Body>
                            <Container>
                                <Row>
                                    <Col>
                                        <Image src={pic} alt="Some text"/>
                                        
                                        <br/>
                                        
                                        <p>{this.state.screenWord}</p>
                                    </Col>
                                    <Col>
                                        
                                        <div style={{color:"red"}}>Incorrect:</div>
                                        <div style={{color:"red"}}>Z X C V</div>
                                        
                                        <Button type="submit">Reset</Button>
                                        
                                    </Col>
                                </Row>
                                
                                <br/>
                                
                                <Form style={{display: "flex"}} onSubmit={this.handleSubmit}>
                                    <Form.Group>
                                        <Form.Control type="text" placeholder="Put Your Guess Here" onChange={this.handleChange} value={this.state.input}/>
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