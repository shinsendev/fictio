import NarrativeVersionedMolecule from '../components/molecules/NarrativeVersionedMolecule/NarrativeVersionedMolecule';
import fetch from 'isomorphic-unfetch';
import Modal from '@material-ui/core/Modal';
import React, { useState } from 'react';


const About = props => {

    const [isOpen, setIsOpen] = React.useState(false);

    function handleOpen() {
        setIsOpen(true);
    }
    function handleClose() {
        setIsOpen(false);
    }

    return (
        <div>
            <button onClick={handleOpen} >OpenModal</button>
            <Modal
                open={isOpen}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description">
            
                <div >
                   Hello world !     
                </div>
            </Modal>
            <NarrativeVersionedMolecule narrative={props.narrative} />
        
        </div>
    );
}

About.getInitialProps = async function (context) {
    const res = await fetch('http://127.0.0.1:8000/api/narratives/d7d4899d-9b1c-44cd-8406-8c839c16f79f.json');
    const json = await res.json();
    return { narrative: json};
}

export default About;