import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import Paper from '@material-ui/core/Paper';
import { Container, Button,} from 'reactstrap';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import FECharts from "./Charts/FECharts";
import BECharts from "./Charts/BECharts";
import APPCharts from "./Charts/APPCharts";
import ETCCharts from "./Charts/EtcCharts";
import Footer from "./Footer"
import Grid  from '@material-ui/core/Grid';
// import Container from '@material-ui/core/Container';

  
class Main extends Component {
    
    
    render() {
        
        
        return (
            <Container className='main'>
                <Paper  style={{margin : 20}}>
                    <Typography variant="h3" component="h3" style={{padding : 30}}> Skills </Typography>{/*}
                    <Typography variant="h3" component="h3"> Front-End </Typography>
                        <Button color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>Click Here</Button>
                        <Collapse isOpen={this.state.collapse}>
                            <FECharts/>
                        </Collapse>
                    <Typography variant="h3" component="h3"> Back-End </Typography>
                        <Button color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>Click Here</Button>
                        <Collapse isOpen={this.state.collapse}>
                            <BECharts/>
                        </Collapse>
                    <Typography variant="h3" component="h3"> Application </Typography>
                    <Button color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>Click Here</Button>
                    <Collapse isOpen={this.state.collapse}>
                        <APPCharts/>
                    </Collapse>
                    <Typography variant="h3" component="h3"> Other </Typography>
                    <Button color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>Click Here</Button>
                    <Collapse isOpen={this.state.collapse}>
                        <ETCCharts/>
                    </Collapse> */}
                    <ExpansionPanel>
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="frontend-content" id="frontend-header">
                            <Typography >Front End Skill</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Container>
                                <FECharts/>
                            </Container>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                    <ExpansionPanel>
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="backend-content" id="backend-header">
                            <Typography >Back End Skill</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Container>
                                <BECharts/>
                            </Container>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                    <ExpansionPanel>
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="application-content" id="application-header">
                            <Typography >Application</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Container>
                                <APPCharts/>
                            </Container>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                    <ExpansionPanel>
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="other-content" id="other-header">
                            <Typography >Other Skill</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Container>
                                <ETCCharts/>
                            </Container>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                    

                </Paper>
                <Footer />
            </Container>
        );
    }
}

export default Main;