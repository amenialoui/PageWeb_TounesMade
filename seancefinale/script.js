let age=prompt('enter your age')
// methode1//
age>=18 && age<50 ? console.log('you can drive'):age>=50? console.log("get a new licence"):console.log('you can t drive yet');
//methode2//
if (age>=18 && age<50){
    console.log('you can drive')
}
else if (age>=50){
    console.log("get a new licence")
}
else{
console.log('you can t drive yet')
}



let projects={
"projects 1":["task1","task2","task3"]
}
localStorage.setItem("projects", JSON.stringify(projects))
let projFromlocalStorage=JSON.parse(localStorage.getItem("projects"))
projFromlocalStorage.projects1.



