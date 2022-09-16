var db = JSON.parse(localStorage.getItem("users")); // getting or retrieving the value of age

var todos_json = JSON.parse(localStorage.getItem("todos"));

let users;
if (db == null) {
  users = [];
} else {
  users = db;
}

let todos;
if (todos_json == null) {
  todos = [];
} else {
  todos = todos_json;
}

function shorterSorting() {
  todos.sort(function (a, b) {
    var prev = new Date(a.task_date);
    var next = new Date(b.task_date);
    if (prev.getTime() <= next.getTime()) {
      return -1;
    }
  });
}

function sortTodo() {
  var newList = [];
  var duplicateList = [];

  todos.forEach((todo) => {
    duplicateList.push(todo);
  });

  for (let index = 0; index < todos.length; index++) {
    var first_Check = duplicateList[0];

    duplicateList.forEach((d_todo) => {
      var nowDate = new Date(d_todo.task_date);
      first_Check_date = new Date(first_Check.task_date);

      if (first_Check_date.getTime() >= nowDate.getTime()) {
        first_Check = d_todo;
      }
    });

    newList.push(first_Check);

    duplicateList = duplicateList.filter((r_todo) => {
      if (r_todo.task_id != first_Check.task_id) {
        return r_todo;
      }
    });
  }

  todos = newList;
}

function checkAuth(user_name, user_password) {
  let hasFound = false;
  users.forEach((user) => {
    if (user.user_name == user_name && user.user_password == user_password) {
      sessionStorage.setItem("current_user", user.user_id);
      hasFound = true;
      return;
    }
  });
  return hasFound;
}

function addNewUser(user) {
  users.push(user);
  // storing to local storage
  var toString = JSON.stringify(users);
  localStorage.setItem("users", toString);
}

function getNumberOfUser() {
  return users.length;
}

function showUsers() {
  users.forEach((user) => {
    alert(user.user_name);
  });
}

function showTodos() {
  todos.forEach((todo) => {
    alert(todo.task_date);
  });
}

// list of todos

function updateTaskDB() {
  var toString = JSON.stringify(todos);
  localStorage.setItem("todos", toString);
}

function addNewTask(task) {
  todos.push(task);
  updateTaskDB();
}

function getNumberOfTodos() {
  return todos.length;
}

function deleteTask(task_id) {
  var yesNo = confirm("Are you sure you want to delete this task?");

  if (yesNo) {
    var newTodos = todos.filter((todo) => {
      if (todo.task_id != task_id) {
        return todo;
      }
    });
    todos = newTodos;
    updateTaskDB();
    loadTodo();
  }
}
function placeTodoBack(task) {
  var newCopy = [];

  todos.forEach((todo) => {
    if (todo.task_id == task.task_id) {
      newCopy.push(task);
    } else {
      newCopy.push(todo);
    }
  });

  todos = newCopy;
}

function getTaskCopy(task_id) {
  var task = null;

  todos.forEach((todo) => {
    if (todo.task_id == task_id) {
      task = {
        task_id: todo.task_id,
        task_isCompleted: todo.task_isCompleted,
        task_title: todo.task_title,
        task_date: todo.task_date,
        task_desc: todo.task_desc,
        user_id: todo.user_id,
      };
    }
  });

  return task;
}

function toggleCompleteTask(task_id) {
  var task = getTaskCopy(task_id);
  task.task_isCompleted = !task.task_isCompleted;
  placeTodoBack(task);
  updateTaskDB();
  loadTodo();
}
