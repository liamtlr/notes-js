(function(exports){

  function Note(string){
    this.note = string
  }

  Note.prototype.displayNote = function () {
    return this.note
  }

  export.displayNote = displayNote;
})(this);

var note = new Note("notes");
note.displayNote();
