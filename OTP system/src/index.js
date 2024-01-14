const otpContainer = document.getElementById("otp-input-container");

// keep the event on the container rather than every single input
// event bubbling
otpContainer.addEventListener("input", (e) => {
  const val = e.target.value;

  if (isNaN(val)) {
    e.target.value = "";
    return;
  }

  if (val != "") {
    // get the next element and focus
    const nextElement = e.target.nextElementSibling;
    if (nextElement) {
      nextElement.focus();
    }
  }
});

otpContainer.addEventListener("keyup", (e) => {
  const target = e.target;
  const key = e.key.toLowerCase();

  if (key == "backspace" || key == "delete") {
    target.value = "";
    // get the previous element and focus
    const prevElement = target.previousElementSibling;
    if (prevElement) {
      prevElement.focus();
    }
  }
});
