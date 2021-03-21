import React from "react";
import Card from "react-bootstrap/Card"

class Home extends React.Component {
    render() {
        return (
            <div className='side-by-side' >
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Want to See Some Projects?</Card.Title>
                        <Card.Text>
                            Here you can see some of the works I have spent time on as a developer. Think of it as my portfolio.
                        </Card.Text>
                        <Card.Link href="/projects">Let's Go!</Card.Link>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Want to See Some Projects?</Card.Title>
                        <Card.Text>
                            Here you can see some of the works I have spent time on as a developer. Think of it as my portfolio.
                        </Card.Text>
                        <Card.Link href="/projects">Let's Go!</Card.Link>
                    </Card.Body>
                </Card>
            </div>
        );
      }
  }

export default Home;