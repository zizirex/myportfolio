import React, {Component} from 'react';
import { render } from 'react-dom'
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const FESkill = {
    chart: {
        type: 'bar'
    },
    xAxis: {
        categories: ['HTML5', 'CSS3', 'JavaScript ES6', 'React.JS','React Native', 'jQuery'],
        title: {
            text: null
        }
    },
    title: {
        text: 'Front-End Skill'
    },
    series: [{
        name: 'Front End Skill',
        data: [5,5,4,3,4]},//{
    //     name: 'CSS3',
    //     data: [5]
    // },{
    //     name: 'JavaScript ES6',
    //     data: [4]
    // },{
    //     name: 'React.JS',
    //     data: [4]
    // },{
    //     name: 'React Native',
    //     data: [3]
    // },{
    //     name: 'jQuery',
    //     data: [4]
    // }
]
};


const FECharts = () =>
            <div>
            <HighchartsReact highcharts={Highcharts}  options={FESkill}/>

            </div>;




export default FECharts;