let initMoreInfo = function(){
    d3.select('.go-back-more-infos').on('click', function (){
        mySlidr.slide('down');
        mySlidr.slider("value", mySlidr.slider("option", "min") );
        initHome();
    });
}
