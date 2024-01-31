// 🤖: create 2 constants with references to textarea input and the stats section from the DOM


// 🤖: Create an Event Listener on textarea input
// 🤖: The event handler should update the stats section with the number of words and characters in the textarea input.
// 🤖: You will need to utilize the split method to get the words count.

const textArea = document.querySelector(`text`);

const stats = document.getElementById(`stat`);

textArea.addEventListener(`input`, function (e) {
  let countWord = textArea.trim().split(` `).length;
  let countChar = textArea.trim.length;

  stats.innerHTML = `You've written ` + countWord + ` words and ` + countChar` characters.`;

});