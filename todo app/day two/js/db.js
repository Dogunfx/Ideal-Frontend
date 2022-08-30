let users = [
  {
    user_name: "blessing",
    user_id: 1,
    user_password: "65413",
    email: "blessing@gmail.com",
  },
  {
    user_name: "emma",
    user_id: 2,
    user_password: "09865@",
  },
  {
    user_password: "12345",
    user_id: 3,
    user_name: "dogunfx",
  },
];

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
}

function getNumberOfUser() {
  return users.length;
}

function showUsers() {
  users.forEach((user) => {
    alert(user.user_name);
  });
}
