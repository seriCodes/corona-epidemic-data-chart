import React from 'react'
 import * as Drop from 'tether-drop';

export  function DropTether() {

    let test=(
        <span>sss</span>
    )
    var dropInstance
    window.addEventListener('load', (event) => {
          dropInstance = new Drop({
            target: document.querySelector('.drop-target'),
            // content: '<ComponenetTest></ComponenetTest>',
            // content: <span>sss</span>,
            // content: test,
            content: 'only text',
            classes: 'drop-theme-arrows',
             position:'bottom center',
            // position:'top left',

            // openOn: 'click',
            // closeOn: 'click',

            // openOn: 'always',
            constrainToWindow:true,
            classes:"red-drop",
       

          })
    

    });
      
    const toggleDrop=(a)=>{
        // alert(a)
        // dropInstance.toggle()
        dropInstance.isOpened()?dropInstance.close():dropInstance.open()

        // dropInstance.close()

            }
          return (
        <div onClick={()=>toggleDrop('sss')} class="graphs-container drop-target">
             
        </div>
    )
}


 
export const ComponenetTest = () => {
    return (
        <div>
        ComponenetTest
        </div>
    )
}
