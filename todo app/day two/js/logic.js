var query_string = window.location.search;

var params = new URLSearchParams(query_string);

let username = params.get("username");
let password = params.get("userpassword");

auth_name.innerHTML = username;
// output.innerHTML += "  --------- " + params;
