let id = "";
let advice = "";
let num = document.getElementById('num');
let adv = document.getElementById('adv');

function httpGet(){
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET",'https://api.adviceslip.com/advice', false );
    xmlHttp.send();
    var data = xmlHttp.responseText;
    var jsonResponse = JSON.parse(data);
    var obj = jsonResponse["slip"]
    id = obj.id;
    console.log(id);
    advice = obj.advice;
}



function adviceGet(){
    httpGet()
    num.innerHTML = "ADVICE #" + id;
    adv.innerHTML = advice;
    
}



    








