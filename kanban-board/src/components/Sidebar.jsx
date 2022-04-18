import React from 'react';
import logo from '../../public/assets/images/001-jira.png'

const Sidebar = () => {

    return(
        <div className={'row'}>
            <img className="img-responsive" src={logo} alt="logo"/>
        </div>
    );
}

export default Sidebar;