import React from 'react'


export const StatsSquare = (props) => {
    return (
        <div class="stats-square-container">

        <div class="title">
       {props.title}props.title
        </div>
        <div class="sum">
        {props.sum}props.sum
         </div>

         <div class="difference">
       
         <span class="amount">
         {props.amount}כמות ה

         </span>
      
          
         <span class="sub-text">
         &nbsp;
         {props.time} בזמן של

         </span>
         </div>
         <div class="bottom-element">
{props.bottomElement}  
         </div>


        </div>
    )
}
//     
