import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"

function HomeRow(props) {
  return (
    <Row style={{...props.styles}}>
        <Col md={{offset:2}} style={{display: "flex", alignItems:"center"}}>
            <h1>{props.title}</h1>
        </Col>
        <Col>
            <Card>
                <Card.Header>{props.cardTitle}</Card.Header>
                <Card.Body>{props.cardBody}</Card.Body>
                <Card.Link href={props.cardLink}>{props.cardLinkText}</Card.Link>
            </Card>
        </Col>
    </Row>
  );
}
   
export default HomeRow;