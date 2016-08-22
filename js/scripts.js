
//Business Logic
function Places(location,landmarks,timeOfYear,notes){
  this.locale = location;
  this.landmarks = landmarks;
  this.timeOfYear = timeOfYear;
  this.notes = notes;
}

//Ui logic
$(document).ready(function(){

  $("#new-location").submit(function(event){
    event.preventDefault();
    var locationIn = $("#location").val();
    var landmarksIn = $("#landmarks").val();
    var timeOfYearIn = $("#timeOfYear").val();
    var notesIn = $("#notes").val();
    var newPlace = new Places(locationIn, landmarksIn, timeOfYearIn, notesIn);

    $("#adventures").append("<li>" +locationIn+ "</li>");
    $("li").last().click(function(){
      $(".current-adventure").show();
      $("#locale").text(newPlace.locale);
      $("#year-time").text(newPlace.timeOfYear);
      $("#pt-of-interest").text(newPlace.landmarks);
      $("#observations").text(newPlace.notes);
    });
    $("#location").val("");
    $("#landmarks").val("");
    $("#timeOfYear").val("");
    $("#notes").val("");
  });
});
