** start of script.js **

function palindrome(str) {
  const alphanumericOnly = str
    .toLowerCase()
    .match(/[a-z0-9]/g);
  return alphanumericOnly.join('') === alphanumericOnly.reverse().join('');
}

document.getElementById('check-btn').addEventListener('click', function() {
  const input = document.getElementById('text-input').value;
  const result = document.getElementById('result');

  if (!input) {
    alert("Please input a value");
    return;
  }

  if (palindrome(input)) {
    result.textContent = input + " is a palindrome.";
  } else {
    result.textContent = input + " is not a palindrome.";
  }
});


** end of script.js **

