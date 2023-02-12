document.getElementById("btn-sumbit").addEventListener("click", function () {
  const emailField = document.getElementById("email-input");
  const email = emailField.value;
  const passwordField = document.getElementById("password-input");
  const password = passwordField.value;

  //   vrified email or password

  if (email === "ami@jani.com" && password === "tumi") {
    window.location.href = "diposit.html";
  } else {
    console.log("unvalid user");
  }
});
