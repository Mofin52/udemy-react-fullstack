import React from 'react';
import {useSelector} from "react-redux";
import {Link} from 'react-router-dom';

const Header = () => {
    const auth = useSelector(state => state.auth);
    const renderContent = () => {
        switch(auth) {
            case null:
                return;
            case false:
                return (
                    <li><a href={"/auth/google"}>Login With Google</a></li>
                )
            default:
                return <li><a href={"/api/logout"}>Log out</a></li>
        }
    }
    return (
        <nav>
            <div className={'nav-wrapper'}>
                <Link to={auth ? '/surveys' : '/'} className={"left brand-logo"}>Emaily</Link>
                <ul className={'right'}>
                    {renderContent()}
                </ul>
            </div>
        </nav>
    )
}

export default Header;