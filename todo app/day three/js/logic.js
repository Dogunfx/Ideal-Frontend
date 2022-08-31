var query_string = window.location.search;

var params = new URLSearchParams(query_string);

let username = params.get("username");
let password = params.get("userpassword");

auth_name.innerHTML = username;

var users_list = document.getElementById("users_list");

users.forEach((user) => {
  var li = document.createElement("li");
  li.innerHTML = ` (${user.user_id + 1}) ${user.user_name}`;
  users_list.appendChild(li);
});
