import React from 'react'

const Main = ()=>{
    
    return(
        <form>
        <label>
          Имя:
          <input type="text" />
        </label>
        <input type="submit" value="Отправить" />
      </form>
    );
    }
    
    var query = ()=>{
      var xhr = new XMLHttpRequest(),
      temp = {
          "indicator": "pulsedive.com",
          "pretty": "1",
          "key": "c77b24f431e9a65f57b4504586e164b75f5c41490d87c44dc5f48fa290b18b07"
      }
      
      xhr.open('GET', 'https://www.whoisxmlapi.com/whoisserver/WhoisService?apiKey=at_F1M4RguTCYTxtOxwM7mBdI53RHqhP&domainName=google.com&outputFormat=JSON&callback=resp', true);
      //xhr.open('GET', "https://pulsedive.com/api/info.php?indicator=amazon.com&key=c77b24f431e9a65f57b4504586e164b75f5c41490d87c44dc5f48fa290b18b07", true);
      //xhr.setRequestHeader();
      xhr.onload = function(e){
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            //xhr.send(temp);
            console.log(xhr.responseText);
          } else {
            console.error(xhr.statusText);
          }
        }
      };
      xhr.onerror = function (e) {
        console.error(xhr.statusText);
      };
      //xhr.responseType = "application/json";
      //xhr.setRequestHeader("Content-type","application/json");
      //console.log('state:' + xhr.onreadystatechange);
      xhr.send(temp);
      function respons(data){
        console.log("data = " + data);
        return data;
      }
    }
   query();
  
  function mob(){
  var scriptt = document.createElement("script");
  var callbackName = 'jsonp_callback_' + Math.round(100000 * Math.random());
  scriptt.type = 'text/javascript';
  //scriptt.src = "https://pulsedive.com/api/info.php?method=get&indicator=amazon.com&key=c77b24f431e9a65f57b4504586e164b75f5c41490d87c44dc5f48fa290b18b07?callback=response";// + callbackName;
  //scriptt.src = "https://pulsedive.com/api/info.php?method=get&indicator=amazon.com&pretty=1&key=c77b24f431e9a65f57b4504586e164b75f5c41490d87c44dc5f48fa290b18b07?callback=" + callbackName;
  //scriptt.src = "https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20130512T104455Z.8a0ed400b0d249ba.48af47e72f40c8991e4185556b825273d104af68&text=курица&callback=" + callbackName + "&lang=ru-en"
  //scriptt.src = "http://htmlweb.ru/analiz/api.php?whois&url=htmlweb.ru&json"  + callbackName;
  scriptt.src = "https://www.whoisxmlapi.com/whoisserver/WhoisService?apiKey=at_F1M4RguTCYTxtOxwM7mBdI53RHqhP&domainName=amazon.com&outputFormat=JSON&callback" + callbackName;
  document.body.appendChild(scriptt);
  
  window[callbackName] = function(data){
  console.log('data = ' + data);    
  document.body.removeChild(scriptt);
  }
  }
  function response(out){
  console.log('data = ' + out);
  return out;
  }
  // mob();
  console.log('load');

export default Main;