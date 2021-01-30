let initResults = function(){
    //-----------AUDIO--------------
    document.getElementById('result1_audio').pause();

    let buutonVol = document.getElementById("volumeResult2");
    buutonVol.setAttribute("src", "./img/common/volume_on.svg");

    if(isSonOn){
        document.getElementById('result2_audio').play();
        document.getElementById('result2_audio').loop = false;
    }
    else{
        buutonVol.setAttribute("src", "./img/common/volume_off.svg");
    }
    d3.selectAll('.volume').on('click', function (){
        if(isSonOn){
            this.setAttribute("src", "./img/common/volume_off.svg");
            isSonOn = Boolean(false);
            document.getElementById('result2_audio').pause(); 
        }
        else{
            this.setAttribute("src", "./img/common/volume_on.svg");
            isSonOn = Boolean(true);
            document.getElementById('result2_audio').play(); 
        }
    }); 
   

    d3.select('.logoAccueil7').on('click', function (){
        mySlidr.slide('home-page');
        initHome();
    });

    d3.select('.button-next-results').on('click', function (){
        mySlidr.slide('right');
        initCredits();
    });
};