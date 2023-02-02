'use strict'
const form = document.querySelector('#newTaskForm');
const input = document.querySelector('#newTaskInput');
const submit = document.querySelector('#newTaskSubmit');
const read = document.querySelector('#readonly');
const listElement = document.querySelector('#tasks');

form.addEventListener('submit', (e) => {
    e.preventDefault()
    // console.log(input.value);
    const task = input.value;
    if (task === '') {
        alert('input field cannot be empty')
    } else{console.log('Success');}

    const taskElement = document.createElement('div') // Creating div
    taskElement.classList.add('task')  // Creating div with the class of task

    const taskContentElement = document.createElement('div')
    taskContentElement.classList.add('content')

    const taskInputElement = document.createElement('input')
    taskInputElement.classList.add('text')
    taskInputElement.type = 'text'
    taskInputElement.value = task
    taskInputElement.setAttribute('readonly', 'readonly')

    // Lets append input to the div of content using appendChild() method
    taskContentElement.appendChild(taskInputElement)

    const taskActionElement = document.createElement('div')
    taskActionElement.classList.add('action')

    const taskEditElement = document.createElement('button')
    taskEditElement.classList.add('edit')
    taskEditElement.innerText = 'Edit'
    
    const taskDeleteElement = document.createElement('button')
    taskDeleteElement.classList.add('delete')
    taskDeleteElement.innerText = 'Delete'

    // Append Elements -- appendChild()
    taskActionElement.appendChild(taskEditElement)
    taskActionElement.appendChild(taskDeleteElement)

    taskElement.appendChild(taskContentElement)
    taskElement.appendChild(taskActionElement)
    listElement.appendChild(taskElement)
    // input.value = ''



taskEditElement.addEventListener('click',()=>{

if (taskEditElement.innerText === 'Edit'){
    taskInputElement.removeAttribute('readonly')
    taskEditElement.innerText = 'save'
}else{
    taskInputElement.setAttribute('readonly','readonly')
    taskEditElement.innerText = 'edit'
}
})
taskDeleteElement.addEventListener('click',function () {
    listElement.removeChild(taskElement)
    
})
})