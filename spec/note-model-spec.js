//
// var Note  = require('../note-model');
// var note;


function testNotedisplaysATextString() {
  var note = new Note("Success!");

  if (note.displayNote() !== "Success!") {
    throw new Error ("Note does not display a string");
  } else {
    console.log(".");
  };
}
testNotedisplaysATextString()
