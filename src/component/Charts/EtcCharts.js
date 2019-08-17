import React, {Component} from 'react';
import { render } from 'react-dom'
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const EtcSkill = {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Other Skill'
    },
    xAxis: {
        
        title: {
            text: 'Other Development Skill'
        }
    },
    series: [{
        name: 'Amazon AWS',
        data: [5]
    },{
        name: 'Mac OS X',
        data: [5]
    },{
        name: 'UX Designer',
        data: [4]
    },{
        name: 'Quality Assurance',
        data: [4]
    },{
        name: 'Photography',
        data: [4]
    },]
};


const ETCCharts = () =>
            <div>
            <HighchartsReact highcharts={Highcharts}  options={EtcSkill}/>

            </div>;




export default ETCCharts;