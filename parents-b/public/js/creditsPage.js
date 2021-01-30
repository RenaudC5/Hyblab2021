let initCredits = function(){

    d3.select('.go-back-end').on('click', function (){
        mySlidr.slide('left');
        initEnd();
    });

};