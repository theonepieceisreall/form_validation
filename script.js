const fullNameInput = document.getElementById('fullName');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');

const fullNameError = document.getElementById('fullNameError');
const emailError = document.getElementById('emailError');
const phoneError = document.getElementById('phoneError');
const passwordError = document.getElementById('passwordError');
const confirmPasswordError = document.getElementById('confirmPasswordError');

const form = document.getElementById('validationForm');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  let isValid = true;

  // Full Name Validation
  if (fullNameInput.value.trim().length < 5) {
    isValid = false;
    fullNameError.textContent = 'Full name must be at least 5 characters long.';
    fullNameInput.classList.add('invalid');
  } else {
    fullNameError.textContent = '';
    fullNameInput.classList.remove('invalid');
  }

  // Email Validation
  if (!/\@/.test(emailInput.value)) {
    isValid = false;
    emailError.textContent = 'Email must contain an "@" symbol.';
    emailInput.classList.add('invalid');
  } else {
    emailError.textContent = '';
    emailInput.classList.remove('invalid');
  }

  // Phone Number Validation
  if (phoneInput.value === '1234567890' || phoneInput.value.length !== 10) {
    isValid = false;
    phoneError.textContent = 'Phone number must be 10 digits long and not "1234567890".';
    phoneInput.classList.add('invalid');
  } else {
    phoneError.textContent = '';
    phoneInput.classList.remove('invalid');
  }

  // Password Validation
  if (passwordInput.value.length < 8 || (passwordInput.value.toLowerCase() === fullNameInput.value.toLowerCase() || passwordInput.value === 'Password' || passwordInput.value === 'password')) {
    isValid = false;
    passwordError.textContent = 'Password must be at least 8 characters long and cannot be "Password", "password", or the same as your full name.';
    passwordInput.classList.add('invalid');
  } else {
    passwordError.textContent = '';
    passwordInput.classList.remove('invalid');
  }

  // Confirm Password Validation
  if (confirmPasswordInput.value !== passwordInput.value) {
    isValid = false;
    confirmPasswordError.textContent = 'Passwords must match.';
    confirmPasswordInput.classList.add('invalid');
  } else {
    confirmPasswordError.textContent = '';
    confirmPasswordInput.classList.remove('invalid');
  }

  if (isValid) {
    // Redirect to a new page after successful validation
    window.location.href = "success.html"; 
    alert('Form submitted successfully!');
  }
});

// hover effect for submit button
submitButton.addEventListener('mouseover', () => {
  submitButton.style.backgroundColor = '#004a95';
});

submitButton.addEventListener('mouseout', () => {
  submitButton.style.backgroundColor = '#007bff';
});
