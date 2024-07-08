
function isPalindrome(word) {
    // Remove non-alphanumeric characters and convert to lowercase
    let cleanWord = word.toLowerCase().replace(/[\W_]/g, '');
    // Check if the word is equal to its reverse
    return cleanWord === cleanWord.split('').reverse().join('');
}

function checkPalindrome() {
    let inputWord = document.getElementById('inputWord').value;

    if (inputWord === '') {
        alert('Please enter a word or phrase.');
        return;
    }

    if (isPalindrome(inputWord)) {
        document.getElementById('result').innerText = `"${inputWord}" is a palindrome!`;
    } else {
        document.getElementById('result').innerText = `"${inputWord}" is not a palindrome.`;
    }
}
