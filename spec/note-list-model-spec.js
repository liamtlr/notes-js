function testNoteList() {
  var list = new NoteList();

  list.addNote("Success!");

  if (list.listOfNotes.length !== 1) {
    throw new Error ("Note list does not contain a note");
  } else {
    console.log(".");
  }
}

testNoteList();
