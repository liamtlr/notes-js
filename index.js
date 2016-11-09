
var noteList = new NoteList;
noteList.addNote("Favourite drink: seltzer");
noteList.addNote("Favourite animal: Meercat");
var noteListController = new NoteListController(noteList);




noteListController.insertNoteViewHTML("app", noteListController.noteListHTML);


noteListController.updateURL()

// noteListController.returnSingleNote();
