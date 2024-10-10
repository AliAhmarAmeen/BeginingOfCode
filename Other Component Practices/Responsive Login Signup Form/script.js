const container = document.querySelector(".container"),
    pwicons = document.querySelectorAll(".eye_slash"),
    pwfields = document.querySelectorAll(".eye_slash_input");
    signup = document.querySelector(".signupLink");
    login = document.querySelector(".loginLink");

pwicons.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", function () {
        pwfields.forEach(pwfield => {
            if (pwfield.type === "password") {
                pwfield.type = "text";
                pwicons.forEach(changeIcon =>{
                    changeIcon.classList.replace("fa-eye-slash","fa-eye");
                })
            } else {
                pwfield.type = "password";
                pwicons.forEach(changeIcon =>{
                    changeIcon.classList.replace("fa-eye","fa-eye-slash");
                })
            }
        })

    })
})

signup.addEventListener("click", function(){
    container.classList.add("active");
});
login.addEventListener("click", function(){
    container.classList.remove("active");
})