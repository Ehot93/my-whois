import React from 'react'

const Main = ()=>{
    return(
        <form>
        <label>
        Имя:
        <input type="text" name="name" />
        </label>
        <input type="submit" value="Отправить" />
        </form>
    );
}

//let key = "5f0b4b5c53b8cb010899e937ac4cdad7e825247ed10b7598647f4b1fda931aff";
// let key ='c77b24f431e9a65f57b4504586e164b75f5c41490d87c44dc5f48fa290b18b07';
// var query = ()=>{
//     var xhr = new XMLHttpRequest(),
//     temp = {
//     "indicator": "github.com",
//     "pretty": "1",
//     "key": key}
//     //xhr.open(method, URL, async, user, password)
//     xhr.open('GET', 'https://pulsedive.com/api/info.php', true);
//     console.log('state:' + xhr.onreadystatechange);
//     // xhr.setRequestHeader("indicator", "github.com");
//     // xhr.setRequestHeader("pretty", "1");
//     // xhr.setRequestHeader("key", "c77b24f431e9a65f57b4504586e164b75f5c41490d87c44dc5f48fa290b18b07");
    
    
    
//     //xhr.getResponseHeader("GET");
//     xhr.send(temp);
    
//     if (xhr.status != 200) {
//         console.log( xhr.status + ': ' + xhr.statusText );
//     } else {
//         console.log( xhr.responseText );
// }}
// query();
var tem;
function mob(){
var scriptt = document.createElement("script");
var callbackName = 'jsonp_callback_' + Math.round(100000 * Math.random());
    scriptt.type = 'text/javascript';
    //scriptt.src = "https://pulsedive.com/api/info.php?method=get&indicator=amazon.com&key=c77b24f431e9a65f57b4504586e164b75f5c41490d87c44dc5f48fa290b18b07?callback=response";// + callbackName;
    //scriptt.src = "https://pulsedive.com/api/info.php?method=get&indicator=amazon.com&pretty=1&key=c77b24f431e9a65f57b4504586e164b75f5c41490d87c44dc5f48fa290b18b07?callback=" + callbackName;
    //scriptt.src = "https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20130512T104455Z.8a0ed400b0d249ba.48af47e72f40c8991e4185556b825273d104af68&text=курица&callback=" + callbackName + "&lang=ru-en"
    scriptt.src = "http://htmlweb.ru/analiz/api.php?whois&url=htmlweb.ru&json"  + callbackName;
    document.body.appendChild(scriptt);
    function response(out){
      console.log('data = ' + out);
      return out;
    }
    window[callbackName] = function(data){
      console.log('data = ' + data);    
      document.body.removeChild(scriptt);
    }
    }
    function response(out){
      console.log('data = ' + out);
      return out;
    }
    mob();
 
export default Main;