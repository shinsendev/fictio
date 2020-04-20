import CrossDelete from'../atoms/CrossDelete/CrossDelete';
import Origin from '../organisms/OriginOrganism';
import Modal from '@material-ui/core/Modal';
import React, { useState, Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const ModalVersioningTemplate = props => {

    const [isOpen, setIsOpen] = useState(props.isOpen);

    function closeModal() {
        props.closeModal();
    }

    function save() {
        alert('save');
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

        return (
            <div className={classes.versioning} >

                <div className="cross" onClick={closeModal}>
                    <CrossDelete />
                </div>

                <article>
                    <div>
                        <p>
                            {content}
                        </p>
                        <button onClick={save}>save & close</button>
                    </div>
                    <div>
                        {fragments.map(fragment => {
                            return (
                            <article>
                                <p key={fragment.uuid}>{fragment.content}</p>
                            </article>
                            )}
                        )}
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