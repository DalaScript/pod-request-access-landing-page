const submitBtn = document.querySelector(".pod-request-container__submit-btn");
const requestForm = document.querySelector(".pod-request-container__form");
const emailInput = document.querySelector(".pod-request-container__email-input");
const requiredText = document.querySelector(".pod-request-container__form-required-text");

submitBtn.addEventListener('click',(e) => {
    e.preventDefault();
    checkFormValidation();
});

function checkFormValidation() {
    if(!requestForm.checkValidity()) {
        requiredText.classList.add("pod-request-container__form-required-text--active");
        emailInput.classList.add("pod-request-container__email-input--required");
    }else {
        requiredText.classList.remove("pod-request-container__form-required-text--active");
        emailInput.classList.remove("pod-request-container__email-input--required");

        console.log(emailInput.value);
        emailInput.value = "";
    }
}