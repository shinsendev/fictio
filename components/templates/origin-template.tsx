import Header from '../organisms/Header';
import Origin from '../organisms/OriginOrganism';
import Modal from '@material-ui/core/Modal';
import React, { useState, Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Narrative from '../molecules/NarrativeMolecule/NarrativeMolecule';

const OriginTemplate = props => {
    const [isOpen, setIsOpen] = useState(false);
    const [modalContent, setModalContent] = useState('alternate');
    //const [activeUuid, setActiveUuid] = React.useState('');
   
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
    function openModalOriginsTemplate(uuid){
        // narrative = getNarrative;
        const myNarrative = getNarrative(uuid);
        console.log('getNarrative');
        console.log(myNarrative); 
        setIsOpen(true);
        setModalContent(uuid);
        console.log('setIsOpen');
        console.log(uuid);
    }
    
/*     function setActiveNarrativeUuid(uuid) {
        setActiveUuid(uuid);
        console.log('setActiveNarrativeUuid');
        
    } */

// my fetch narrative function
     function getNarrative(uuid) {
        fetch('http://127.0.0.1:8000/api/narratives/'+uuid+'.json')
          .then(response => {
              alert('hello');
              return 'response.json()';
        }); 
      }

  /*     function getNarrative(uuid) {
          const xhr = new XMLHttpRequest();
          const url = 'http://127.0.0.1:8000/api/narratives/'+uuid+'.json';
         // const narrativeData = 'json';
          xhr.responseType = 'json' ;
          xhr.onreadystatechange = ()=> {
              if(xhr.readyState === XMLHttpRequest.DONE){
                  return xhr.response;
              }
              xhr.open('GET',url);
              xhr.send();
          }
      } */

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
                        <div>{content}</div>
                    </div>
                </Modal>

                <Origin 
                    narratives={props.narratives} 
                    openModal={openModalOriginsTemplate} 
                     />
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