import CrossDelete from'../atoms/CrossDelete/CrossDelete';
import Origin from '../organisms/OriginOrganism';
import Modal from '@material-ui/core/Modal';
import React, { useState, Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextBox from '../../components/atoms/TextBox/TextBox';
import NarrativeVersionedMolecule from '../../components/molecules/NarrativeVersionedMolecule/NarrativeVersionedMolecule';

const ModalVersioningTemplate = props => {
    const [isOpen, setIsOpen] = useState(props.isOpen);
    const [narrativeState, setNarrativeState] = useState(props.narrativeState);
    const [versionnedState, setVersionnedState] = useState('');
    const [currentNarrativeContent , setCurrentNarrativeContent] = useState(null);

    function closeModal() {
        props.closeModal();
    }

    function save() {

        const body = {
            "uuid": props.narrative.uuid,
            "content": currentNarrativeContent,
            "type": "narrative",
            "fiction_uuid": "1b7df281-ae2a-40bf-ad6a-ac60409a9ce6"
        };

        const response = fetch(process.env.edoAPIUrl+'narratives', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
          });
        
        props.refreshNarrative(props.narrative.uuid, currentNarrativeContent);
        //todo: replace with a real modal
        alert("Save ok");
        props.closeModal();
    }
    
    function setNarrativeContent(content) {
        setCurrentNarrativeContent(content);
    }

    function getContent(narrative) {
        var content = 'loading...';
        var fragments = [];

        if (narrative) {
            content = props.narrative.content;
            fragments = narrative.fragments;
        }

        const useStyles = makeStyles((theme) => ({
            versioning: {
              position: 'absolute',
              top:'37px',
              background: 'black',
              color: 'white',
              width: '100%',
              height:'100%',
              boxShadow: theme.shadows[5],
            },
          }));

        const classes = useStyles();

       function handleClick(event){
            setNarrativeState(event.target.value);       
        }

        return (
            <div className={classes.versioning} >

                <div className="cross" onClick={closeModal}>
                    <CrossDelete />
                </div>
                <article>
                    <div>
                        <NarrativeVersionedMolecule 
                            narrative= {narrative} 
                            handleClick = {handleClick} 
                            save = {save}
                            setNarrativeContent = {setNarrativeContent}
                            />
                    </div>
                        
                </article>
                <style global jsx>{`
                    .cross {
                        position:absolute;
                        top:20px;
                        right:15%;
                    }

                    .cross:hover {
                        cursor:pointer;
                    }
                `}</style>
        </div>
        )
    }

    return(    
        <div >
            <Modal
                open={props.isOpen}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description">
                {getContent(props.narrative)}
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