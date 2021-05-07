import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            <h3 className="header-title">
                <Link to='/'>
                Football App
                </Link>
            </h3>
            <ul className="header-list">
                <li>
                    <Link to='/league-list/'>League list</Link>
                </li>
            </ul>
        </div>
    );
};

export default Header;