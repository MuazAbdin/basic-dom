const submitBtn = document.getElementById("submit-btn");
const message = document.querySelector(".message");

const validate = (event) => {
  event.preventDefault();
  message.innerHTML = "";
  message.style.color = "red";
  message.style.display = "none";

  const name = document.getElementById("name");
  if (name.value.length < 2) {
    message.innerHTML = "Name must be longer than 2 characters";
    message.style.display = "block";
    name.focus();
    return false;
  }

  const salary = document.getElementById("salary");
  const salaryValue = parseInt(salary.value) || 0;
  if (salaryValue < 10e3 || salaryValue >= 16e3) {
    message.innerHTML =
      "Salary must be greater than 10,000 but less than 16,000";
    message.style.display = "block";
    salary.focus();
    return false;
  }

  const birthday = document.getElementById("birthday");
  if (birthday.value === "") {
    message.innerHTML = "Birthday may not be null";
    message.style.display = "block";
    birthday.focus();
    return false;
  }

  const phone = document.getElementById("phone");
  if (phone.value.length < 10) {
    message.innerHTML = "Phone must be 10 digits long";
    message.style.display = "block";
    phone.focus();
    return false;
  }

  message.innerHTML = "Form Submitted";
  message.style.color = "green";
  message.style.fontSize = "x-large";
  message.style.display = "block";
  setTimeout(() => {
    document.querySelector("form").style.display = "none";
    const welcomeMsg = document.createElement("h1");
    welcomeMsg.setAttribute("class", "welcome-msg");
    welcomeMsg.innerHTML = `WELCOME   >> ${name.value} <<`;
    document.body.append(welcomeMsg);
  }, 1000);
  return true;
};

submitBtn.addEventListener("click", validate);
