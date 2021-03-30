import Button from "react-bootstrap/Button"
import { Accordion } from "react-bootstrap";
import Card from "react-bootstrap/Card"

function Rules() {
  return (
    <Accordion>
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="0">
            Rules
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
        <Card.Body> 
          Welcome to a simple hangman game demo!
          To play, you can put one letter in the guess box and hit enter or the submit button!
          To reset the game with a new word, click the Reset button!
        </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}
  
export default Rules;