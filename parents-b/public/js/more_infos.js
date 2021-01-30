let initMoreInfo = function(){
    d3.select('#back-menu').on('click', function (){
        mySlidr.slide('down');
        mySlidr.slider("value", mySlidr.slider("option", "min") );
        initHome();
    });
}
