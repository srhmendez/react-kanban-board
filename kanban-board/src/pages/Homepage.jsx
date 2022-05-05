import React from 'react';
import SearchBar from '../components/SearchBar'
import Column from '../components/Column'
import '../components/css/Homepage.css'


const Homepage = props => {

    let projectName = 'Checkout Page'

    return (
        <div>
            <div className='project-name'>
                <p className='dark-blue-paragraph'>Projects > Development > {projectName}</p>
                <h1>Development Team</h1>
            </div>

            <SearchBar/>

            <div className='col-wrapper-titles'>
                <h2 className='board-title'>Requests</h2>
                <h2 className='board-title'>Development</h2>
                <h2 className='board-title'>In Progress</h2>
                <h2 className='board-title'>Completed</h2>
            </div>
    
            <div className='col-wrapper'>
                <Column/>
                <Column/>
                <Column/>
                <Column/>
            </div>
        </div>


    );
}

export default Homepage;