import CrossDelete from'../atoms/CrossDelete/CrossDelete';
import Origin from '../organisms/OriginOrganism';
import Modal from '@material-ui/core/Modal';
import React, { useState, Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const ModalVersioningTemplate = props => {
    const [modalContent, setModalContent] = useState(props.content);
    const [modalVersioning, setModalVersioning] = useState('alternateVersioning');

    //const [activeUuid, setActiveUuid,] = useState('uuid');
    //  0 - tests de propagation de le modal 
    //  1 - j' active la modal depuis origin-Template
    //  2 - je fais passer les donnees depuis origin-Template

    // function openModalVersionningTemplate(uuid){
    //     const myNarrative = getNarrative(uuid);
    // }

    function getNarrative() {
    fetch('http://127.0.0.1:8000/api/narratives/'+props.activeUuid+'.json')
    .then(response => {
        return response.json();
        }).then(data => {
           // setIsOpen(true);
            setModalContent(data.content);
            console.log(props.activeUuid);
            setModalVersioning( data.fragments.map(fragment => (<p key={fragment.uuid}>{fragment.content}</p>)));
            });
    }

    return(    
        <div >
            <Modal
                    open={props.isOpen}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description">
                    <div> 
                        <p>{props.content}</p>
                    </div>
            </Modal>
            <style global jsx>{`
                h1,h2,p {
                    color:white;
                }
            `}</style> 
        </div> 
    )
}

export default ModalVersioningTemplate;