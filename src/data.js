/* eslint-disable require-jsdoc */
const toDo = [
  {
    id: 1,
    title: 'Buy Groceries',
    time: '1pm',
  },
  {
    id: 2,
    title: 'Visit the Mall',
    time: '4pm',
  },
  {
    id: 3,
    title: 'Go on a date',
    time: '7pm',
  },
];


function getAllTodo() {
  return toDo;
}

function removeTodo(id) {
  // eslint-disable-next-line no-restricted-syntax
  for (const ToDo of toDo) {
    if (ToDo.id === id) {
      const index = toDo.indexOf(ToDo);
      if (index !== -1) toDo.splice(index, 1);
    }
  }
  return true;
}

function addTodo(obj) {
  const sortedTodo = toDo.sort((a, b) => (a.id - b.id));
  const todoID = sortedTodo[sortedTodo.length - 1].id + 1;
  obj.id = todoID;
  obj.contacted = false;
  toDo.push(obj);
  return true;
}


module.exports = {
  getAllTodo,
  removeTodo,
  addTodo
};
