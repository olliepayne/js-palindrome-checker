const inputEl = document.getElementById('word-input')
const msgEl = document.getElementById('message')

const isPalindrome = (str) => {
  const reversedStr = str.split("")
  reversedStr = reversedStr.reverse()
  reversedStr = reversedStr.join("")

  for(const char in str) {
    if(str[char] !== reversedStr[char]) return false
  }

  return true
}

function checkPalindrome() {
  const word = inputEl.innerText
  msgEl.innerText = `The word ${word} ${isPalindrome(word) ? 'is not Palindrome' : 'is Palindrome'}`
}
const checkBtn = document.getElementById('check-btn')
checkBtn.addEventListener('click', checkPalindrome)