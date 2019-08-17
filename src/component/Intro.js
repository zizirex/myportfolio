import React, {Component} from 'react';
import { Jumbotron, Container } from 'reactstrap';
import Footer from './Footer'
import bgImage from '../vancouverPier.jpg'


class Intro extends Component {
    render() {
        return (
            <div>

                    <Jumbotron fluid style={{ backgroundImage: `linear-gradient( rgba(0, 0, 70, 0.45),rgba(0, 0, 70, 0.45)),url(${bgImage})`, backgroundSize: 'cover', height: '80vh'  }}>
                        <Container fluid className="introTitle">
                            <h1 className="display-3">Welcome to my website!!! </h1>
                            <h2 className="display-4">My name is Andra Iskandar </h2>
                            <h3 className="display-5">and I am a Front-End Web Designer and Developer and a Mobile App Developer.</h3>
                        </Container>
                    </Jumbotron>
                    <Footer/>
            </div>
        );
    }
}

export default Intro;