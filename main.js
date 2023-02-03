// ELEMENTS
const submitButton = document.querySelector(".submit-btn");
const passwordInput = document.querySelector(".login-input[type=password]");

// EVENTS WHEN HOVER IN SUBMIT BUTTON
submitButton.addEventListener("mouseenter", () => {
  // IF PASSWORD INPUT LENGTH BE LESS THAN 5 CHARECTORS , SUBMIT BUTTON IS MOVING
  if (passwordInput.value.length < 5) {
    if (
      submitButton.style.marginLeft === "" ||
      submitButton.style.marginLeft === "0px"
    ) {
      submitButton.style.marginLeft = "260px";
    } else {
      submitButton.style.marginLeft = "0px";
    }
  }
});

// WHEN PASSWORD INPUT VALUE CHANGES , CHECK CONDITION OF SUBMIT BUTTON AND CHANGE IT'S CLASS NAME
passwordInput.addEventListener("input", () => {
  if (passwordInput.value.length < 5) {
    submitButton.classList.add("disable-btn");
    submitButton.classList.remove("active-btn");
  } else {
    submitButton.classList.add("active-btn");
    submitButton.classList.remove("disable-btn");
    submitButton.style.marginLeft = "0px";
  }
});
