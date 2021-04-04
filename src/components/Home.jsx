import React from "react";
import { Container } from "react-bootstrap";
import HomeRow from "./HomeRow";
import Header from "./Header";

class Home extends React.Component {
    render() {
        return (
            <div>
                <Header
                    title="Welcome to My Homepage!"
                    description="I am William Jessop. I am a student and an employee at Prostar."
                />
                <Container fluid style={{padding:"4rem"}}>
                    <HomeRow
                        title="My Education"
                        cardTitle="Colorado Mesa University"
                        cardBody={`I am getting my education at Colorado Mesa University. 
                                   I am pursuing a Bachelor's Degree in Computer 
                                   Science and will graduate Spring of 2023`}
                        cardLink="https://www.coloradomesa.edu/computer-science/index.html"
                        cardLinkText="Read About CMU CS Here!"
                    />
                    
                    <HomeRow
                        styles={{paddingTop: "5rem"}}
                        title="My Experience"
                        cardTitle="Prostar"
                        cardBody={`I have worked at Prostar since August of 2017.
                                   I have enjoyed working at the company and I really like my work.`}
                        cardLink="https://www.prostarcorp.com/"
                        cardLinkText="Read About Prostar Here!"
                    />
                    
                    <HomeRow
                        styles={{paddingTop: "5rem"}}
                        title="My Projects"
                        cardTitle="Amazing Stuff"
                        cardBody={`I have spent time doing personal projects. 
                                   I have really enjoyed a lot of the work I have done 
                                   and you can see more on this website.`}
                        cardLink="/#/projects"
                        cardLinkText="See My Projects Here!"
                    />
                    
                </Container>
            </div>
        );
      }
  }

export default Home;