const btnSubscribe = document.querySelector(".btn-subscribe");

const userEmailSpan = document.querySelector(".user-email");

const main = document.querySelector(".main");
const successPage = document.querySelector(".success-container");
const successBody = document.querySelector(".success-body");
let userEmail = "";

document.addEventListener(
  "blur",
  (ev) => {
    if (!ev.target.form.classList.contains("validate")) return;

    var error = hasError(ev.target);
    if (error) {
      showError(ev.target, error);
      return;
    }
    userEmail = ev.target.value;
    removeError(ev.target);
  },
  true
);

btnSubscribe.addEventListener("click", (ev) => {
  ev.preventDefault();
  if (userEmail) {
    showSuccessPage();
  }
});

function hasError(field) {
  let validity = field.validity;
  if (validity.valid) return;
  return "Please enter a valid email";
}

function showError(field, error) {
  field.classList.add("error");

  let id = field.id || field.name;

  if (!id) return;

  let message = field.form.querySelector(".error-message#error-for-" + id);
  if (!message) {
    message = document.createElement("div");
    message.className = "error-message";
    message.id = "error-for-" + id;
    field.parentNode.insertBefore(message, field.nextSibling);
  }

  console.log(error);
  message.textContent = error;

  message.style.display = "block";
  message.style.visibility = "visible";
}

function removeError(field) {
  field.classList.remove("error");

  let id = field.id || field.name;
  if (!id) return;

  let message = field.form.querySelector(".error-message#error-for-" + id);
  if (!message) return;

  message.textContent = "";
  message.style.display = "none";
  message.style.visibility = "hidden";
}

function showSuccessPage() {
  main.classList.add("hidden");
  userEmailSpan.textContent = userEmail;
  successPage.classList.remove("hidden");
  successPage.classList.add("flex");
}
