const checkButton = document.getElementById("check-btn");
const input = document.getElementById("text-input")
const result = document.getElementById("result");

function isPalindrome(str) {
  const cleaned = str.replace(/[^a-z0-9]/gi, '').toLowerCase();
  return cleaned === [...cleaned].reverse().join('');
}


const checkInputs = () => {
  const userInput = input.value.trim();
  if (input.value === "") {
   alert("Please input a value");
   return;
  }

  if (isPalindrome(userInput)) {
    result.textContent = `${userInput} is a palindrome.`;
  } else {
    result.textContent = `${userInput} is not a palindrome.`;
  }
};


checkButton.addEventListener("click", checkInputs);
