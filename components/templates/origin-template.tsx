import Header from '../organisms/Header';
import Origin from '../organisms/OriginOrganism';
import React, { useState, Fragment } from 'react';
import ModalVersioningTemplate from './modal-versioning-template';

const OriginTemplate = props => {
    const [isOpen, setIsOpen] = useState(false);
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