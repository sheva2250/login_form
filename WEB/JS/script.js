const togglePassword = document.querySelector("#togglePassword");
const password = document.querySelector("#password");
const inputs = document.querySelectorAll('.txt_field input');

// Fungsi untuk menangani perubahan pada input
function handleInput(event) {
  const input = event.target;
  const txtField = input.parentElement;

  if (input.value.trim() !== '') {
    txtField.classList.add('filled');
  } else {
    txtField.classList.remove('filled');
  }
}

// Tambahkan event listener untuk setiap input
inputs.forEach(input => {
  input.addEventListener('input', handleInput);
  input.addEventListener('focus', handleInput); // Tambahkan event listener focus
  input.addEventListener('blur', handleInput); // Tambahkan event listener blur
});


    togglePassword.addEventListener("click", function () {
        // toggle the type attribute
        const type = password.getAttribute("type") === "password" ? "text" : "password";
        password.setAttribute("type", type);
            
        // toggle the icon
       this.classList.toggle("bi-eye");
});

    // prevent form submit
const form = document.querySelector("form");
    form.addEventListener('submit', function (e) {
        e.preventDefault();
});