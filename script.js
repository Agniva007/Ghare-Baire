const navBtn = document.getElementById('nav-btn');
const cancelBtn = document.getElementById('cancel-btn');
const sideNav = document.getElementById('sidenav');
const modal = document.getElementById('modal');

navBtn.addEventListener("click", function(){
    sideNav.classList.add('show');
    modal.classList.add('showModal');
});

cancelBtn.addEventListener('click', function(){
    sideNav.classList.remove('show');
    modal.classList.remove('showModal');
});

window.addEventListener('click', function(event){
    if(event.target === modal){
        sideNav.classList.remove('show');
        modal.classList.remove('showModal');
    }
});

        const signup = document.querySelector(".signup");
        const termCond = document.querySelector("#accept");
        const password = document.querySelector("#password");
        const confirmPassword = document.querySelector("#confirmPassword");
        const pwd_format = document.querySelector(".pwd-format");
        // lets define a password format
        // The password should contain around 8-15 alhpanumeric character

        const passwordPattern = /^[a-zA-Z0-9]{8,15}$/

        password.addEventListener('focusin', () => {
            pwd_format.style.display = 'block';

            // now lets check the password entered by the user
            password.addEventListener('keyup', () => {
                if (passwordPattern.test(password.value)) {
                    password.style.borderColor = 'green' // if password pattern matches the border of password input will ne green
                    pwd_format.style.color = 'green'
                } else {
                    password.style.borderColor = 'red'
                    pwd_format.style.color = 'red'
                }
            })
        })

        password.addEventListener('focusout', () => {
            pwd_format.style.display = 'none';
        })

        confirmPassword.addEventListener('focusin', () => {
            pwd_format.style.display = 'block';
            confirmPassword.addEventListener('keyup', () => {
                if (passwordPattern.test(confirmPassword.value) && password.value === confirmPassword.value) {
                    confirmPassword.style.borderColor = 'green' // if password pattern matches the border of password input will ne green
                    pwd_format.style.color = 'green'
                } else {
                    confirmPassword.style.borderColor = 'red'
                    pwd_format.style.color = 'red'
                }
            })
        })

        confirmPassword.addEventListener('focusout', () => {
            pwd_format.style.display = 'none';
        })
        signup.disabled = true;
        termCond.addEventListener('change', () => {
            if (termCond.checked === true) {
                signup.disabled = false;
            } else {
                signup.disabled = true;
            }
        })

function sign(){
    alert("Please fill the contact details and sign in with us!!");
}

// function sendMail(){
//     alert("Your account has been Registered \nPlease look for a confirmation email sent to \n"+ email);
//     var email = document.getElementsByName('email')[0].value;
//     var name = document.getElementsByName('firstName')[0].value;

//     var subject = "Penguin Register Request";
//     var body = "Thank you for setting up an account by clicking this link";
//     document.getElementById('register').style.display='none';
// }

function sendEmail() {
    var email = document.getElementsByName('email')[0].value;
    var name = document.getElementsByName('firstName')[0].value;
    Email.send({
      Host: "smtp.gmail.com",
      Username: "noreply.gharebaire@gmail.com",
      Password: "project2021",
      To: email,
      From: "noreply.gharebaire@gmail.com",
      Subject: "Confirmation Mail",
      Body: `Dear ${name}, Your booking has been confirmed!!`,
    })
      .then(function (message) {
        alert("Your booking has been confirmed \nPlease look for a confirmation email sent to \n"+ email)
      });
  }