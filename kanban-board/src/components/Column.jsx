import React from 'react';
import '../components/css/Column.css'

const Column = ({isOver, children}) => {

    const className = isOver ? "highlighted-column" : "";

    return (
        <div className= {`col-${className}`}>
            {children}
        </div>
    );
}

export default Column;