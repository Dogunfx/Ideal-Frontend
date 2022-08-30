function toggleDialog() {
  var dialog_bg = document.getElementById("dialog-bg");
  dialog_bg.classList.toggle("show");
}

document.getElementById("login_form").onsubmit = checkDetails;

// creating a button element to add a user
var create_btn = document.createElement("button");
create_btn.innerHTML = "Yes";
// create_btn.type = "submit";
create_btn.classList.add("primary-button");
// button to add a new user code ends here

function checkDetails(evt) {
  let msg = document.getElementById("msg");
  let username = document.getElementById("username").value;
  let userpassword = document.getElementById("userpassword").value;
  var isValid = checkAuth(username, userpassword);
  if (!isValid) {
    msg.innerHTML = `Credentials Not correct, would you like to create a new profile`;
    msg.appendChild(create_btn);
    evt.preventDefault();
  }
}

create_btn.onclick = function () {
  let username = document.getElementById("username").value;
  let userpassword = document.getElementById("userpassword").value;

  var newUser = {
    user_name: username,
    user_password: userpassword,
    user_id: getNumberOfUser(),
  };

  addNewUser(newUser);
  // document.getElementById("login_form").dispatchEvent(new Event("onSubmit"));

  // document.getElementById("login_form;

  msg.innerHTML = "Account Created, Click continue to enter start";

  msg.className = "success";
};
