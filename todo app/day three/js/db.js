var db = JSON.parse(localStorage.getItem("users")); // getting or retrieving the value of age

let users;
if (db == null) {
  users = [];
} else {
  users = db;
}

function checkAuth(user_name, user_password) {
  let hasFound = false;

  users.forEach((user) => {
    if (user.user_name == user_name && user.user_password == user_password) {
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
