/* eslint-disable jsx-a11y/anchor-has-content */
import React, {Component} from 'react';
import Footer from "./Footer"
import { Container, Button,} from 'reactstrap';
import { Paper } from '@material-ui/core';
import healthgram from './Healthgram.png'
import hourtech from './Hourtech.png'
import foodxdev from './Food XDev.png'



class Works extends Component {
    render() {
        return (
            <Container>
                
                <h1 style={{ margin : "20px"}}>Works</h1>
                <Container >
                <div>
                    <h2>Healthgram</h2>
                    <p> This is a web application that help people on making safe trip by checking local disease and air quality.</p>
                    <a href="https://healthgram.ca"><img src={healthgram} style={{border : "4px"}} className="thumbnail"/> </a> 
                </div>
                <div>
                    <h2>Food XDev</h2>
                    <p> This is my food and drink related blog.</p>
                    <a href="https://foodxdev.com"> <img src={foodxdev} style={{border : "4px"}} className="thumbnail"/></a>
                </div>
                <div>
                    <h2>XChange</h2>
                    <p> This is a mobile app platform for people who wants to sell their used games.</p>
                </div>
                <div>
                    <h2>HourTech</h2>
                    <p> This is a platform for people who have non-tech skill that need small tech related works done.</p>
                    <a href="https://hourtech.ca"> <img src={hourtech} style={{border : "4px"}} className="thumbnail"/></a>
                </div>
                </Container>
                <Footer />
            </Container>
        );
    }
}

export default Works;