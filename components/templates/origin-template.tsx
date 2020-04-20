import Header from '../organisms/Header';
import CrossDelete from'../atoms/CrossDelete/CrossDelete';
import Origin from '../organisms/OriginOrganism';
import Modal from '@material-ui/core/Modal';
import React, { useState, Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ModalVersioningTemplate from './modal-versioning-template';

const OriginTemplate = props => {
    const [isOpen, setIsOpen] = useState(false);
    const [modalContent, setModalContent] = useState('alternate');
    const [modalVersioning, setModalVersioning] = useState('alternateVersioning');
    const [activeUuid, setActiveUuid,] = useState('uuid');
   
    const useStyles = makeStyles((theme) => ({
        versioning: {
          position: 'absolute',
          top:'0px',
          left:'0px',
          background: 'black',
          color: 'white',
          width: '100%',
          height:'100%',
          margin: 'auto',
          border: '2px solid #000',
          boxShadow: theme.shadows[5],
        },
      }));


    const classes = useStyles();

    const content = (
        <div className={classes.versioning} >
            <div className="cross" onClick={ToggleSatusModal}>
                <CrossDelete />
            </div>
            <article>
                <div>
                    <p>
                        {modalContent}
                    </p>
                    <button onClick={handleSaveAndClose}>SAVE AND CLOSE</button>
                </div>
                <div>
                    {modalVersioning}
                </div>
            </article>
            <style global jsx>{`
            .cross {
                position:absolute;
                top:20px;
                right:20px;
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
       
    );
     function ToggleSatusModal() {
        
        if (isOpen === true) {
            setIsOpen(false);
        } else {
            setIsOpen(true);
        }
      } 

    function handleSaveAndClose() {
        alert('save');
        ToggleSatusModal();
        
    }
    function openModalOriginsTemplate(uuid){
        const myNarrative = getNarrative(uuid);
        setActiveUuid(uuid);
    }
    console.log(' mon uuid est : '+activeUuid);

// my fetch narrative function

      function getNarrative(uuid) {
        fetch('http://127.0.0.1:8000/api/narratives/'+uuid+'.json')
        .then(response => {
            return response.json();
            }).then(data => {
                setIsOpen(true);
                setModalContent(data.content);
                setModalVersioning( data.fragments.map(fragment => (<p key={fragment.uuid}>{fragment.content}</p>)));
                });
    }   
 
    return (
        <div>
            <Header />
            <div className="container">              
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