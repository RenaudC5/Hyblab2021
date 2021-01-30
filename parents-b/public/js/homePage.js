let initHome = function(){
    //-----------AUDIO--------------
    //Doit mettre les audio de n'importe quelle page en pause
    document.getElementById('adresse_audio').pause();
    document.getElementById('hour_audio').pause();
    document.getElementById('age_audio').pause();
    document.getElementById('access_audio').pause();
    document.getElementById('fauna_audio').pause();
    document.getElementById('result1_audio').pause();
    document.getElementById('result2_audio').pause();


    //Le premier son doit avoir un listener
    document.addEventListener('click', musicPlay);
    function musicPlay() {
        document.getElementById('debut_audio').play();
        document.getElementById('debut_audio').loop = false;
        document.removeEventListener('click', musicPlay);
    };

    let buutonVol = document.getElementById("volumeDebut");
    buutonVol.setAttribute("src", "./img/common/volume_on.svg");
    
    d3.selectAll('.volume').on('click', function (){
        if(isSonOn){
            this.setAttribute("src", "./img/common/volume_off.svg");
            isSonOn = Boolean(false);
            document.getElementById('debut_audio').pause(); 
        }
        else{
            this.setAttribute("src", "./img/common/volume_on.svg");
            isSonOn = Boolean(true);
            document.getElementById('debut_audio').play(); 
        }
    }); 
    

    d3.select('.more-info').on('click', function (){
        //Doit ouvrir la page qui sommes nous
    });

      
    let tl_shooting_stars = anime.timeline({
        easing: 'linear',
        loop: true,
    });
    tl_shooting_stars
        .add({
            targets: ".shooting-stars",
            translateX: "-=850%",
            translateY: "+=550%",
            duration: 3000,
        })
        .add({
            targets: ".shooting-stars",
            opacity: 0,
            duration: 10
        })
        .add({
            delay: 4000,
        })

    let tl_begin_over = anime.timeline({
        easing: 'linear',
        loop:true
    });

    d3.select(".button-histoire").on("click", function (){
        mySlidr.slide('histoire-page');
        initHistoire();
    });

    

    d3.select('.button-begin').on('mouseover', function (){

        tl_begin_over
            .add({
                targets: ".button-begin",
                scale: 1.3,
                duration: 500
            })
            .add({
                targets: ".button-begin",
                scale: 0.8,
                duration: 500
            })
            .add({
                targets: ".button-begin",
                scale: 1,
                duration: 500
            })
    });

    d3.select('.button-begin').on('mouseleave' ,function (){
        anime({
            targets: ".button-begin",
            scale: 1,
            duration: 200,
            ease: 'linear'
        });
        tl_begin_over.pause();
    });

    d3.select('.button-begin').on('click', function (){
        let tl_begin = anime.timeline({
            easing: 'easeOutCubic'
        });

        document.getElementById("button-histoire").hidden = true;

        tl_begin
            .add({
                targets: ".button-begin",
                opacity: 0,
                duration: 300
            })
            .add({
                targets: ".catch-phrase",
                opacity: 0,
                offset: "-=300",
                duration: 300
            })
            .add({
                targets: ".talking-bubble-home",
                opacity: 1,
                duration: 500,
                easing: "linear"
            })
            .add({
                targets: ".oya-home-go",
                opacity: 1,
                duration: 1000,
                offset: "-=1000",
                easing: "linear"
            })
            .add({
                delay: 1000
            })
            .add({
                targets: ".talking-bubble-home",
                opacity: 0,
                duration: 500,
                easing: "linear"
            })
            .add({
                targets: ".oya-home-go",
                opacity: 0,
                duration: 500,
                offset: "-=500",
                easing: "linear"
            })
            .add({
                targets: ".oya-hello",
                translateX: '80%',
                scale: 0.6,
                duration: 1000,
            })
            .add({
                targets: ".rocket-hello",
                scale: 0.1,
                duration: 50
            })
            .add({
                targets: ".rocket-hello",
                opacity: 1,
                duration: 300,
            })
            .add({
                targets: ".rocket-hello",
                scale: 1,
                duration: 1000,
            })
            .add({
                targets: ".rocket-hello",
                translateY: '40%',
                duration: 500,
                easing:"easeOutCirc"
            })
            .add({
                targets: ".oya-hello",
                translateX: "60%",
                scale: 0.6,
            })
            .add({
                targets: ".oya-hello",
                translateX: "10%",
                scale: 0,
                duration: 1000,
            })
            .add({
                targets: ".rocket-hello",
                translateY: "-150%",
                duration: 1000,
            })

            .finished.then(() => {
            mySlidr.slide('down');
            initAddress();
        });
    });
};

