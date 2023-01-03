const toggleForm = () => {
  const container = document.querySelector(".container");
  container.classList.toggle("active");
};

function validate() {
  var name = document.getElementById("username").value;
  var mob = document.getElementById("mob").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("pass").value;
  var cpassword = document.getElementById("c-pass").value;

  if (name == "") {
    swal("Enter your Full Name");
    return false;
  } else if (mob.length != 10) {
    swal("Enter Mobile  number");
    return false;
  } else if (email == "") {
    swal("Enter Your Email Address");
    return false;
  } else if (password.length != 6) {
    swal("enter a 6 digit password");
    return false;
  } else if (password != cpassword) {
    swal("password do not match");
    return false;
  } else {
    swal({
      title: "Good job!",
      text: "You clicked the button!",
      icon: "success",
      button: "Aww yiss!",
    });
    return true;
  }
}
