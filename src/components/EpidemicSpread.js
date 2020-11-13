import React from 'react'
import {sortTable,getTableHeads,setEventClickOnTableHeads } from '../functions/sort-table';
 
export const EpidemicSpread = () => {
    React.useEffect(()=>{ 
        let sicksDistributionContainer = document.querySelector('#sicksDistributionChart')

        // sicksDistributionChart
        let lastChart= sicksDistributionContainer.getBoundingClientRect();
 
        let epidemicSpreadContainer = document.querySelector('.table-container.epidemic-spread')
        console.log('epidemicSpreadContainer')
        console.log(epidemicSpreadContainer)

        epidemicSpreadContainer.style.height=lastChart.height+'px'
///////////////
let table= document.querySelector('.table-container .epidemic-spread-table')
let tableHeads = getTableHeads(table)
setEventClickOnTableHeads(tableHeads,sortTable, table)


    })
    return (
        <div class="container epidemic-spread-container">
        <div class="upper-container">
        <span class="chart-title sub-title">אזורי התפשטות  
        </span>
        </div>
        <div class="table-container epidemic-spread">
        <table class="epidemic-spread-table">
        <thead>
        <tr>
      <th>יישוב</th> 
        <th>מאומתים	</th>

        <th>חולים פעילים</th>
        <th>  חולים חדשים ב-7 ימים האחרונים  </th>

        <th>בדיקות ב-7 ימים האחרונים</th>
        <th> חולים פעילים ל- 10,000 נפש </th>

        </tr>
        </thead>
        <tbody>   
        <tr>
        <td>בד</td>
        <td>50</td>
        <td>10</td>
        <td>10</td>
        <td>10</td>
        <td>10</td>     
        </tr>

        <tr>
        <td>חיע</td>
        <td>50</td>
        <td>10</td>
        <td>10</td>
        <td>10</td>
        <td>10</td> 
        </tr>
        
        <tr>
        <td>בס</td>
        <td>50</td>
        <td>10</td>
        <td>10</td>
        <td>10</td>
        <td>10</td> 
        </tr>
        
        <tr>
        <td>חד</td>
        <td>50</td>
        <td>10</td>
        <td>10</td>
        <td>10</td>
        <td>10</td> 
        </tr>
        <tr>
        <td>אכ</td>
        <td>50</td>
        <td>10</td>
        <td>30</td>
        <td>50</td>
        <td>70</td> 
        </tr>
        <tr>
        <td>תח</td>
        <td>50</td>
        <td>30</td>
        <td>20</td>
        <td>10</td>
        <td>70</td> 
        </tr>
        <tr>
        <td>חא</td>
        <td>10</td>
        <td>10</td>
        <td>10</td>
        <td>40</td>
        <td>90</td> 
        </tr>
        <tr>
        <td>NY</td>
        <td>50</td>
        <td>10</td>
        <td>70</td>
        <td>10</td>
        <td>80</td> 
        </tr>
        <tr>
        <td>יח</td>
        <td>80</td>
        <td>20</td>
        <td>10</td>
        <td>20</td>
        <td>10</td> 
        </tr>
        <tr>
        <td>last</td>
        <td>50</td>
        <td>10</td>
        <td>30</td>
        <td>50</td>
        <td>70</td> 
        </tr>
        </tbody> 
        </table>
        </div>
        </div>
    )
}
