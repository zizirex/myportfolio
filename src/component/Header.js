import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';
import Main from "./Main"
import Works from "./Works"
import Intro from "./Intro"
import About from "./About"
import FECharts from "./Charts/FECharts"

class Header extends Component {
    constructor(props) {
        super(props);
    
        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
          collapsed: true
        };
      }
    
      toggleNavbar() {
        this.setState({
          collapsed: !this.state.collapsed
        });
      }
    render() {
        return (
            <Router>
                <div>
                    <div>
                    <Navbar color="light" light expand="md" className="colorBG">
                        <NavbarBrand  className="text-light">Andra Iskandar</NavbarBrand>
                        <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                        <Collapse isOpen={!this.state.collapsed} navbar>
                            <Nav className="ml-auto" navbar>
                        <NavItem>
                                <NavLink ><Link to="/" className="text-light">Home</Link></NavLink>
                        </NavItem>
                        <NavItem>
                                <NavLink><Link to="/main/" className="text-light">Main</Link></NavLink>
                        </NavItem>
                        <NavItem>
                                <NavLink><Link to="/about/" className="text-light">About Me</Link></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink><Link to="/works/" className="text-light">Works</Link></NavLink>
                        </NavItem>
                                {/* <NavItem>
                            <NavLink><Link to="/charts/" className="text-light">Charts</Link></NavLink>
                        </NavItem> */}
                    </Nav>
                    </Collapse>
                    </Navbar>
                    </div>
                    <Route path="/" exact component={Intro} />
                    <Route path="/main/" component={Main} />
                    <Route path="/about/" component={About} />
                    <Route path="/works/" component={Works} />
                    <Route path="/charts/" component={FECharts} />
                </div>
            </Router>
        );
    }
}

export default Header;