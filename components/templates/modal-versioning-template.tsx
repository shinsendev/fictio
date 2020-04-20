import CrossDelete from'../atoms/CrossDelete/CrossDelete';
import Origin from '../organisms/OriginOrganism';
import Modal from '@material-ui/core/Modal';
import React, { useState, Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const ModalVersioningTemplate = props => {
    const [isOpen, setIsOpen] = useState(props.isOpen);
    const [modalContent, setModalContent] = useState('alternate');
    const [modalVersioning, setModalVersioning] = useState('alternateVersioning');
    //const [activeUuid, setActiveUuid,] = useState('uuid');
//  0 - tests de propagation de le modal 
//  1 - j' active la modal depuis origin-Template
//  2 - je fais passer les donnees depuis origin-Template



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
            <h1> Mon titre est : {props.titre} </h1>
            <h2> Mon uuid est : {props.activeUuid} </h2>  
            <div >
                <p>
                    {modalContent}
                </p>
            </div>
            <Modal
                    open={isOpen}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description">
                    <div> 
                        <div><p>texte</p></div>
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