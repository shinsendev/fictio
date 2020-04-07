import Header from '../organisms/Header';
import Origin from '../organisms/Origin';
import Modal from '@material-ui/core/Modal';
import fetch from 'isomorphic-unfetch';
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const OriginTemplate = props => {
    const [isOpen, setIsOpen] = useState(false);
    const [modalContent, setModalContent] = useState('alternate');
    const [activeUuid, setActiveUuid] = React.useState('');
   
    const useStyles = makeStyles((theme) => ({
        versioning: {
          position: 'absolute',
          background: 'black',
          color: 'white',
          width: '90%',
          margin: 'auto',
          border: '2px solid #000',
          boxShadow: theme.shadows[5],
          padding: theme.spacing(2, 4, 3),
        },
      }));


    const classes = useStyles();

    const content = (
        <div className={classes.versioning}>
        <p>
            {modalContent}
        </p>
        </div>
    );
    function handleOpen() {
        setIsOpen(true);
    }
    function handleClose() {
        setIsOpen(false);
    }
    function openModalOriginsTemplate(){

       /*  getNarrative(props.narratives[0].uuid); */
        
       
        setIsOpen(true);
        setModalContent('toto');
        console.log('setIsOpen');
        console.log(activeUuid);
    }
    
    function setActiveNarrativeUuid(uuid) {
        setActiveUuid(uuid);
        console.log('setActiveNarrativeUuid');
    }
// my fetch narrative function
 /*    function getNarrative(uuid) {
        fetch('http://127.0.0.1:8000/api/narratives/'+uuid+'.json')
          .then(response => response.json())
          .then(data => this.setState({ data }));   
          console.log(data) ;
      }  */

    return (
        <div>
            <Header />
            <div className="container">            
            
                <Modal
                    open={isOpen}
                    onClose={handleClose}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description">
                    <div>
                        {content}
                    </div>
                </Modal>

                <Origin 
                    narratives={props.narratives} 
                    openModal={openModalOriginsTemplate} 
                    activeNarrativeUuid={setActiveNarrativeUuid} />
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