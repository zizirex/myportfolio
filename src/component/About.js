import React, {Component} from 'react';
import Footer from "./Footer"
import { Container} from 'reactstrap';


class About extends Component {
    render() {
        return (
            <Container className="bodyAbout">
                <h1 className="aboutTitle">About Me</h1>
                <div className = "about" >
                    <h2>Front End Web Developer and Designer..... and a Food Blogger.</h2>
                    <p>My name is Raditya Amandra Iskandar or you can call me Andra. I am a web developer that is currently learning on how to become a full stack developer and Mobile App Developer (Team iOS yeahhhh..) </p>
                    <p>Apart from making website and simple mobile app, I am also a food and drink blogger, where I post some recipes, food review and some kitchen tools review.</p>
                    <p>My hobbies include taking pictures, playing with cat, cooking, trying new food, traveling and driving a manual transmission car (or as in North America calls it Stick Shift).</p>
                </div>

                <Footer />
            </Container>

            
        );
    }
}

export default About;
