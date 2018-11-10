const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // keep track of index outside of the event handler
  let index = 0;

  // attach an event listener to document.body & check for 'keydown' events
  document.body.addEventListener('keydown', function (e) {

    // call parseInt on the key value because the event handler might pass the string representation of the number
    const key = parseInt(e.which || e.detail);

    if (code[index] === key) {
      index++;
      // if the user enters the code, pressing all then keys in the correct order,
      if (index === code.length) {
        // alert() a congratulatory message
        alert('Hurray!');
        index = 0;
      }
    } else {
      // if they press a key out of sequence or a key that isn't part of the Konami code
      // don't alert() anything & keep listening for all ten keydowns
      index = 0;
    }
  });
}

// call the function
init();