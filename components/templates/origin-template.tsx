import Header from '../organisms/Header';
import CrossDelete from'../atoms/CrossDelete/CrossDelete';
import Origin from '../organisms/OriginOrganism';
import Modal from '@material-ui/core/Modal';
import React, { useState, Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
//import theme from '../src/theme';
import Narrative from '../molecules/NarrativeMolecule/NarrativeMolecule';
import useSWR from 'swr';

const OriginTemplate = props => {
    const [isOpen, setIsOpen] = useState(false);
    const [modalContent, setModalContent] = useState('alternate');
    const [modalVersioning, setModalVersioning] = useState('alternateVersioning');
    //const [activeUuid, setActiveUuid] = React.useState('');
   
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
          //padding: theme.spacing(2, 4, 3),
        },
      }));


    const classes = useStyles();

    const content = (
        <div className={classes.versioning} >
            <div className="cross" onClick={handleClose}>
                <CrossDelete />
            </div>
            <article>
                <div>
                    <p>
                        {modalContent}
                    </p>
                    <button onClick={handleClose}>Save and Close </button>
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
                    margin-bottom : 2%;
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
    function handleOpen() {
        setIsOpen(true);
    }
    function handleClose() {
        setIsOpen(false);
    }
    function openModalOriginsTemplate(uuid){
        const myNarrative = getNarrative(uuid);
    }
    
// my final fetch narrative function

      function getNarrative(uuid) {
        fetch('http://127.0.0.1:8000/api/narratives/'+uuid+'.json')
        .then(response => {
            //alert('hello');
            return response.json();
            }).then(data => {
                setIsOpen(true);
                setModalContent(data.content);
                setModalVersioning( data.fragments.map(fragment => (<p key={fragment.uuid}>{fragment.content}</p>)));
                console.log('setIsOpen');
                });
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