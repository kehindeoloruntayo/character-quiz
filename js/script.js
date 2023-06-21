$(document).ready(function () {
    $("#genderform").submit(function(event) {
        event.preventDefault();
        const gender  = $("select#gender").val();
        const nameInput = $("input#uname").val();
            window.location = "./quiz.html"
    });


    $('#harrypotter').submit(function (event) {
        event.preventDefault();
        const houseInput = $("select#house").val();
        const objectInput = $("select#object").val();
        const petInput = $("select#pet").val();
        const potionInput = $("select#potion").val();
        const placeInput = $("select#place").val();

        if ((houseInput === "gryffindor" || "hufflepuff" || "ravenclaw") && objectInput === "resurrection" && petInput === "unicorn" && potionInput === "luck" && placeInput === "puddifoot")  {
            $("#harrypotter").hide();
            $(".match1").show(1000);
        } else if ((houseInput === "gryffindor" || "hufflepuff" || "ravenclaw") && objectInput === "wand" && petInput === "owl" && (potionInput === "luck" || "strengthening") && placeInput === "puddifoot") {
            $("#harrypotter").hide();
            $(".match2").show(1000);
        } else if ((houseInput === "gryffindor" || "slytherin" || "hufflepuff" || "ravenclaw") && objectInput === "map" && petInput === "phoenix" && (potionInput === "luck" || "strengthening") && (placeInput === "broomsticks" || "quidditch")) {
            $("#harrypotter").hide();
            $(".match3").show(1000);
        } else if ((houseInput === "gryffindor" || "slytherin" || "hufflepuff" || "ravenclaw") && objectInput === "cloak" && petInput === "owl" (potionInput === "luck" || "strengthening") && (placeInput === "broomsticks" || "quidditch" || "borgin")) {
            $("#harrypotter").hide();
            $(".match4").show(1000);
        } else if ((houseInput === "gryffindor" || "slytherin" || "hufflepuff" || "ravenclaw") && objectInput === "stone" && petInput === "hippogriff" &&(potionInput === "luck" || "strengthening") && (placeInput === "broomsticks" || "quidditch")) {
            $("#harrypotter").hide();
            $(".match5").show(1000);
        } else if ((houseInput === "gryffindor" || "slytherin" || "hufflepuff" || "ravenclaw") && objectInput === "stone" && petInput === "hippogriff" (potionInput === "luck" || "strengthening") && (placeInput === "broomsticks" || "quidditch")) {
            $("#harrypotter").hide();
            $(".match6").show(1000);
        } else if ((houseInput === "gryffindor" || "slytherin" || "hufflepuff" || "ravenclaw") && objectInput === "map" && petInput === "owl" (potionInput === "polyjuice" || "strengthening") && (placeInput === "broomsticks" || "quidditch" || "borgin")) {
            $("#harrypotter").hide();
            $(".match7").show(1000);
        } else if ((houseInput === "gryffindor" || "slytherin" || "hufflepuff" || "ravenclaw") && objectInput === "wand" && potionInput === "love" && placeInput === "puddifoot") {
            $("#harrypotter").hide();
            $(".match8").show(1000);
        } else {
        $("#harrypotter").hide();
        $(".match7").show(1000);
        }
    });
});