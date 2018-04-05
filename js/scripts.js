$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var heroNameInput = $("input#heroName").val();

    $(".heroName").text(heroNameInput);


    $("#story").show();

    event.preventDefault();
  });
});
