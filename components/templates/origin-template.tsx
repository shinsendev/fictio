import Header from '../organisms/Header';
import Origin from '../organisms/OriginOrganism';
import Modal from '@material-ui/core/Modal';
import React, { useState, Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Narrative from '../molecules/NarrativeMolecule/NarrativeMolecule';

const OriginTemplate = props => {
    const [isOpen, setIsOpen] = useState(false);

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
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
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
        // narrative = getNarrative;
        setIsOpen(true);
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

                <Origin narratives = {props.narratives} openModal={openModalOriginsTemplate} />
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