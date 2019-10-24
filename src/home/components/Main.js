import React, {Component} from 'react'

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

let key = "5f0b4b5c53b8cb010899e937ac4cdad7e825247ed10b7598647f4b1fda931aff";
var query = ()=>{
    console.log('*');
    var xhr = new XMLHttpRequest(),
    temp = {"indicator": "pulsedive.com",
    "pretty": "1",
    "key": key}
    //xhr.open(method, URL, async, user, password)
    xhr.open('GET', 'https://pulsedive.com/api/info.php', false);
    xhr.send(temp);
    if (xhr.status != 200) {
    alert( xhr.status + ': ' + xhr.statusText );
    } else {
    alert( xhr.responseText );
}}
 
export default Main;