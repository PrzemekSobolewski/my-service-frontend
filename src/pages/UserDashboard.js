import React from 'react';
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch
  } from 'react-router-dom';

const UserDashboard = () => {
    return (
        <Router>
            <div>
                <ul>
                    <li><Link>Notes</Link></li>
                    <li><Link>Account</Link></li>
                    <li><Link>Stats</Link></li>
                </ul>
            </div>
        </Router>
    )
}

export default UserDashboard