(function () {
    var forms = document.querySelectorAll(".needs-validation");
    Array.prototype.slice.call(forms).forEach(function (form) {
        form.addEventListener(
            "submit",
            function (event) {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add("was-validated");
            },
            false
        );
    });
})();

function passValues() {
    var fullname = document.getElementById("fullname").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var nationality = document.getElementById("nationality").value;
    var message = document.getElementById("message").value;

    localStorage.setItem("nameValue", fullname);
    localStorage.setItem("emailValue", email);
    localStorage.setItem("phoneValue", phone);
    localStorage.setItem("nationalityValue", nationality);
    localStorage.setItem("messageValue", message);
}

function deleteStorage() {
    localStorage.clear();
    location.href = './index.html';
}