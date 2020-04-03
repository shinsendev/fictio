import Header from '../organisms/Header';
import Origin from '../organisms/Origin';
import Modal from '@material-ui/core/Modal';
import fetch from 'isomorphic-unfetch';
import React, { useState } from 'react';

const OriginTemplate = props => {
    const [isOpen, setIsOpen] = useState(false);

    function handleOpen() {
        setIsOpen(true);
    }
    function handleClose() {
        setIsOpen(false);
    }

    function openModalOriginsTemplate(){
        setIsOpen(true);
    }
    return (
        <div>
            <Header />
            <div className="container">            
            
                <Modal
                    open={isOpen}
                    onClose={handleClose}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description">
                
                    <div >
                    Hello world !     
                    </div>
                </Modal>

                <Origin narratives = {props.narratives} openModal={openModalOriginsTemplate} />
            </div>
            <style jsx>{`
                .container {
                    background: black;
                }
            `}</style>
        </div>
    );
}

export default OriginTemplate;