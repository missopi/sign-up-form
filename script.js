function check() {
  let input = document.getElementById('password2');
  if (input.value != document.getElementById('password1').value) {
      input.setCustomValidity('* Passwords do not match');
  } else {
      input.setCustomValidity('');
  }
}