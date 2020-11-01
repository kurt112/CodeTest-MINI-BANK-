import React from 'react'
import Header from '../../UI/header/Header'
import MainContent from '../../UI/main-content/main-content'
import './content.css'
const Content = ({user}) => {
    return (
        <div className='content'>
            <Header user={user}/>
            <MainContent user={user}/>
        </div>

    )
}

export default React.memo(Content)