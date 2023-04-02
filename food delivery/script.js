// Get the elements from the DOM
const menuBtn = document.querySelector(".menu-btn");
const navMenu = document.querySelector(".nav-menu");

// Add event listener for the menu button
menuBtn.addEventListener("click", () => {
  // Toggle the "open" class on the navigation menu
  navMenu.classList.toggle("open");
});

// Get the elements for the form validation
const form = document.querySelector("form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#message");
const errorElement = document.querySelector(".error");

// Add event listener for form submission
form.addEventListener("submit", (event) => {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Validate the form inputs
  let isValid = true;
  if (nameInput.value === "" || emailInput.value === "" || messageInput.value === "") {
    isValid = false;
    errorElement.textContent = "Please fill in all fields.";
  } else if (!isValidEmail(emailInput.value)) {
    isValid = false;
    errorElement.textContent = "Please enter a valid email address.";
  }

  // If the form is valid, submit it
  if (isValid) {
    form.submit();
  }
});

// Helper function to validate email addresses
function isValidEmail(email) {
  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegex.test(String(email).toLowerCase());
}
