function validate() {
  var name = document.getElementById("fullname").value;
  var mob = document.getElementById("mob").value;
  var email = document.getElementById("email").value;
  var city = document.getElementById("city").value;
  var password = document.getElementById("pass").value;

  if (name == "") {
    swal("Enter your Full Name");
    return false;
  } else if (mob.length != 10) {
    swal("Enter Mobile  number");
    return false;
  } else if (email == "") {
    swal("Enter Your Email Address");
    return false;
  } else if (city == "") {
    swal("Select Your City Name");
    return false;
  } else if (password != 6) {
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
