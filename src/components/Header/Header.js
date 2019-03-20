import React from 'react';
import './Header.css';

const Header = props => {

        return (
            <div className="page-header">
                <h1>{props.header}</h1>
            </div>
        )
    }

export default Header;