console.log('i am working')
//m1//
//collection n est pas une tableau//
let htmlcollection=document.body.getElementsByTagName('p')
console.log(htmlcollection)
//rendre collection array//
let arrayFromHtmlCollection=Array.from(htmlcollection)

arrayFromHtmlCollection[0].innerText='hello world'

//m2//
document.body.getElementsByTagName('p')[0].innerText='ena text jdid'
document.body.getElementsByTagName('p')[0].style.color='pink'

let pragraphi=arrayFromHtmlCollection[0]
pragraphi.style.color='red'
pragraphi.style.backgroundColor='green'

//---------------------------------------------------------
let title=document.getElementById('title')
console.log(title)
title.innerText='Ena valeur jdida'
title.style.color='red'
//----------------------------------------------------------

let item=document.getElementsByClassName('item')
console.log('item')

item[0].innerText='ena num1'
item[1].innerText='ena num2'
item[2].innerText='ena num3'
//--------------genrale---------------

//let item2=document.querySelector('.item2')
//console.log(item2)
//let item2=document.querySelectorAll('.item')//
//console.log(item2)//


//let container=document.querySelectorAll('.container')//

//container.innerHTML+="<div style='color:red;'>item4</div>"//

//let items = document.querySelectorAll('.container .item')
// console.log(items[0].style.color='pink')
// items.forEach(function(element)
 //{  element.style.border='solid black 5px'
 //   element.style.fontWeight="800"
 //})


 //let items = document.querySelectorAll('.container .item')
//let container=document.querySelectorAll('.container')
//let element=document.createElement('div')
//console.log(element)
 //let text=document.createTextNode('item4')
 //element.appendChild(text)

//let newDiv=document.createElement('div')
//newDiv.innerHTML='<h1>item5</h1>'
//container.appendChild(newDiv)
//console.log(document.body.childNodes);
//-----------------------

let button=document.getElementById('btn')
console.log(button)
button.addEventListener('click',function(){
    //selecting the container
    let container=document.querySelectorAll('.container');
    console.log(container)
    //creating the div element
    let element=document.createElement('div');
    console.log(element)
    //adding the text to the div
    element.innerText=window.prompt('enter your text here');
    //appending the ne div to the container
    container.appendChild(element);
    console.log(conatiner)
})









