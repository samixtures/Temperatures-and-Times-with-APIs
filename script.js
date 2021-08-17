let city1 = "Yorba Linda";
$.getJSON("https://api.openweathermap.org/data/2.5/weather?q="+city1+"&units=imperial&appid=e6a2667bd5b27c8590f17efc6c098eef", 
function(data1){
    console.log(data1);
    let icon1 = "https://openweathermap.org/img/w/"+data1.weather[0].icon + ".png";
    let temp1 = Math.floor(data1.main.temp);
    let weather1 = data1.weather[0].description;
    $('.icon1').attr('src', icon1);
    $('.temp1').append(temp1 + "° F | "+weather1);
    $('.weatherType1').append(weather1);
});

let city2 = "San Jose";
$.getJSON("https://api.openweathermap.org/data/2.5/weather?q="+city2+"&units=imperial&appid=e6a2667bd5b27c8590f17efc6c098eef", 
function(data2){
    console.log(data2);
    let icon2 = "https://openweathermap.org/img/w/"+data2.weather[0].icon + ".png";
    let temp2 = Math.floor(data2.main.temp);
    let weather2 = data2.weather[0].description;
    $('.icon2').attr('src', icon2);
    $('.temp2').append(temp2 + "° F | "+weather2);
    $('.weatherType2').append(weather2);
});

let city3 = "Lombard";
$.getJSON("https://api.openweathermap.org/data/2.5/weather?q="+city3+"&units=imperial&appid=e6a2667bd5b27c8590f17efc6c098eef", 
function(data3){
    console.log(data3);
    let icon3 = "https://openweathermap.org/img/w/"+data3.weather[0].icon + ".png";
    let temp3 = Math.floor(data3.main.temp);
    let weather3 = data3.weather[0].description;
    $('.icon3').attr('src', icon3);
    $('.temp3').append(temp3 + "° F | "+weather3);
    $('.weatherType3').append(weather3);
});


//San Jose/Yorba Linda
//San Jose Coordinates: lon: -121.895, lat: 37.3394
$.getJSON("https://api.timezonedb.com/v2.1/get-time-zone?key=JZAAKBVNHMZM&format=json&by=position&lat=37.3394&lng=-121.895", 
function(timeData1){
console.log(timeData1);
let unix_timestamp = timeData1.timestamp - timeData1.gmtOffset;
var date = new Date(unix_timestamp * 1000);
// Hours part from the timestamp
var hours = date.getHours();
// Minutes part from the timestamp
var minutes = "0" + date.getMinutes();
var  intTemp;
var stringTemp = "PM";
if (hours >= 12)
    stringTemp = "PM";
    else if (hours == 24)
        stringTemp = "AM";
if (hours >= 13){
    temp = hours - 12;
    hours = temp;
}
var formattedTime = hours + ':' + minutes.substr(-2) + " " + stringTemp;
console.log(formattedTime);
$('.time1').append(formattedTime);
});

//Lombard
//Lombard: lon: -88.0078, lat: 41.88
$.getJSON("https://api.timezonedb.com/v2.1/get-time-zone?key=JZAAKBVNHMZM&format=json&by=position&lat=41.88&lng=-88.0078", 
function(timeData2){
console.log(timeData2);
let unix_timestamp = timeData2.timestamp - timeData2.gmtOffset;
var date = new Date(unix_timestamp * 1000);
// Hours part from the timestamp
var hours = date.getHours();
// Minutes part from the timestamp
var minutes = "0" + date.getMinutes();
var  intTemp;
var stringTemp = "PM";
if (hours >= 12)
    stringTemp = "PM";
    else if (hours == 24)
        stringTemp = "AM";
if (hours >= 13){
    temp = hours - 12;
    hours = temp;
}
hours+=2;
var formattedTime = hours + ':' + minutes.substr(-2) + " " + stringTemp;
console.log(formattedTime);
$('.time2').append(formattedTime);
});