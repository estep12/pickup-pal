import React from 'react';
import './Header.css';

const Header = props => {

        return (
            <div className="page-header">
                <h1>{props.header}</h1>
                <h2>{props.subtitle}</h2>
            </div>
        )
    }

export default Header;