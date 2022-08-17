function toggleDialog() {
  var dialog_bg = document.getElementById("dialog-bg");
  dialog_bg.classList.toggle("show");
}

document.getElementById("login_form").onsubmit = checkdetails;

function checkdetails(evt) {
  let username = document.getElementById("username").value;
  let userpassword = document.getElementById("userpassword").value;

  if (username == db_user && userpassword == db_password) {
    alert("correct");
  } else {
    document.getElementById("msg").innerHTML =
      "Credentials Not correct, would you like to create a new profile  <button class='primary-button'> Yes </button>";
    evt.preventDefault();
  }
}
