import React, {useState} from 'react';
import {Button} from './common/Button'
import {v1 as uuidv1} from "uuid";
import {toggleDisplayNone,addDisplayNoneToClassElements ,toggleAnimateArrowClass} from '../functions/reveal-elemnts';

let fontFamily= "Open Sans Hebrew";
var echarts = require('echarts')

// var Chart = require('chart.js');

let dataAccumulatedVerified=[0,73800,80000,85000,90000,90200,95000,100000,150000,200000,]
let dataNewRecovered=[0,10000,30400,50100,85000,100200,103000,135210,146909,170000,];
let dataNewVerified=[555,1000,2400,2100,1500,1200,2000,5521,7699,9000,];

var chart

export const EpidemicChart = () => {

let backgroundColorStopOne= "rgb(0,206,209)";
let backgroundColorStopTwo='rgba(360, 360, 360, 1)';



    let firstData={
        timePeriod:'all-data',
        typeNewVerified:'bar',
        typeNewRecovery:'line',
        typeAccumulatedVerified:'line',
        defaultChart:'line',
        recoverdTitle:"מצטבר",
        recoveredAxis:0,
        recoveredBackground:"transparent",
        xAxisData: ['January', 'February', 'March', 'April', 'May', 'June', 'July','August','September','October'], 
        ////// add to seData
        dataAccumulatedVerified,
        dataNewRecovered,
        dataNewVerified,
        newPatientsYaxisMax:12000,
        minRightYAxis:0,
        stepSizeRightYAxis: 2400, 
        maxLeftYAxis:369000,
        minLeftYAxis:0,
        intervalAccumulatedYaxis: 75000, 
        intervalNewYaxis: 2400, 

    }
const [data,setData]= useState(firstData)
console.log('data-state')

console.log(data)

    React.useEffect(()=>{
 
        var myChart= echarts.init(document.getElementById('epidemicChart'));
        window.addEventListener('resize', ()=>{
            myChart.resize(); 
       });
   
       let options= { 
        legend: { 
            align :'right',
            // type: "scroll"
            right :15,
            selectedMode :false,
            textStyle:{
                fontFamily,
                padding:[0,-8,0,10]
            },
            icon:'circle',

          },

        tooltip: {
            trigger: 'axis',
            formatter: function(params, ticket, callback) {
                console.log('params epi')

                // console.log(params)
                // console.log('ticket')
                // console.log(ticket)
                // console.log('callback')
                // console.log(callback)

                var res=''
                 for (var i = 0, l = params.length; i < l; i++) {
                    console.log(params[i]['color'])

                    res +=`<span style="color:${params[i]['color']}">`+params[i].value  + ' ' +params[i].seriesName+'<br/> </span> ' ;
                }
                setTimeout(function() { 
                  callback(ticket, res); 
                }, 100)
                return 'loading';
            },
        axisPointer: {
                type: 'cross'
            },
            backgroundColor: 'white',            
            textStyle: {
                color: 'black',
                fontWeight:'bolder',
                fontFamily:fontFamily,
                
            },
        },
        axisPointer: {
            link: {xAxisIndex: 'all'},
            label: {
                backgroundColor: 'white',
                color:'black',
            },
        },
         xAxis: {
            type: 'category',
            data: data.xAxisData,
            name: "תאריך הבדיקה",
            nameLocation :'middle',
            axisTick: 
            {
                show: false,
            },
            nameTextStyle: {
                fontFamily: fontFamily,
                verticalAlign: "top",
                 padding: [17, 4, 3, 4],
                
            },
            axisLine:{
                onZero:true,
                onZeroAxisIndex:0,
                onZeroAxisIndex:1,
        },
         },
        yAxis:[
         {
 
            scale:true,
            type: 'value',
            scale: true,
            interval:75000,
            max:375000,
            min:0,//*for forcing the min label to display
             name: 'מספר מקרים מצטבר',
            nameLocation :'middle',
            nameTextStyle: {
                fontFamily: fontFamily,
                verticalAlign: "bottom",
                // lineHeight: 38,
                color:"",
                padding: [0, 0, 44, 0],
      },
            axisLine:{
                show:false,
            },
            axisTick:{
                show:false,

            },
            axisLabel:{
                color:'#00FFFF',
                showMinLabel:true,//*
            },
            splitLine:{
                // show:false,
                //  interval:'4',
            },
        },
        {
            splitLine:{
                // show:false,

                // interval:5,
           },
            type: 'value',
            scale: true,
            interval:data.intervalNewYaxis,
            max:data.newPatientsYaxisMax,
             name: 'מספר מקרים חדשים',
            // nameLocation :'end',
            // nameLocation :'start',
            nameLocation :'middle',
            // 

            nameTextStyle: {
                fontFamily: fontFamily,
                // verticalAlign: "bottom",
                verticalAlign:'top',
                // verticalAlign:'middle',
                // lineHeight: 28,
                padding: [44, 0, 0, 0],
            },
            axisLine:{
                show:false,
            },
            axisTick:{
                show:false,
            },
            axisLabel:{
                color:'rgb(53, 106, 69)',
            }
        },
            ],
            series: [
                { 
                    symbolSize:10,
                    symbol: 'circle',

            name: 'מאומתים מצטבר',
            data: data.dataAccumulatedVerified.map(function (item,i) {
                let dataObj={
                    value: item,
                }; 
                return  dataObj 
              }), 
            type: 'line',
            itemStyle:{
                color:'#00FFFF',
            },
            label:{
                // show:true,
                color:'',
            },
            areaStyle:{
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0, color: 'rgb(0,206,209)' // color at 0% position
                    }, {
                        offset: 1, color:'rgba(360, 360, 360, 1)' // color at 100% position
                    }],
                    global: false // false by default
                }
            },
        },
    {
        name: `מאומתים חדשים`,
  
        yAxisIndex: 1,
        itemStyle:{
            normal: {
                barBorderRadius: [15, 15, 0, 0] ,
                color:'rgb(53, 106, 69)',         
               },
        }, 
        data: data.dataNewVerified.map(function (item,i) {
            console.log('item  data.dataNewVerified')

                console.log(item)
            let dataObj={
                value: item,
            }; 
            return  dataObj 
          }),
          type: 'bar',
          barWidth:'10',

    },
    /////////
    {
        symbolSize:10, 
        symbol: 'circle',
        type: data.typeNewRecovery,
        barWidth:'10',
        name: `מחלימים ${data.typeNewRecovery=="bar"?'חדשים':'מצטבר'}`,
        itemStyle:{
            normal: {
                barBorderRadius: [15, 15, 0, 0] ,
 
            color:'gray',
            },
        },
        yAxisIndex:data.recoveredAxis,

        data: data.dataNewRecovered.map(function (item,i) {
            let dataObj={
                value: item,
            }; 
            return  dataObj 
          }),

    },
],
        grid:{
            height:"30%",
            width:'60%',
            right:0,
            
        },
        
};
myChart.setOption({ 
    baseOption: { 
        ...options,
    },
    media: [
        {
            query: {
                minWidth:300,
            }, 
            option: {   
                ...options,
                // backgroundColor: 'red',

                grid:{
                    height:"50%",
                    width:'57%',
                    right:'58',
                    },
               },
            },
        {
        query: {
            minWidth:500,
        }, 
        option: {   
            ...options,
            // backgroundColor: 'blue',

            grid:{
                height:"50%",
                width:'67%',
                right:'90',
                },
        },
        },
        {
            query: {
                minWidth:600,
            }, 
            option: {   
                ...options,
                // backgroundColor: 'green',
                grid:{
                    height:"50%",
                    width:'70%',
                    right:'90',
                    },
            },
            },
        {
            query: {
                minWidth:700,
            }, 
            option: {   
                // backgroundColor: 'orange',
                ...options,
                grid:[{
                    height:"50%",
                    width:'72%',
                    right:'90',
                    },
            ],
            },
            },

        { 
            option: { 
                // backgroundColor: 'purple',

              grid:[{
                height:"50%",
                width:'100%',
                right:'20',
            },
        ],
          }
      }
    ],

})
  
})
    const changeDataPeriod=(e)=>{
        //  console.log(e.value)

        //  alert(e.value)
        // switch(e.target.value){
            switch(e){
    case 'all-data':
                // 
                setData({
                    timePeriod:'all-data',

                    newPatientsYaxisMax:12000,
                    typeNewVerified:'bar',
                    typeNewRecovery:'line',
               typeAccumulatedVerified:'line',
               recoverdTitle:"מצטבר",
               recoveredAxis:0,
                    barPercentage:0.23,
                recoveredBackground:"transparent",
                xLables: ['january', 'February', 'March', 'April', 'May', 'June', 'July','August','September','October'],
                dataAccumulatedVerified:[0,73800,80000,85000,90000,90200,95000,100000,150000,200000,],
                dataNewRecovered,
                dataNewVerified:[555,1000,2400,2100,1500,1200,2000,5521,7699,9000,],
                xAxisData: firstData.xAxisData,
                intervalNewYaxis:2400,
            })
                 break;
    case 'last-week':
                // 
                setData({
                    timePeriod:'last-week',

                    newPatientsYaxisMax:1100,
                    intervalNewYaxis:220,
                    typeNewVerified:'bar',
                    typeNewRecovery:'bar',
                    typeAccumulatedVerified:'line',
                    recoverdTitle:"חדשים",
                    recoveredAxis:1,

                    barPercentage:0.23,
                    recoveredBackground:"gray",
                    xLables: ['1', '2', '3', '4', '5', '6', '7',],

                    dataAccumulatedVerified:[73800,90000,90200,95000,177000,190000,200001],
                    dataNewRecovered:[0,550,750,100,700,120,200,],
                    dataNewVerified:[555,665,240,400,700,707,203,],
                    
                    maxRightYAxis:1200,
                    minRightYAxis:0,
                    stepSizeRightYAxis: 240,
            
                    maxLeftYAxis:369000,
                    minLeftYAxis:0,
                    stepSizeLeftYAxis: 73800,
                    xAxisData:['1.1','2.1','3.1','4.1','5.1','6.1','7.1'],
                })
                console.log('last-week')

                break;
    case 'last-two-weeks':
        setData({
            timePeriod:'last-two-weeks',

            newPatientsYaxisMax:1200,

            intervalNewYaxis:240,

            typeNewVerified:'bar',
            typeNewRecovery:'bar',
            typeAccumulatedVerified:'line',
            recoverdTitle:"חדשים",
            recoveredAxis:1,
            recoveredBackground:"gray",

            barPercentage:0.23,
            xLables: ['1', '2', '3', '4', '5', '6', '7','8','9', '10','11','12', '13','14'],

            dataAccumulatedVerified:[59800,65000,70000,73000,73600,73800,80000,85000,90000,90200,95000,100000,150000,150001],
            dataNewRecovered:[160, 550,750,100,300,105,0,550,750,100,700,120,200,],

            dataNewVerified:[555,665,240,400,700,707,203,555,665,240,400,700,707,203,],
            
            maxRightYAxis:1900,
            minRightYAxis:0,
            stepSizeRightYAxis: 380,

            maxLeftYAxis:369000,
            minLeftYAxis:0,
            stepSizeLeftYAxis: 73800,
            xAxisData:['1.1','2.1','3.1','4.1','5.1','6.1','7.1','8.1','9.1','10.1','11.1','12.1','13.1','14.1'],
        })
        // console.log('last-two-weeks')

        break;
    case 'last-month':
        setData({
            timePeriod:'last-month',

            newPatientsYaxisMax:4700,

            intervalNewYaxis:940,

            typeNewVerified:'bar',
            typeNewRecovery:'bar',
            typeAccumulatedVerified:'line',
            recoverdTitle:"חדשים",
            recoveredAxis:1,
            recoveredBackground:"gray",
            xLables: ['1', '2', '3', '4', '5', '6', '7','8','9', '10','11','12', '13','14','15', '16', '17', '18', '19', '20', '21','22','23', '24','25','26', '27','28'],

            dataAccumulatedVerified:[59800,65000,70000,73000,73600,73800,80000,85000,90000,90200,95000,100000,150000,150001,160001,165501,171501,179501,182501,182901,183101,183901,184101,187101,223101,263101,293101,303101],
            dataNewRecovered:[1600, 5500,7500,1000,3000,1005,0,5500,7500,1000,7000,1200,2000,1600, 5500,7500,1000,3000,1005,0,5500,7500,1000,7000,1200,2000,1200,2000],

 dataNewVerified:[5550,6650,2400,4000,7000,7007,2003,5505,6065,2400,4000,7000,7007,2003,5550,6650,2400,4000,7000,7007,2003,5505,6065,2400,4000,7000,7007,2003,],
            
            maxRightYAxis:9700,
            minRightYAxis:0,
            stepSizeRightYAxis: 1940,

            maxLeftYAxis:370000,
            minLeftYAxis:0,
            stepSizeLeftYAxis: 74000,

            xAxisData:['1.1','2.1','3.1','4.1','5.1','6.1','7.1','8.1','9.1','10.1','11.1','12.1','13.1','14.1','15.1','16.1','17.1','18.1','19.1','20.1','21.1','22.1','23.1','24.1','25.1','26.1','27.1','28.1'],
        
        })
        console.log('last-month')

        break;

    default:
        alert('cant be here')
        }
        
        }
 let arrowId=uuidv1()
 let optionsContainerId=uuidv1()

     return (
        <div class="container epidemic-container">
        <div class="upper-container">
        <span class="chart-title sub-title">עקומה אפידמית  
        </span> 
      
        <div class='options-button-container'>
        <Button callBack={(e)=>{
            // let arrowContainer=document.getElementById(arrowId)
            toggleAnimateArrowClass(arrowId)
            let elem= document.getElementById(optionsContainerId)
            console.log(elem.classList.contains(`display-none`))
            if(!elem.classList.contains(`display-none`)){
             elem.classList.add(`display-none`)

             return
            } 
            addDisplayNoneToClassElements('options-container')
 
            elem.classList.remove(`display-none`)
        
// 
        }} class1='selector-button-container prevent-propagation'>

        <span class='selector-button-text'>
        {
data.timePeriod=='all-data'?"עד עכשיו":data.timePeriod=='last-week'?"שבוע אחרון":data.timePeriod=='last-two-weeks'?"שבועיים אחרונים":data.timePeriod=='last-month'?"חודש אחרון":"error"
                      
           }
        </span> 

        <div id={arrowId} class=' selector-button-icon'>
        &#8744;
        </div>

        </Button>

        
        <div id={optionsContainerId} class='options-container display-none'>
        <Button callBack={()=>{
            addDisplayNoneToClassElements('options-container')
            toggleAnimateArrowClass(arrowId)

            changeDataPeriod("all-data")
    }}  value={"all-data"}>עד עכשיו
        </Button>
        <Button callBack={()=>{
            addDisplayNoneToClassElements('options-container')
            toggleAnimateArrowClass(arrowId)

            changeDataPeriod("last-week")}} value={"last-week"}>שבוע אחרון
        </Button>
        <Button callBack={()=>{
            addDisplayNoneToClassElements('options-container')
            toggleAnimateArrowClass(arrowId)

            changeDataPeriod("last-two-weeks")}}  value={"last-two-weeks"}>שבועיים אחרונים
        </Button>
        <Button callBack={()=>{
            addDisplayNoneToClassElements('options-container')
            toggleAnimateArrowClass(arrowId)

            changeDataPeriod("last-month")}} 
            value={"last-month"}>חודש אחרון
        </Button>
        </div>
     
        </div>
      
        </div>
        <div class="middle-elenet">
        
        <span class="text"> 
        
        {[<i class="fa fa-info-circle" aria-hidden="true"></i>, `הנתונים אינם מספר הנדבקים היום הינו כפול מהמספר לפני 47 ימים
        `]}</span>
        </div>

        <div id="epidemicChart" class="container epidemic-chart-container">  
        </div>
        </div>

    )
}
