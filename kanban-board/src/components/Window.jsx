import React from 'react';
import Modal from 'react-modal'
import closeIcon from '../images/005-cancel.png'

Modal.setAppElement('#app');

const Window = ({ show, onClose, item}) => {

    return(
        <Modal
            isOpen = {show}
            onRequestClose = {onClose}
            className = {'modal'}
            overlayClassName = {'overlay'}
        >
            <div className='close-btn-container'>
                <a className='close-btn' onClick={onClose}>
                    <h1>{item.title}</h1>
                    <img src={closeIcon} alt='close icon' />
                </a>
            </div>
            <div>
                <h2>Description</h2>
                <p>{item.content}</p>

                {/* capitalizing the Status of Item */}
                <p>
                    {item.icon} {`${item.status.charAt(0).toUpperCase()}${item.status.slice(1)}`}
                </p>

            </div>
        </Modal>

    )
}

export default Window;