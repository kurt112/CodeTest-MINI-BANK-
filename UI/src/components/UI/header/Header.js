import React from 'react'
import './Header.css'
import HeaderRight from './header-right/header-right'
import HeaderLeft from './header-left/header-left'


const Header = ({user}) => {
    return (
        <header>
           
            <HeaderLeft />
            <HeaderRight user={user}/>
        </header>

    )
}

export default Header