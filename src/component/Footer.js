import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../node_modules/font-awesome/css/font-awesome.min.css'
import Grid from '@material-ui/core/Grid';

class Footer extends Component {
    render() {
        return (
            <footer className="page-footer font-small py-3 px-3">
            <hr></hr>
            <Grid direction="row"
                justify="center"
                    alignItems="center" className='footerContainer'>
                
                    <ul className="list-unstyled list-inline linkfooter ">
                        <li className="list-inline-item">
                            <h3>
                            <a className="btn-floating btn-fb mx-3" href="https://www.linkedin.com/in/andraiskndr">
                                <i className="fa fa-linkedin"></i>
                            </a>
                            </h3>
                        </li>
                        <li className="list-inline-item">
                            <h3>
                            <a className="btn-floating btn-fb mx-3" href="https://www.github.com/zizirex">
                                <i className="fa fa-github-square"></i>
                            </a>
                        </h3>
                        </li>
                        <li className="list-inline-item">
                            <h3>
                            <a className="btn-floating btn-fb mx-3" href="https://www.instagram.com/tiny_zizi">
                            <i className="fa fa-instagram"></i>
                            </a>
                        </h3>
                        </li>
                    </ul>
                
            </Grid>
            </footer>
        );
    }
}

export default Footer;