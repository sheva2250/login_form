const signupForm = document.getElementById('signupForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');
const togglePasswordIcon = document.getElementById('togglePassword');
const toggleConfirmPasswordIcon = document.getElementById('toggleConfirmPassword');

// Fungsi untuk menampilkan pesan error
function showError(input, message) {
  const txtFile = input.parentElement; // Get the parent .txt_file element
  txtFile.classList.add('error');
  const errorMessage = txtFile.querySelector('.error-message');
  errorMessage.textContent = message;
  errorMessage.style.display = 'block';
}

// Fungsi untuk menyembunyikan pesan error
function hideError(input) {
  const txtFile = input.parentElement; // Get the parent .txt_file element
  txtFile.classList.remove('error');
  const errorMessage = txtFile.querySelector('.error-message');
  errorMessage.style.display = 'none';
}

// Validasi email
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// Validasi password (minimal 8 karakter)
function validatePassword(password) {
  return password.length >= 8;
}

// Fungsi untuk toggle password visibility
function togglePasswordVisibility(input, icon) {
  const type = input.getAttribute('type') === 'password' ? 'text' : 'password';
  input.setAttribute('type', type);
  icon.classList.toggle('bxs-show');
}

// Event listener untuk form submit
signupForm.addEventListener('submit', (event) => {
  event.preventDefault();

  // Validasi email
  if (!validateEmail(emailInput.value)) {
    showError(emailInput, 'Please enter a valid email');
  } else {
    hideError(emailInput);
  }

  // Validasi password
  if (!validatePassword(passwordInput.value)) {
    showError(passwordInput, 'Password must be at least 8 characters');
  } else {
    hideError(passwordInput);
  }

  // Validasi konfirmasi password
  if (passwordInput.value !== confirmPasswordInput.value) {
    showError(confirmPasswordInput, 'Passwords do not match');
  } else {
    hideError(confirmPasswordInput);
  }

  // Jika semua validasi lolos, submit form ke server
  // ... (kode untuk mengirim data ke server)
});

// Event listener untuk toggle password visibility
togglePasswordIcon.addEventListener('click', () => {
  togglePasswordVisibility(passwordInput, togglePasswordIcon);
});

toggleConfirmPasswordIcon.addEventListener('click', () => {
  togglePasswordVisibility(confirmPasswordInput, toggleConfirmPasswordIcon);
});
