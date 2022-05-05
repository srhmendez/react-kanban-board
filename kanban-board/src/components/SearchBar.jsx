import React from 'react';
import '../components/css/SearchBar.css'
import searchIcon from '../images/012-white-search.png'


const Column = ({projects}) => {

    // const className = projects ? "tasks" : "projects";

    return (
        <div className='search-bar'>
            <div>
                <p className='search-task-text'>Search Tasks</p>
            </div>
            <img className='search-bar-icon' src={searchIcon} alt="search-icon"/>
            <input type='text'name='task-search' className= {`search-bar`}></input>
        </div>
    );
}

export default Column;