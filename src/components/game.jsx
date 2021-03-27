import React from "react";
import Card from "react-bootstrap/Card"
import Image from "react-bootstrap/Image"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
const fs = require('fs');

class Game extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            strikes: 0,
            screenWord: "",
            screenMisses: "",
            word: "test",
            win: false,
            guessedChars: [],
            missedChars: [],
            guess: "",
            pic: require('./img/hangman_0.png').default
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    checkWin() {
        this.setState((state)=>{
            //this is a quick way to eliminate duplicates in an array. I am using a set to eat identical keys
            let checkWord = [...new Set(state.word)];
        
            //if (checkWord.length !== this.state.guessedChars.length) return;
        
            checkWord.sort();
            let checkGuess = state.guessedChars.sort()
            
            console.log("hit")
            for(let i = 0; i < checkWord.length; i++){
                
                if (checkWord[i] !== checkGuess[i])
                    return
            }

            return {win: true}
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
        if(this.state.word.includes(this.state.guess)){
            this.setState((state) => {
                var joined = state.guessedChars.concat([state.guess]);

                return {
                    guessedChars: joined 
                }
            });
            this.updateScreenString();
        }else{
            this.setState((state) => {
                var joined = state.missedChars.concat([state.guess]);

                return {
                    missedChars: joined 
                }
            });
            this.updateStrikes();
        }
        this.checkWin();
    }
    
    
    readWordsFromFile() {
        try {
            var data = fs.readFileSync('./words.txt', 'utf8')
            data = data.split('\n');
            return data;
        } catch (err) {
            console.error(err)
        }
    }
    

    componentDidMount(){
        this.updateScreenString();
    }

    handleChange(event){
        this.setState({guess: event.target.value});
    }

    handleSubmit(event){
        if(this.state.guess.length !== 1){
            alert("Please enter only 1 letter");
        }else{
            if(this.state.missedChars.includes(this.state.guess))
                alert("Please enter a different guess");
            else if(this.state.guessedChars.includes(this.state.guess))
                alert("Please enter a different guess");
            else if(!this.state.win)
                this.updateGuesses();
            else
                alert("There was an error");
        }
        event.preventDefault();
        this.setState({guess: ''});
    }

    render() {
        return (
            <div className="side-by-side" >
                <Card style={{ width: '30%'}}>
                    
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
                                    
                                    <Button type="submit">Reset</Button>
                                    
                                </Col>
                            </Row>
                            
                            <br/>
                            {this.state.win && <h1 style={{color:"green"}}>YOU WIN!</h1>}
                            {!(this.state.strikes < 6) && <h1 style={{color:"red"}}>YOU LOSE!</h1>}
                            <Form style={{display: "flex"}} onSubmit={this.handleSubmit}>
                                <Form.Group>
                                    <Form.Control type="text" placeholder="Put Your Guess Here" onChange={this.handleChange} value={this.state.guess}/>
                                </Form.Group>
                                <Button type="submit" style={{height:"70%"}}>Check!</Button>
                            </Form>

                            
                        </Container>
                        
                    </Card.Body>
                    
                </Card>
            </div>
        );
      }
  }

export default Game;