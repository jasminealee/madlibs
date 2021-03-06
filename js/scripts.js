// $(document).ready(function() {
//   $("#formOne").submit(function(event) {
//     var person1Input = $("input#person1").val();
//     var person2Input = $("input#person2").val();
//     var animalInput= $("input#noun").val();
//     var exclamationInput = $("input#adjective").val();
//     var verbInput = $("input#place").val();
//     var nounInput = $("input#villain").val();
//
//     $(".person1").append(person1Input);
//     $(".person2").append(person2Input);
//     $(".noun").append(animalInput);
//     $(".adjective").append(exclamationInput);
//     $(".place").append(verbInput);
//     $(".villain").append(nounInput);
//
//     $("#story").show();
//
//     event.preventDefault();
//   });
// });

$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var blanks = ["person1", "person2", "animal", "exclamation", "verb", "noun"];

    blanks.forEach(function(blank) {
      var userInput = $("input#" + blank).val();
      $("." + blank).text(userInput);
    });

    $("#story").show();

    event.preventDefault();
  });
});
