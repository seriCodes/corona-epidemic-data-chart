import React from 'react'
import {sortTable,getTableHeads,setEventClickOnTableHeads } from '../functions/sort-table';

export const HospitalStatusTable = () => {
    React.useEffect(()=>{
        console.log('window.innerWidth')
        console.log(window.innerWidth)

        let hospitalStatusContainer = document.querySelector('.table-container.hospital-status')

        if(window.innerWidth>1000) {
            let staffChart = document.querySelector('#staff-chart')

            // sicksDistributionChart
            let lastChart= staffChart.getBoundingClientRect();
            hospitalStatusContainer.style.height=lastChart.height+'px'
        }else{
            hospitalStatusContainer.style.height='auto'

        }
     
///////////////
let table= document.querySelector('.table-container .hospital-status-table')
let tableHeads = getTableHeads(table)
setEventClickOnTableHeads(tableHeads,sortTable, table)


    })
 
    return (
        <div class="container hospital-status-container">
        <div class="upper-container">
        <span class="chart-title sub-title">סטטוס בתי החולים  
        </span>
        </div>
        <div class="table-container hospital-status">
        <table class="hospital-status-table">
        <thead>
        <tr>
      <th>בית חולים</th> 
        <th>% תפוסה כללי</th>

        <th>% תפוסת קורונה</th>
        <th> צוות בבידוד</th>

      
        </tr>
        </thead>
        <tbody>   
        <tr>     
        <td>מאיר</td>
        <td>10</td>
        <td>לא ידוע</td>
        <td>93</td>     
        </tr> 
        <tr>
     
        <td>בילינסון</td>
        <td>30</td>
        <td>לא ידוע</td>
        <td>23</td>     
        </tr> 
        <tr>
     
        <td>רמב"ם</td>
        <td>1</td>
        <td>לא ידוע</td>
        <td>73</td>     
        </tr> 
        <tr>
     
        <td>מאיר</td>
        <td>10</td>
        <td>לא ידוע</td>
        <td>93</td>     
        </tr> 

        </tbody> 
        </table>
        </div>
        </div>
    )
}
