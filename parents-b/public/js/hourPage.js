let initHour = function(){
    d3.select(".button-suivant-hour").on("click", function (){
        mySlidr.slide("age-page");
        initAge();
    });
};


var s = Snap("#svg-slider");

var Lscreen=document.querySelector("#slidr").clientHeight;
var width = document.body.clientWidth;
var rayon = Lscreen - ((width - Lscreen)/2 ) *0.2  ;

var bigCircle = s.circle(200, 200, rayon);

bigCircle.attr({
    fill: "#45396D",
});

var polygon = s.polygon(200,0 , 0,0 , 0,400 , 200,400);

polygon.attr({
    fill: "#FFCDB6"
});

var discs = s.group(bigCircle, polygon);

var bigCircle2 = s.circle(200, 200, 200);

bigCircle2.attr({
    fill: "#fff"
});

discs.attr({
    mask: bigCircle2
});


function calculX(dX,dY){
 //(200,400)
 let a = ((400-dY)/(200-dX));
 console.log(a);
 let b = dY - a*dX;
 console.log(b);
 console.log(-b/a);
 return(-b/a);
}

function calculY(dX,dY,x){
  //(200,400)
  // x = x
  let a = ((400-dY)/(200-dX));
  console.log(a);
  let b = dY - a*dX;
  console.log(b);
  console.log(a*x+b);
  return(a*x+b)
}


document.querySelector("#svg-slider").addEventListener('click', function(event) {
  console.log(event);
  var LscreenX=document.querySelector("#slidr").clientWidth;
  var LscreenY=document.querySelector("#slidr").clientHeight;

  var width = document.body.clientWidth;
  var height = document.body.clientHeight;

  console.log(LscreenX);
  console.log(LscreenY);
  let dX = event.pageX - LscreenX*0.38 - ((width - LscreenX)/2 );
  let dY = event.pageY - LscreenY*0.52 ;
  console.log("X : "+LscreenX);
  console.log("Y : "+LscreenY);
  console.log("dX : "+dX);
  console.log("dY : "+dY);

  console.log("nouveau : "+LscreenY*0.62*0.5);
  document.querySelector("#svg-slider").innerHTML = "";
  var s = Snap("#svg-slider");
  var bigCircle = s.circle(200, 200, 200);
  bigCircle.attr({
      fill: "#45396D",
  });

  let violet = document.querySelectorAll(".violet");
  for(let v of violet){
    v.style.opacity = 0;
  }

  let change = document.querySelector("#changeHour");

  // Ajouter valeur INPUT
    if(dY < 200 && dX < 200 && ((dX-dY) >= 0) ){
      change.value = 1;
      document.querySelector(".hour-aprem.violet").style.opacity = 1;
      console.log("Aprèm gauche");

    } if(dY < 200 && dX >= 200 && ((dX+dY) < 400) ){
      change.value = 1;
      document.querySelector(".hour-aprem.violet").style.opacity = 1;
      console.log("Aprèm droite");

    } if(dY >= 200 && dX >= 200 || dY < 200 && dX >= 200 && ((dX+dY) >= 400) ){
      change.value = 2;
      console.log("Après 17h");
      document.querySelector(".hour-17.violet").style.opacity = 1;

    } if(dY >= 200 && dX < 200 || dY < 200 && dX < 200 && ((dX-dY) < 0) ) {
      change.value = 0;
      document.querySelector(".hour-9.violet").style.opacity = 1;
      console.log("Avant 9h");

    }

  // Ajuster le polygone en fonction du click
    if(dX < 200 && ((dY-2*dX) < 0)  ){

      let nvX = calculX(dX,dY);

      var polygon = s.polygon(nvX,0 , 0,0 , 0,400 , 200,400);
      console.log(nvX);

    } if(dX >= 200 && ((dY+2*dX) < 800) ){

      let nvX = calculX(dX,dY);
      console.log(nvX);

      var polygon = s.polygon(nvX,0 , 0,0 , 0,400 , 200,400);

    } if( dX >= 200 && ((dY+2*dX) >= 800) ){

      let nvY = calculY(dX,dY,400);
      console.log(nvY);

      var polygon = s.polygon(400,nvY, 400,0, 0,0, 0,400 , 200,400 );

    } if(dX < 200 && ((dY-2*dX) >= 0) ) {

      let nvY = calculY(dX,dY,0);
      var polygon = s.polygon(0,nvY , 0,400 , 200,400 );

    }



  polygon.attr({
      fill: "#FFCDB6"
  });
  var disc = s.group(bigCircle, polygon);

  var bigCircle2 = s.circle(200, 200, 200);
  bigCircle2.attr({
      fill: "#fff"
  });

  disc.attr({
      mask: bigCircle2
  });


})
