/*-----GLOBAL VARIABLES-----*/
const raceArray = ["Dwarf", "Elf", "Halfling", "Human", "Dragonborn", "Gnome", "Half-Elf", "Half-Orc", "Tiefling"];
const genderArray = ["Male", "Female", "Non-Binary"];
const occupationArray = ["Blacksmith", "Labourer", "Sailor"];
const demeanourArray = ["Surly", "Mysterious", "Exhausted", "Happy"];


/*-----ON LOAD-----*/
$(window).on('load', function () {
    // Launches pre-loader while html loads
    if ($('#preloader').length) {
        $('#preloader').delay(1000).fadeOut('slow', function () {
        });
    }   
  });

/*-----ON READY-----*/
$(document).ready(function(){

    $('#npcButton').click(function() {
        generateRace(raceArray);
        generateGender(genderArray);
        generateOccupation(occupationArray);
        generateDemeanour(demeanourArray);
    });
});

function generateRace(raceArray) {
    $race = Math.floor(Math.random() * raceArray.length);
    $("#race").text(raceArray[$race]);
    alert(raceArray[randomRace]);
}





