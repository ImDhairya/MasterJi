function checkPalindrome() {
  const inputValue = document.getElementById("pal-input");
  if (!inputValue.value) {
    return alert("Please enter a value");
  }
  const text = inputValue.value
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "")
    .trim();

  const reverseString = text.split("").reverse().join("");

  const res = document.getElementById("result");
  if (text !== reverseString) {
    res.innerHTML = "This is a palindrome";
  } else {
    res.innerHTML = "This is not a palindrome";
  }
}
