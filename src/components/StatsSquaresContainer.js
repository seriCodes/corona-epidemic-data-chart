import React from 'react'
import {StatsSquare} from './StatsSquare';
import {StatsBottomElement} from './StatsBottomElement'
import {DailyTrend} from './DailyTrend'

export const StatsSquaresContainer = () => {
let firstStatsBottomElement=(<StatsBottomElement subText1={'בינוני'} amount1={'666'} subText2={'קשה'} amount2={'777'}>  </StatsBottomElement>)
let xAxisData=['1.1','1.2','1.3','1.4','1.5','1.6'];
let RespiratorsChart={
    xAxisData,
    title:"מונשמים",
    yAxisTitle:"כמות מונשמים",
seriesData:[0, 10, 20, 100, 240, 200],
minInterval:113,
seriesName:'מונשמים',

}
let secondStatsBottomElement=(
    <StatsBottomElement subText1={'בינוני'} amount1={'666'} subText2={'קשה'} amount2={'777'}  subText3={'קשה'} amount3={'777'}> </StatsBottomElement>
    )

    let firstSquare=( <StatsSquare bottomElement={firstStatsBottomElement}></StatsSquare>
        )
        let secondSquare=( <StatsSquare bottomElement={secondStatsBottomElement}></StatsSquare>
            )
            let thirdSquare=( <StatsSquare bottomElement={<DailyTrend data={RespiratorsChart}> </DailyTrend>}></StatsSquare>
                )
                let fourthSquare=( <StatsSquare bottomElement={<DailyTrend data={RespiratorsChart}> </DailyTrend>}></StatsSquare>
                    )
 let fithSquare=( <StatsSquare bottomElement={<DailyTrend data={RespiratorsChart}> </DailyTrend>}></StatsSquare>
                        )
 let sixthSquare=( <StatsSquare bottomElement={<DailyTrend data={RespiratorsChart}> </DailyTrend>}></StatsSquare> )

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
