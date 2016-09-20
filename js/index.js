$(document).ready(function(){


var userLat;
var userLon;
var userCity;
var temp;
var temp1;
var temp2;
var weatherType;
var mainType;
var temp1;
var temp2;
var swap=true;

var api1 = 'http://ip-api.com/json';

//$.getJSON(api1,function(geoData){

$.ajax(api1,{

type:'GET',

dataType: "json",
success : function(geoData){

userLat=geoData.lat;
userLon=geoData.lon;
userCity=geoData.city;
console.log(userLat);
console.log(userLon);



var api2 = 'http://api.openweathermap.org/data/2.5/weather?lat='+userLat+'&lon='+userLon+'&appid=e3163935c22ed1ae335ac88e748d51d4'



$.ajax(api2,{

type:'GET',

dataType: "json",
success : function(userData){


//$.getJSON(api2,function(userData){
	//});
mainType=userData.weather[0].main;
console.log(mainType);
weatherType=userData.weather[0].description;
console.log(weatherType);
temp=userData.main.temp;
console.log(temp);
console.log(userCity);


temp1=((temp)*(9/5)-459.67).toFixed(1);
console.log(temp1);
temp2=(temp-273).toFixed(1);
console.log(temp2);
console.log(api2);

$("li").css("font-size","2.2em");
$("#city").html(userCity);

$("#temp").html(temp2+' &#8451;');

$("#type").html(weatherType);


$("#change").click(function(){

if(swap===true){
	$("#temp").html(temp1+' &#8457;');
	swap=false;
}
else{
   $("#temp").html(temp2+' &#8451;');
   swap=true;
}



});


$("#simple").html("Local weather in "+userCity);
$("#simple").css("color","white");
$("#simple").css("font-family","sans-seriff");
$("#simple").css("font-size","4.2em");

if(mainType=="Rain"){
	$("body").css("background","url('images/optirain.jpg')");
   $("body").css("background-size","cover");
   $("#simple").css("color","white");
}
else if(mainType=="Clouds"){
   $("body").css("background","url('images/opticloud.jpg')");
   $("body").css("background-size","cover");
   $("#simple").css("color","black");
}
else if(mainType=="Clear"){
   $("body").css("background","url('images/opticlear.jpg')");
   $("body").css("background-size","cover");
   $("#simple").css("color","black");
}
else if(mainType=="Thunderstorm"){
   $("body").css("background","url('images/optithunder.jpg')");
   $("body").css("background-size","cover");
   $("#simple").css("color","white");
}
else if(mainType=="Drizzle"){
   $("body").css("background","url('images/optidrizzle.jpg')");
   $("body").css("background-size","cover");
   $("#simple").css("color","black");
}
else if(mainType=="Snow"){
   $("body").css("background","url('images/optisnow.jpg')");
   $("body").css("background-size","cover");
   $("#simple").css("color","black");
}
else if(mainType=="Atmosphere"){
   $("body").css("background","url('images/optiatmo.jpg')");
   $("body").css("background-size","cover");
   $("#simple").css("color","white");
}
else if(mainType=="Extreme"){
   $("body").css("background-color","black");
   $("#simple").css("color","white");
}
else if(mainType=="Additional"){
   $("body").css("background-color","blue");
   $("#simple").css("color","white");
}



}
});

}
});

$(window).resize(function() {
  if ($(window).width() < 480) {
    $('ul').addClass('btn-group-vertical');
    $("#simple").css("font-size","2.4em");
    $("li").css("font-size","1.8em");
     } 
     else {
    $('ul').removeClass('btn-group-vertical');
    $("#simple").css("font-size","4em");
  }
});


}); 