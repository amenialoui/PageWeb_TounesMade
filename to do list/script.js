let form=document.getElementById('form')
form.addEventListener('submit',function(event){
    event.preventDefault();
    console.log('form submitted')
    let input = document.getElementById("inputField")
    console.log(input)
    let todos=document.getElementById('todos')
    console.log(todos)
    let todo=document.createElement('div')
    
    todo.innerText=input.value

    todos.appendChild(todo)
    todo.classList.add('imaginaryclass')
    let deletebtn=document.createElement('button')
    deletebtn.innerText='x'
    todo.appendChild(deletebtn)
    deletebtn.addEventListener('click',function(){
        todo.remove()
    })
})
