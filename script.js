import checkComplete from './components/checkComplete.js';
import deleteIcon from './components/deleteIcon.js';

const btn = document.querySelector('[data-form-btn]');


const addTask = (evento) => {
    const list = document.querySelector('[data-list]');
    const task = createTask(evento);
    list.appendChild(task);
    return task;

}

const createTask = (evento) => {
  evento.preventDefault();
  const input = document.querySelector('[data-form-input]');
  const calendar = document.querySelector('[data-form-date]');
  const date = calendar.value;
  const dateFormat = moment(date).format('DD/MM/YYYY');
  const value = input.value;
  
  const task = document.createElement('li');
  task.classList.add('card');
  input.value = '';
  
  const taskContent = document.createElement('div');

  const taskObj = {
    value,
    dateFormat
  };

  localStorage.setItem('tasks', JSON.stringify(taskObj));



  const titleTask = document.createElement('span');
  titleTask.classList.add('task');
  titleTask.innerText = value;
  
  taskContent.appendChild(checkComplete());
  taskContent.appendChild(titleTask);
  const dateElement = document.createElement('span');
  dateElement.innerHTML = dateFormat;
  
  task.appendChild(taskContent);
  task.appendChild(dateElement);
  task.appendChild(deleteIcon());
  
  return task;
 
};

btn.addEventListener('click', addTask);

