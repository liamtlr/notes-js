
var noteList = new NoteList
var noteController = new NoteController(noteList)

noteList.addItem("Favourite drink: seltzer");
noteController.createHTML(noteList);
