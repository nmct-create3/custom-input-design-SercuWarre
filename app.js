
function handlePasswordSwitcher() {
    // Selecteer de password input en de toggle button
  const passwordInput = document.querySelector('.js-password-input');
  const passwordToggle = document.querySelector('.js-password-toggle');

    console.log(passwordInput);
    console.log(passwordToggle);
  if (passwordInput && passwordToggle) {
    passwordToggle.addEventListener('click', function () {
      if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
      } else {
        passwordInput.type = 'password';
      }
    });
  }
}

// Roep de functie aan om deze te activeren
document.addEventListener('DOMContentLoaded', function () {
  handlePasswordSwitcher();
});

