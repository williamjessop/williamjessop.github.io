import React from "react";
import Card from "react-bootstrap/Card"
import Image from "react-bootstrap/Image"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import {words} from "./words.json"
import Rules from "./Rules"

const startState = {
    strikes: 0,
    screenWord: "",
    screenMisses: "",
    word: "",
    win: false,
    guessedChars: [],
    missedChars: [],
    guess: "",
    pic: require('./img/hangman_0.png').default,
    inputOn: true
}

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = startState;

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    pickWord(){this.setState({word: [...words[Math.floor(Math.random() * words.length)]]})}

    checkWin() {
        this.setState((state)=>{
            //this is a quick way to eliminate duplicates in an array. I am using a set to eat identical keys
            let checkWord = [...new Set(state.word)];
        
            checkWord.sort();
            let checkGuess = state.guessedChars.sort()

            for(let i = 0; i < checkWord.length; i++)
                if (checkWord[i] !== checkGuess[i])
                    return
            
            return {win: true, inputOn: false}
        });
    }

    updateStrikes() {
        this.setState((state) => {
            if(state.strikes < 6){
                return {
                    strikes: state.strikes+=1,
                    pic: require("./img/hangman_" + String(state.strikes) + ".png").default
                }
            }
        });
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

    updateGuesses(){
        if(this.state.word.includes(this.state.guess.toLowerCase())){
            this.setState((state) => {
                var joined = state.guessedChars.concat([state.guess.toLowerCase()]);

                return {
                    guessedChars: joined 
                }
            });
            this.updateScreenString();
        }else{
            this.setState((state) => {
                if(state.strikes < 5){
                    var joined = state.missedChars.concat([state.guess.toLowerCase()]);
                    return {
                        missedChars: joined 
                    }
                }else{
                    return {
                        inputOn: false
                    }
                }
            });
            this.updateStrikes(); 
        }
        this.checkWin();
    }

    handleChange(event){
        this.setState({guess: event.target.value});
    }

    handleSubmit(event){
        this.setState((state) => {state.guess = state.guess.toLowerCase();});
        if(this.state.guess.length !== 1 && this.state.guess.toLowerCase().match(/[a-z]/i)){
            alert("Please enter only 1 letter");
        }else{
            if(this.state.missedChars.includes(this.state.guess.toLowerCase()))
                alert("Please enter a different guess");
            else if(this.state.guessedChars.includes(this.state.guess.toLowerCase()))
                alert("Please enter a different guess");
            else if(!this.state.win)
                this.updateGuesses();
            else
                alert("There was an error");
        }
        event.preventDefault();
        this.setState({guess: ''});
    }

    handleReset(){
        this.setState(startState);
        this.pickWord();
        this.updateScreenString();
    }

    componentDidMount(){
        this.pickWord();
        this.updateScreenString();
    }

    render() {
        return (
            <div style={{...this.props.styles}}>
                <Card style={{ width: '20rem' }}>
                    <Card.Title>Welcome to Hangman!</Card.Title>
                    <Card.Body>
                        <Container>
                            <Row>
                                <Col>
                                    <Image src={this.state.pic} alt="Some text"/>
                                    
                                    <br/>
                                    
                                    <p>{this.state.screenWord}</p>
                                </Col>
                                <Col>
                                    <div style={{color:"red"}}>Incorrect:</div>
                                    <div style={{color:"red"}}>{this.state.missedChars.join(' ')}</div>
                                </Col>
                            </Row>
                            <br/>
                            {this.state.win && <h1 style={{color:"green"}}>YOU WIN!</h1>}
                            {!(this.state.strikes < 6) && <h1 style={{color:"red"}}>YOU LOSE!</h1>}
                            <Form style={{display: "flex"}} onSubmit={this.handleSubmit}>
                                <Form.Group>
                                    <Form.Control 
                                        type="text" 
                                        placeholder="Put Your Guess Here" 
                                        onChange={this.handleChange} 
                                        value={this.state.guess}
                                        disabled={!this.state.inputOn}
                                    />
                                </Form.Group>
                                <Button type="submit" style={{height:"70%"}} disabled={!this.state.inputOn}>Check!</Button>
                            </Form>
                            <Button variant="danger" type="submit" onClick={this.handleReset}>Reset</Button>
                        </Container>
                    </Card.Body>
                    <Row>
                        <Col>
                            <Rules/>
                        </Col>
                    </Row>
                    
                </Card>
            </div>
        );
      }
  }

export default Game;