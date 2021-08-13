var request = new XMLHttpRequest();
request.open('GET','https://api.openweathermap.org/data/2.5/weather?q=Hyderabad&appid=93f26e3c57081a6210de53b8dcfdfea4',true);

request.onload = function() {
 if(request.status >=200 && request.status<400) { 
    var data = JSON.parse(request.responseText);
    let imgname = data.weather[0].icon+".png";
    console.log(data);
    document.getElementById("weather").value= data.weather[0].description;
    document.getElementById("temper").value= data.main.temp;
    document.getElementById("wimg").src = "https://openweathermap.org/img/w/"+imgname;




 }
 else {
     console.log(' there was an error');
 }
    

};


request.send();