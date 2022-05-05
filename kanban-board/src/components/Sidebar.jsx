import React from 'react';
import logo from '../images/001-jira.png'
import addIcon from '../images/003-add.png'
import searchIcon from '../images/002-search.png'
import '../components/css/Sidebar.css';

const Sidebar = () => {

    return(
        <div className='side-menu-bar'>
            <img className="logo-responsive" src={logo} alt="logo"/>
            <img className='icons-responsive' src={addIcon} alt="add-task"/>
            <img className='icons-responsive' src={searchIcon} alt="search-task"/>
        </div>
    );
}

export default Sidebar;