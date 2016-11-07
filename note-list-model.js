
(function(exports) {
  function NoteList(){
    this.listOfNotes = []
  }

  NoteList.prototype.displayListOfNotes = function(){
    return this.listOfNotes
  };

  NoteList.prototype.addNote = function(string){
    var note = new Note(string);
    this.listOfNotes.push(name);
  }

 exports.NoteList = NoteList;
})(this);

list = new NoteList;

list.addNote("Woohoo!");
