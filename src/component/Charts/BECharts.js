import React, {Component} from 'react';
import { render } from 'react-dom'
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';


const BESkill = {
    chart: {
        type: 'bar'
    },
    xAxis: {
        
        title: {
            text: 'Back End Development Skill'
        }
    },
    title: {
        text: 'Back-End Skill'
    },
    series: [{
        name: 'PHP',
        data: [3]
    },{
        name: 'Node.JS',
        data: [5]
    },{
        name: 'Express',
        data: [4]
    },{
        name: 'Bash',
        data: [2]
    },{
        name: 'Python',
        data: [2]
    }]
};
const Charts = () =>
            <div>
                <HighchartsReact highcharts={Highcharts}  options={BESkill}/>
            </div>;




export default Charts;