// export function toggleDisplayInTime(id,value, addOrRemove){
//     console.log(value)
//     let elem= document.getElementById(id)
//     setTimeout(()=>{
//         addOrRemove(`${value}`)
//         console.log('setTimeout')
// }
// ,1700)
// }
export function toggleEndClass(id,className){
    console.log(id)
    console.log(className)

    let elem= document.getElementById(id)
    if(elem.classList.contains(className)){

        elem.classList.remove(className)

        setTimeout(()=>{
            elem.classList.add(`display-none`)
            console.log('add')
    }
    ,100)
  
    setTimeout(()=>{
        elem.classList.remove(`display-flex`)
        console.log('remove')
}
,500) 
    }else{

        elem.classList.add("display-flex")
        setTimeout(()=>{elem.classList.add(className)},10)

    }
    // elem.classList.toggle(className)

  
}
export function toggleAppContainerWidth(className){
    let appContainer= document.getElementsByClassName('app-container')[0]
    appContainer.classList.toggle(className)

}
export function toggleDisplayNone(id){
    let elem= document.getElementById(id)
    elem.classList.toggle(`display-none`)

}
export function addDisplayNoneToClassElements(className){
    let elements= document.getElementsByClassName(className)
for (const elem of elements) {
    elem.classList.add(`display-none`)
}
}

export function toggleAnimateArrowClass(id){
    let arrowContainer=document.getElementById(id)
    arrowContainer.classList.toggle('arrow-animation')

}

