import { TodoItem } from './todo';

let todoList: TodoItem[] = [];

const form = document.querySelector('#todo-form') as HTMLFormElement;
const input = document.querySelector('#todo-input') as HTMLInputElement;
const list = document.querySelector('#todo-list') as HTMLUListElement;

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const newTodo: TodoItem = {
    text: input.value,
    completed: false,
  };
  todoList.push(newTodo);
  input.value = '';
  renderTodoList();
});

export const renderTodoList = () => {
  list.innerHTML = '';
  todoList.forEach((todo, index) => {
    const item = document.createElement('li');
    item.innerText = todo.text;
    if (todo.completed) {
      item.style.textDecoration = 'line-through';
    }
    item.addEventListener('click', () => {
      todo.completed = !todo.completed;
      renderTodoList();
    });
    list.appendChild(item);
  });
};

