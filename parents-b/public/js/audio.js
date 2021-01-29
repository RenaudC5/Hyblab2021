
    d3.select('.volume-on').on('click', function (){
        //Doit enlever le son
    });

  //------------AUDIO-----------
  document.addEventListener('click', musicPlay);
  function musicPlay() {
      document.getElementById('horaire_audio').play();
      document.getElementById('horaire_audio').loop = false;
      document.removeEventListener('click', musicPlay);
  }

