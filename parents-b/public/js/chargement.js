$(document).ready(function(){

    //-----------AUDIO--------------
    //Doit mettre les audio de n'importe quelle page en pause lors de F5
    document.getElementById('adresse_audio').pause();
    document.getElementById('hour_audio').pause();
    document.getElementById('age_audio').pause();
    document.getElementById('access_audio').pause();
    document.getElementById('fauna_audio').pause();
    document.getElementById('result1_audio').pause();
    document.getElementById('result2_audio').pause();
    document.getElementById('activite_audio').pause();


  $("#home")[0].style.display = "none";
  $(".shooting-stars")[0].style.display = "none";
  setTimeout(function () {
    $("#chargementI")[0].style.transition = "opacity 1s ease-out";
    $("#chargementI")[0].style.opacity = 0;
    setTimeout(function () {
        document.querySelector("body").className = "background-black";
        $("#home")[0].style.display = "block";
        $("#chargementI")[0].style.display = "none";
        $(".shooting-stars")[0].style.display = "block";
    }, 1000);
}, 4000);
});
