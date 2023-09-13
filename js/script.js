//console.log("hello world")//
//array//
let students=["ameni","ahmed","siwar"]
students.lengh
console.log(students.length)
//yezid f le5er tableau//
students.push('feten')
//pop tfasakh men e5er tableau//
students.pop();
//ki nekteb yzid fi awel tableau//
students.unshift('kmar')
//tfasakh ael element fel tableau//
students.shift()

let newstudents=['oumayma','eya']
let deletedstudents= students.splice(0,2,'ameni','kmar')
console.log(deletedstudents)