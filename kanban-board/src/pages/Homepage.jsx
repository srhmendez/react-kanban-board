import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import DropWrapper from '../components/DropWrapper';
import Column from '../components/Column';
import Item from '../components/Item';
import '../components/css/Homepage.css';
import { data, statuses } from '../data/index';


const Homepage = () => {

    let projectName = 'Checkout Page'
    const [ items, setItems ] = useState(data);

    // changing status & Icons as we move data from section to section
    const onDrop = ( item, monitor, status ) => {
        const mapping = statuses.find(statusItem => statusItem === status);

        // filter out item we are dropping, set state, set icon, return new array
        setItems(prevState => {
            const newItems = prevState
                                .filter(i => i.id !== item.id)
                                .concat({ ...item, status, icon: mapping.icon })
                                return [...newItems];
        });
    };

    const moveItem = (dragIndex, hoverIndex) => {
        const item = items[dragIndex];
        setItems(prevState => {
            const newItems = prevState.filter((i, index) => index !== dragIndex);
            newItems.splice(hoverIndex, 0, item);
            return  [ ...newItems ];
        });
    };

    return (
        <div>
            <div className='project-name'>
                <p className='dark-blue-paragraph'>Projects > Development > {projectName}</p>
                <h1>{projectName}</h1>
            </div>

            <SearchBar/>

            <div className='col-wrapper-titles'>
                <h2 className='board-title'>Requests</h2>
                <h2 className='board-title'>Development</h2>
                <h2 className='board-title'>In Progress</h2>
                <h2 className='board-title'>Completed</h2>
            </div>

            <div className={"row"}>
                {statuses.map(s => {
                    return (
                        <div className='card' key={s.status}>
                            <DropWrapper onDrop={onDrop} status={s.status}>
                                <Column key={s.status}>
                                {items
                                    .filter(i => i.status === s.status)
                                    .map((i, idx) => <Item key={i.id} item={i} index={idx} moveItem={moveItem} status={s} />)
                                }
                                </Column>
                            </DropWrapper>
                        </div>
                    );
                })}
            </div>
            
        </div>


    );
}

export default Homepage;