import Image from "react-bootstrap/Image"
import Header from "./Header"

function About() {
  return (
    <div>
        <Header
            title="Want to learn about me?"
            description="You have come to the right place."
        />
        <Image src={require('./img/me.jpg').default} roundedCircle />
        <p>This is me! I am a very nerdy computer science kid. I enjoy video games and coding.</p>
        <p>When I am not grinding for school you can find me working for Prostar and doing cool personal projects.</p>
        <p>You can also find me in VR and my favorite video games like Destiny and Risk of Rain 2.</p>
    </div>
  );
}
  
export default About;