let initHome = function(){
    d3.select("#logo-adopte-un-parc-a").on("click", function (){
        anime({
            targets: "#logo-adopte-un-parc-a",
            scale: 0
        });
        mySlidr.slide("page-home");
        initHome();
    });

    d3.select("#logo-adopte-un-parc-a").on("mouseover", function(){
        anime({
            targets: "#logo-adopte-un-parc-a",
            scale: 1.2
        });
    });

    d3.select("#logo-adopte-un-parc-a").on("mouseout", function(){
        anime({
            targets: "#logo-adopte-un-parc-a",
            scale: 1
        });
    });

    d3.select(".button-begin").on("click", function (){
        mySlidr.slide("page-address");
        initAddress();
    });
};