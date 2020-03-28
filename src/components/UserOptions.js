import React from 'react';
import { FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useCookies } from 'react-cookie';

const UserOptions = () => {
    const [cookies] = useCookies(['token']);
    if(cookies.token !== undefined) {
        return (
            <div className={'navUserAccount'}>
                <Link to={'/userDashboard'}> <FaUser/> </Link>
            </div>
        )} else {
        return(
            <ul className={'navAuth'}>
                <li>
                    <Link to={'/login'}> Log in </Link>
                </li>
                <li>
                    <Link to={'/register'}> Sign up </Link>
                </li>
            </ul>
        )}
}
export default UserOptions;