document.getElementById('btn-submit').addEventListener('click', function () {
    const inputField = document.getElementById('input-field');
    const inputValue = inputField.value;

    const passwordField = document.getElementById('password-field');
    const passwordValue = passwordField.value;

    if (inputValue === 'jamal@gmail.com' && passwordValue === '123456') {
        window.location.href = 'bank.html';
    }
    else {
        alert('Please enter the valid user and password')
    }

})