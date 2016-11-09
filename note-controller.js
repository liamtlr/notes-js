"use strict";

(function(exports) {
  function NoteListController(noteList) {
    this.noteList = noteList;
    this.noteListView = new NoteListView(noteList);
    this.noteListHTML = this.noteListView.convertNotesToHTML()
    console.log(this.noteListHTML)
  };

  NoteListController.prototype.insertNoteViewHTML = function(element, text) {
    document.getElementById(element).innerHTML = text;
  };

  NoteListController.prototype.updateURL= function() {
    window.addEventListener("hashchange", this.setsUpNoteAndId());
  };

    NoteListController.prototype.setsUpNoteAndId = function() {
      console.log("hawwo");
      this.returnSingleNote(this.getNoteIdFromUrl(window.location));
    };

  NoteListController.prototype.testFunction = function(){
    console.log("It's working");
  };

  NoteListController.prototype.getNoteIdFromUrl = function(location) {
    return location.hash.split("#")[1];
    console.log("haww")
    console.log(location.hash.split("#")[1])

  };


  NoteListController.prototype.returnSingleNote = function(id) {
    console.log(id)
    console.log(this.noteList)
    var abba = new SingleNoteView(noteList.listOfNotes[id]);
    // console.log(singleNoteView)
    // console.log(singleNoteView.createNoteView())
    abba.createNoteView();
    console.log(abba)
    var fab = abba.noteView
    this.insertNoteViewHTML("app", fab)
  };

  exports.NoteListController = NoteListController;

})(this);
//
// var noteList = new NoteList;
// var noteListController = new NoteListController(noteList);
//
// noteList.addNote("Favourite drink: seltzer");
// noteList.addNote("Favourite animal: Meercat");
// console.log(note)
//
// noteListController.insertNoteViewHTML();
//
//
// function updateURL() {
//     window.addEventListener("hashchange", setsUpNoteAndId);
//   };
//
//   function testFunction(){
//     console.log("It's working")
//   };
//
//   function setsUpNoteAndId() {
//       returnSingleNote(getNoteIdFromUrl(window.location));
//     };
//
//   function getNoteIdFromUrl(location) {
//       return location.hash.split("#")[1];
//     };
//
//     function returnSingleNote(id) {
//       console.log(id)
//       console.log(noteList)
//     singleNoteView = new SingleNoteView(noteList.listOfNotes[id]);
//      document
//        .getElementById("app")
//        .innerHTML = singleNoteView.createNoteView();
//    };
//
//    updateURL()













//
//
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
