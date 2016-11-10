
var noteList = new NoteList;

noteList.addNote("Favourite drink: seltzer");
noteList.addNote("Favourite animal: Meercat");

var noteListController = new NoteListController(noteList);

noteList.addNote("Favourite food: pizza");
noteListController.updateHTMLToRender();
noteListController.renderHTMLToBrowser("app", noteListController.noteListHTML);
noteListController.triggerChangeToScreen()

// noteListController.returnSingleNote();
