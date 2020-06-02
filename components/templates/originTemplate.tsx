import Header from '../organisms/Header';
import Origin from '../organisms/OriginOrganism';
import React, { useState, Fragment } from 'react';
import ModalVersioningTemplate from './ModalVersioningTemplate';

const OriginTemplate = props => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeNarrative, setActiveNarrative] = useState(null);
    const [updatedNarrative, setupdatedNarrative] = useState([]);

    function closeModal() {
        setIsOpen(false);
    }

    function openModalOriginTemplate(uuid) {
        // get one narrative to get its fragments
        fetch(process.env.edoAPIUrl + 'fragments/' + uuid + '.json')
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

    // todo: correct for re-render
    function refreshUpdatedNarrative(uuid:string, content:string) {
        // setActiveNarrative(prevState => {
        //     return {...prevState, originState}
        // });
        setupdatedNarrative([uuid, content]);
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