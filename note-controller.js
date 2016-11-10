"use strict";

(function(exports) {
  function NoteListController(noteList) {
    this.noteList = noteList;
    this.noteListView = new NoteListView(noteList);
    this.noteListHTML = this.noteListView.convertNotesToHTML()
  };

  NoteListController.prototype.renderHTMLToBrowser = function(element, text) {
    document.getElementById(element).innerHTML = text;
  };

  NoteListController.prototype.updateHTMLToRender= function() {
    this.noteListHTML = this.noteListView.convertNotesToHTML();
  };

  NoteListController.prototype.triggerChangeToScreen= function() {
    window.addEventListener("hashchange", this.setsUpNoteAndId());
  };

    NoteListController.prototype.setsUpNoteAndId = function() {
      this.createSingleNoteViewFromNoteList(this.getNoteIdFromUrl(window.location));
    };

  NoteListController.prototype.testFunction = function(){
    console.log("It's working");
  };

  NoteListController.prototype.getNoteIdFromUrl = function(location) {
    return location.hash.split("#")[1];
    console.log(location.hash.split("#")[1])
  };

  NoteListController.prototype.createSingleNoteViewFromNoteList = function(id) {
    var singleNoteView = new SingleNoteView(noteList.listOfNotes[id]);
    singleNoteView.createNoteView();
    var contentToRender = singleNoteView.noteView
    this.renderHTMLToBrowser("app", contentToRender)
  };

  exports.NoteListController = NoteListController;

})(this);

// var element = document.getElementById("app").innerHTML;
//
// function changeHTMLText(id, string) {
//    document.getElementById(id).innerHTML = string;
// }
//
//
//  console.log(document.getElementById("app").innerHTML);
//
//  changeHTMLText("app", "Howdy");
//
//  console.log(document.getElementById("app").innerHTML);
