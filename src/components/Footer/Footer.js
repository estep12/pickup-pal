import React from 'react'; 
import './Footer.css';

const Footer = props => {

        return (
            <div className="page-footer">
                <h1>{props.footer}</h1>
            </div>
        )
    }

export default Footer;