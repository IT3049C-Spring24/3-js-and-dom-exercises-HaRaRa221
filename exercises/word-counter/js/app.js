// 🤖: create 2 constants with references to textarea input and the stats section from the DOM


// 🤖: Create an Event Listener on textarea input
// 🤖: The event handler should update the stats section with the number of words and characters in the textarea input.
// 🤖: You will need to utilize the split method to get the words count.
// eslint-disable-next-line no-undef
const textArea = document.getElementById(`text`);
// eslint-disable-next-line no-undef
const stats = document.getElementById(`stat`);

textArea.addEventListener(`input`, function () {
  let textContent = textArea.value;
  let countWord = textContent.trim().split(` `).length;
  let countChar = textContent.length;
  stats.textContent = `You've written ` + countWord + ` words and ` + countChar` characters.`;
});