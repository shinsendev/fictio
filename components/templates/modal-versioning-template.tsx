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
            "content": currentNarrativeContent, //todo : change by content of the content textBox
            "type": "narrative",
            "fiction_uuid": "1b7df281-ae2a-40bf-ad6a-ac60409a9ce6"
        };

        const response = fetch(process.env.edoAPIUrl+'narratives', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
          });

        //todo: replace with a real modal
        /* alert("Save ok");
        props.closeModal();  */
    }
    
    function setNarrativeContent(content) {
        setCurrentNarrativeContent(content);
    }

    function saveAndClose(){
        save();
        //todo: replace with a real modal
        alert("Save ok");
        props.closeModal();
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
              left:'15%',
              background: 'black',
              color: 'white',
              width: '70%',
              height:'100%',
              margin: 'auto',
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
                            saveAndClose = {saveAndClose}
                            setNarrativeContent = {setNarrativeContent}
                            />
                    </div>
                        
                </article>
                <style global jsx>{`
                    .narrativebox {
                        padding:30px 10px 10px 10px;
                    }
                    .cross {
                        position:absolute;
                        top:20px;
                        right:20px;
                    }

                    .cross:hover {
                        cursor:pointer;
                    }

                    article {
                        width:100%;
                        display:flex;
                        flex-direction:row;
                        justify-content:center;
                        padding-top:20px;
                    }

                    div {
                        margin: 0px 10px 0px 10px ;
                        padding:0 5% 0 5% 0 5% 0 5%;
                        flex-direction:column;
                    }

                    p {
                        padding: 10px 20px;
                        background: #262626;
                        color: white;
                        max-width: 650px;
                        border-radius: 5px;
                        min-height: 45px;
                        /* max-height: 150px; */
                        margin-bottom : 10px;
                    }

                    button {
                        display:block;
                        margin:auto;
                        background: black;
                        color:white;
                        border:1px solid white;
                        border-radius: 5px;
                        text-align:center;
                        padding:10px 10px 10px 10px;
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