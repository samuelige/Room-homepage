import React from 'react'
import './header.scss'

const Header = () => {
    return (
        <div className="header">
            <h4 className="logo"> room </h4>
            <div className="navigationBar">
                <h5>home</h5>
                <h5>shop</h5>
                <h5>about</h5>
                <h5>contact</h5>
            </div>
        </div>
    )
}

export default Header
