// 🤖: create 2 constants with references to textarea input and the stats section from the DOM
var Document.addEventListener(`DOMContentLoaded`, function () {

  const textAreaInput = document.querySelector("#text");
  const statsSection = document.querySelector("#stat");

  textAreaInput.addEventListener(`input`, statUpdate);

  function statUpdate() {
    const conText = textAreaInput.value;

    const countWord = textContent.split(/\s+/).filter(word => word.length > 0).length;

    const countChar = textContent.length;

    statsSection.textContent = `You've written ${countWord} words and ${countChar} characters.`;
  }

});
// 🤖: Create an Event Listener on textarea input

// 🤖: The event handler should update the stats section with the number of words and characters in the textarea input.
// 🤖: You will need to utilize the split method to get the words count.