import React from 'react';
import './Header.scss';
import Cookies from 'js-cookie';
import axios from 'axios';

const date = new Date()

const getName = () => {
    axios.post('/api/login', {
        key: Cookies.get('key')
    }).then(response => {
        return response.data.name;
    }).catch(e => {
        console.log(e);
        return null
    })
}

const name = Cookies.get('name') ?
    Cookies.get('name') :
    Cookies.get('key') ?
    getName() :
    null

const Header = () => {
    return (
        <div className = "Header">
            <div className = "HeaderBlock HeaderCalendar">Calendar</div>
            <div className = "HeaderBlock HeaderProfile">
                {
                    name ? 
                        name : 
                            <span>Sign in</span>   
                }
            </div>
            <div className = "HeaderBlock HeaderDate">
                Today:&nbsp;
                {date.getDay() < 10 ? "0"+ date.getDay() : date.getDay()}.
                {date.getMonth() < 10 ? "0"+ date.getMonth() : date.getMonth()}.
                {date.getFullYear()}
                </div>
        </div>
    )
}

export default Header;