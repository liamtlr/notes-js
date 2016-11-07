// var note = require('../note').Note;

function testNotedisplaysATextString() {
  var note = new Note("Success!");

  if (note.displayNote() !== "Success!") {
    throw new Error ("Note does not display a string");
  } else {
    console.log(".");
  };
}
