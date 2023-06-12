const form = document.querySelector("form"),
        emailField = form.querySelector(".email-field"),
        emailInput = emailField.querySelector(".email"),
        passField = form.querySelector(".create-password"),
        passInput = passField.querySelector(".password"),
        cPassField = form.querySelector(".confirm-password"),
        cPassInput = cPassField.querySelector(".cPassword");
        
// Email Validation
function checkEmail(){
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if(!emailInput.value.match(emailPattern)){
        return emailField.classList.add("invalid"); //Menambahkan class "invalid" apabila email value tidak sesuai dengan emailPattern
    }
    emailField.classList.remove("invalid"); //Menghapus class "invalid" jika email value sesuai dengan emailPattern
}

// Hide and show password
const eyeIcons = document.querySelectorAll(".show-hide");
eyeIcons.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", () => {
        const pInput = eyeIcon.parentElement.querySelector("input");
    if(pInput.type === "password"){
        eyeIcon.classList.replace("bxs-hide", "bxs-show")
        return pInput.type = "text";
    }
    eyeIcon.classList.replace("bxs-show", "bxs-hide")
    return pInput.type = "password";
  });
});

// Password Validation
function createPass(){
    const passPattern = 
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        if(!passInput.value.match(passPattern)){ //Menambahkan class "invalid" apabila password tidak sesuai dengan passPattern
            return passField.classList.add("invalid");
        }
        passField.classList.remove("invalid");emailField.classList.remove("invalid");  //Menghapus class "invalid" jika password sesuai dengan passPattern
}

// Confirm Password Validation
function confirmPass(){
    if(passInput.value !== cPassInput.value  || cPassInput.value === ""){
        return cPassField.classList.add("invalid");
    }
    cPassField.classList.remove("invalid");
}

// Calling Function on Form Submit
form.addEventListener("submit", (e) =>{
    e.preventDefault(); //Preventing from submitting
    checkEmail();
    createPass();
    confirmPass();

    // Calling function on key up
    emailInput.addEventListener("keyup", checkEmail);
    passInput.addEventListener("keyup", createPass);
    cPassInput.addEventListener("keyup", confirmPass);

    if (
        !emailField.classList.contains("invalid") &&
        !passField.classList.contains("invalid") &&
        !cPassField.classList.contains("invalid")
    ) {
        location.href = form.getAttribute("action")
    }
});