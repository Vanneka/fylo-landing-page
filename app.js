// Collect form variable
let theForm = document.getElementById('the-form');

// Event listeners
theForm.addEventListener('submit', mailaCheck);

// Functions
function mailaCheck(e){
    e.preventDefault()

    let inputArea = document.querySelector('.input-area').value;
    let errorInput = document.querySelector('.error-input')

    if(inputArea == "") {
        errorInput.style.display = 'block'
    } else {
        errorInput.style.display = 'none'
        validateForm(inputArea)
    }
    theForm.reset()
}

function validateForm(val){
    let regCheck = /\S+@\S+\.\S+/;
    regCheck.test(val)
    let errorEmail = document.querySelector('.error-email')

    if(regCheck.test(val) ==false){
        errorEmail.style.display = "block"
    }
    else {
        errorEmail.style.display = "none"
    }
}