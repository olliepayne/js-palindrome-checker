const inputEl = document.getElementById('palindrome-input')
const msgEl = document.getElementById('message')

const isPalindrome = (str) => {
  const reversedStr = str.split("")
  reversedStr = reversedStr.reverse()
  reversedStr = reversedStr.join("")

  for(const char in str) {
    
  }
}

function checkPalindrome() {
  const word = inputEl.innerText
  msgEl.innerText = `The word ${word} ${isPalindrome(word) ? 'is not Palindrome' : 'is Palindrome'}`
}