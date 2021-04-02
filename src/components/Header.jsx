import Jumbotron from "react-bootstrap/Jumbotron"

function Header(props) {
  return (
    <Jumbotron>
        <h1>{props.title}</h1>
        <p>
            {props.description}
        </p>
    </Jumbotron>
  );
}
  
export default Header;