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
        $race = generateRace(raceArray);
        $gender = generateGender(genderArray);
        $occupation = generateOccupation(occupationArray);
        $demeanour = generateDemeanour(demeanourArray);
        $name = generateName($race, $gender);
    });
});

function generateRace(raceArray) {
    $race = Math.floor(Math.random() * raceArray.length);
    $("#race").text(raceArray[$race]);
}

function generateGender(genderArray) {
    $gender = Math.floor(Math.random() * genderArray.length);
    $("#gender").text(genderArray[$gender]);
}

function generateOccupation(occupationArray) {
    $occupation = Math.floor(Math.random() * occupationArray.length);
    $("#occupation").text(occupationArray[$occupation]);
}

function generateDemeanour(demeanourArray) {
    $demeanour = Math.floor(Math.random() * demeanourArray.length);
    $("#demeanour").text(demeanourArray[$demeanour]);
}

function generateName(race, gender) {
    $("#name").text("Example Fantasy NPC");
}