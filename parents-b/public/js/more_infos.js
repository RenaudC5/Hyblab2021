let initMoreInfo = function(){
    d3.select('#back-menu').on('click', function (){
        mySlidr.slide('down');
        initHome();
    });
}
