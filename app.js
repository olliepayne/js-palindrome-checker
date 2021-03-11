const inputEl = document.getElementById('word-input')
const msgEl = document.getElementById('message')

const isPalindrome = (str) => {
  const validChars = 
    [
      'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
      't', 'u', 'v', 'w', 'x', 'y', 'z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'
    ]

  let original = str.toLowerCase()
  let copy = ''
  for(const char in original) {
    if(validChars.includes(original[char])) copy += original[char]
  }
  
  if(copy.length > 0) {
    original = copy 
    let reversed = original.split("").reverse().join("")

    for(const char in original) {
      if(original[char] !== reversed[char]) return false
    }
  } else {
    return false
  }

  return true
}

function checkPalindrome() {
  const str = inputEl.value
  if(str) {
    msgEl.innerText = `The text '${str}' ${isPalindrome(str) ? 'IS Palindrome' : 'IS NOT Palindrome'}`
  } else {
    msgEl.innerText = 'You must enter a word!'
  }
}
const checkBtn = document.getElementById('check-btn')
checkBtn.addEventListener('click', checkPalindrome)