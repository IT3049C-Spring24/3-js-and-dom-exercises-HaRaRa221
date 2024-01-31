// 🤖: create 2 constants with references to textarea input and the stats section from the DOM


// 🤖: Create an Event Listener on textarea input
// 🤖: The event handler should update the stats section with the number of words and characters in the textarea input.
// 🤖: You will need to utilize the split method to get the words count.
// eslint-disable-next-line no-undef
const textareaInput = document.getElementById(`text`);
// eslint-disable-next-line no-undef
const statElem = document.querySelector(`stat`);

textareaInput.addEventListener(`input`, stat_update);
// eslint-disable-next-line no-undef
function stat_update() {
  const charTotal = textareaInput.value;
  const wordsTotal = charTotal.split(` `);
  let word_count = 0;

  for (const word of wordsTotal) {
    if (word.trim() !== ``) {
      // eslint-disable-next-line no-plusplus
      word_count++;
    }
  }
  const char = charTotal.length;
  statElem.textContent = `You've written ${word_count} words and ${char} characters.`;
}