import React, {Component} from 'react';
import { render } from 'react-dom'
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const AppSkill = {
    chart: {
        type: 'bar'
    },
    xAxis: {
        
        title: {
            text: 'Application and Tools Skill'
        }
    },
    title: {
        text: 'Application Skill'
    },
    series: [{
        name: 'Adobe Photoshop',
        data: [5]
    },{
        name: 'Adobe Illustrator',
        data: [5]
    },{
        name: 'Adobe Lightroom',
        data: [4]
    },{
        name: 'Wordpress',
        data: [4]
    },{
        name: 'MailChimp',
        data: [3]
    },{
        name: 'Postman',
        data: [4]
    },{
        name: 'Xcode',
        data: [4]
    },{
        name: 'Docker',
        data: [4]
    },{
        name: 'GitHub',
        data: [4]
    }]
};


const APPCharts = () =>
            <div>
            <HighchartsReact highcharts={Highcharts}  options={AppSkill}/>

            </div>;




export default APPCharts;