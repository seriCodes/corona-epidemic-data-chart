import React from 'react'
import {StatsSquare} from './StatsSquare';
import {StatsBottomElement} from './StatsBottomElement'
import {DailyTrend} from './DailyTrend'

export const StatsSquaresContainer = () => {
let firstStatsBottomElement=(<StatsBottomElement subText1={'בינוני'} amount1={'666'} subText2={'קשה'} amount2={'777'}>  </StatsBottomElement>)
let xAxisData=['1.1','1.2','1.3','1.4','1.5','1.6'];
let respiratorsChart={
    xAxisData,
    title:"מונשמים",
    yAxisTitle:"כמות מונשמים",
seriesData:[0, 10, 20, 100, 240, 200],
minInterval:113,
seriesName:'מונשמים',
}
let severeChart={
    xAxisData,
    title:"חולים קשה",
    yAxisTitle:"כמות חולים קשה",
seriesData:[0, 101, 130, 100, 140, 200],
minInterval:113,
seriesName:'חולים קשה',

}
let passedAwayChart={
    xAxisData,
    title:"נפטרים ",
    yAxisTitle:"כמות נפטרים",
seriesData:[0, 10, 3, 5, 6,4,4,5,6,6,2,3,4,4,5,6,5,4,5,2,1,4,],
minInterval:1,
seriesName:'נפטרים ',
}
let sicknesTestAmountChart={
    xAxisData,
    title:"בדיקות",
    yAxisTitle:"כמות בדיקות יומיות",
    seriesData:[220, 1010, 1030, 10220, 14080, 20000],
    minInterval:19880,
seriesName:'בדיקות יומיות',
}

let secondStatsBottomElement=(
    <StatsBottomElement subText1={'בית/קהילה'} amount1={'6646'} subText2={'מלון'} amount2={'777'}  subText3={'בי"ח'} amount3={'325'}> </StatsBottomElement>
    )

 let firstSquare=( <StatsSquare title={"מאומתים חדשים לאתמול"} sum={"555"} amountFromMidNight={+44} timePeriod={"מחצות"} total={'300,004'}
      ></StatsSquare>
        )
        let secondSquare=( <StatsSquare title={"חולים פעילים"} timePeriod={"מחצות"} sum={"3000"} amountFromMidNight={-49} total={'300,004'} bottomElement={secondStatsBottomElement}></StatsSquare>
            )
    let thirdSquare=( <StatsSquare
        title={"חולים קשה"} sum={190}  timePeriod={"מחצות"} amountFromMidNight={+2} 
          bottomElement={<DailyTrend data={severeChart}> </DailyTrend>}></StatsSquare>
                )
                let fourthSquare=( <StatsSquare
                    title={"מונשמים"} sum={130}  timePeriod={"מחצות"} amountFromMidNight={+6} 
                    bottomElement={<DailyTrend data={respiratorsChart}> </DailyTrend>}></StatsSquare>
                    )
 let fithSquare=( <StatsSquare
    title={"נפטרים מצטבר"} sum={2730}  
    bottomElement={<DailyTrend data={passedAwayChart}> </DailyTrend>}></StatsSquare>
                        )
 let sixthSquare=( <StatsSquare 
    title={"אחוז בדיקות חיוביות אתמול"} sum={'2.6%'} timePeriod={"בדיקות אתמול"} amountFromMidNight={+6000} sum={130} bottomElement={<DailyTrend data={sicknesTestAmountChart}> </DailyTrend>}></StatsSquare> )

 return (
        <div class="stats-squares-container">
        <div class="big-screen row">

        {firstSquare}

        {secondSquare}
        {thirdSquare}
        {fourthSquare}
        {fithSquare}
        {sixthSquare}

        </div>
        <div class="medium-screen">
        
        <div class="row">
        {firstSquare}

        {secondSquare}
        {thirdSquare}

</div>
<div class="row">
{fourthSquare}
{fithSquare}
{sixthSquare}

</div>

        </div>

        <div class="small-screen">
        <div class="row">
        {firstSquare}

        {secondSquare}
        </div>
        <div class="row">
        {thirdSquare}
        {fourthSquare} 
        </div>
        
     
        <div class="row">
        {fithSquare}
        {sixthSquare} 
        </div>
        
        
        
        
        </div>


        </div> 
    )
}
