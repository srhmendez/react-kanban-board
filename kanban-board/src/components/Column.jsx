import React from 'react';
import '../components/css/Column.css'

const Column = ({ isOver, children }) => {
    const className = isOver ? " highlight-region" : "";

    return (
        <div className={`col${className}`}>
            {children}
        </div>
    );
};

export default Column;