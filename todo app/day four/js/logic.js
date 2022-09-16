function toggleDialog() {
  var dialog_bg = document.getElementById("dialog-bg");
  dialog_bg.classList.toggle("show");
}

function toggleEditDialog(task_id) {
  var dialog_bg = document.getElementById("edit-dialog-bg");

  if (task_id != undefined) {
    task = getTaskCopy(task_id);
    document.getElementById("edit_task_title").value = task.task_title;
    document.getElementById("edit_task_date").value = task.task_date;
    document.getElementById("edit_task_desc").value = task.task_desc;
    document.getElementById("current_task_id").value = task.task_id;
  }

  dialog_bg.classList.toggle("show");
}

var query_string = window.location.search;

var params = new URLSearchParams(query_string);

let username = params.get("username");
let password = params.get("userpassword");

auth_name.innerHTML = username;

function openDescription(ele) {
  // alert(ele);
  var root = ele.parentElement.parentElement.nextElementSibling;

  var allEle = document.getElementsByClassName("fold");

  for (let index = 0; index < allEle.length; index++) {
    const ele = allEle[index];
    ele.classList.remove("unfold");
  }
  root.classList.toggle("unfold");
}

document.getElementById("new_task_form").onsubmit = addNewTodo;

document.getElementById("edit_task_form").onsubmit = editTodo;

function editTodo(evt) {
  evt.preventDefault();
  task_id = document.getElementById("current_task_id").value;
  task = getTaskCopy(task_id);
  task.task_title = document.getElementById("edit_task_title").value;
  task.task_date = document.getElementById("edit_task_date").value;
  task.task_desc = document.getElementById("edit_task_desc").value;

  placeTodoBack(task);
  updateTaskDB();

  loadTodo();

  toggleEditDialog();
}

function addNewTodo(evt) {
  evt.preventDefault();

  // code to do adding task
  var task_title = document.getElementById("task_title").value;
  var task_date_a = document.getElementById("task_date").value;
  var task_desc = document.getElementById("task_desc").value;

  // task_date_a = "1/12/2006";

  var newTask = {
    task_id: new Date().getTime(),
    task_isCompleted: false,
    task_title: task_title,
    task_date: task_date_a,
    task_desc: task_desc,
    user_id: sessionStorage.getItem("current_user"),
  };

  addNewTask(newTask);

  loadTodo();

  toggleDialog();
}
