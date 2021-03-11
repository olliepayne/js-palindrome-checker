const inputEl = document.getElementById('word-input')
const msgEl = document.getElementById('message')

const isPalindrome = (str) => {
  let reversedStr = str.split("")
  reversedStr = reversedStr.reverse()
  reversedStr = reversedStr.join("")

  for(const char in str) {
    if(str[char] !== reversedStr[char]) return false
  }

  return true
}

function checkPalindrome() {
  const word = inputEl.value
  console.log(word)
  if(word) {
    msgEl.innerText = `The word ${word} ${isPalindrome(word) ? 'is Palindrome' : 'is NOT Palindrome'}`
  } else {
    msgEl.innerText = 'You must enter a word!'
  }
}
const checkBtn = document.getElementById('check-btn')
checkBtn.addEventListener('click', checkPalindrome)