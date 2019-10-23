import React from 'react'
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
    )
}