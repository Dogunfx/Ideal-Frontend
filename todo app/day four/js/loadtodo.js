loadTodo();

function loadTodo() {
  shorterSorting();

  $("#un-completed-todo").empty();
  $("#completed-todo").empty();

  todos.forEach((todo) => {
    // var newDate = new Date(todo.task_date).getFullYear();
    var newDate = new Date(todo.task_date).toUTCString().substring(0, 16);

    // alert(todo.task_date);

    if (todo.user_id == sessionStorage.getItem("current_user")) {
      var ele = `
    <li>
              <div class="list-head">
                <div class="list_left">
                  <p class="heading ${
                    todo.task_isCompleted ? "success" : "not-success"
                  }" >${todo.task_title}</p>
                  <p class="sub-heading">${newDate}</p>
                </div>
                <div class="list_right">
                  <button onClick='toggleEditDialog(${todo.task_id})'>
                    <i class="fa fa-pencil"></i>
                  </button>
                  <button onClick='toggleCompleteTask(${todo.task_id})'>
                    <i class="fa fa-check" ></i>
                  </button>
                  <button onClick = deleteTask(${todo.task_id})>
                    <i class="fa fa-trash"></i>
                  </button>
                  <button class="btn-view" onClick='openDescription(this)'>
                    <i class="fa fa-eye"></i>
                  </button>
                </div>
              </div>
              <div class="list-desc fold animate__animated">
                <p>
                  ${todo.task_desc}
                </p>
              </div>
            </li> 
    `;

      if (todo.task_isCompleted) {
        $("#completed-todo").append(ele);
      } else {
        $("#un-completed-todo").append(ele);
      }
    }
  });
}
