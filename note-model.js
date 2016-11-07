(function(exports){

  function Note(string){
    this.note = string
  }

  Note.prototype.displayNote = function () {
    return this.note
  };

  exports.Note = Note;
})(this);
