// Ambil referensi ke elemen form
const forgotPasswordForm = document.getElementById('forgotPasswordForm');
const emailInput = document.getElementById('email');

// Fungsi untuk validasi email (opsional, bisa disesuaikan)
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// Event listener untuk menangani submit form
forgotPasswordForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Mencegah submit default
});
