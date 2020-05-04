import Header from '../organisms/Header';
import Origin from '../organisms/OriginOrganism';
import React, { useState, Fragment } from 'react';
import ModalVersioningTemplate from './modal-versioning-template';

const OriginTemplate = props => {
    const [isOpen, setIsOpen] = useState(false);
<<<<<<< HEAD
    const [activeNarrative, setActiveNarrative] = useState(null);
    const [updatedNarrative, setupdatedNarrative] = useState([]);

    function closeModal() {
        setIsOpen(false);
    }

    function openModalOriginTemplate(uuid) {
        // get one narrative to get its fragments
        fetch(process.env.edoAPIUrl + 'narratives/' + uuid + '.json')
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Request failed!');
        })
        .then(data => {
                // we need to create a variable to keep the data, if not, states are not changed
                const narrative = data;
                setActiveNarrative(narrative);
                setIsOpen(true);
        })
        .catch((networkError) => {
            console.log('Error when fetching in origin template : ' + networkError.message);
          });
        ;
    }
    
    function refreshUpdatedNarrative(uuid:string, content:string) {
        setupdatedNarrative([uuid, content]);
    }
    
    function updateNarrative(narrative) {
        if(updatedNarrative['uuid'] === narrative.uuid) {   
            console.log('oui  '+narrative.content);
        }
    }
 
    return (
        <div>
            <Header />
            <div className="container">
                <ModalVersioningTemplate 
                    narrative={activeNarrative}
                    isOpen={isOpen}
                    closeModal={closeModal}
                    refreshNarrative= {refreshUpdatedNarrative}
                />
                <Origin
                    narratives={props.narratives} 
                    openModal={openModalOriginTemplate}
                    updateNarrative={updateNarrative}
                />
=======
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
>>>>>>> 9e52e13d37144a5bc986952a329991858f223714
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