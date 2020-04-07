import Narrative from '../molecules/Narrative/Narrative';
import NarrativeVersionedMolecule from '../molecules/NarrativeVersionedMolecule/NarrativeVersionedMolecule';
import React, { useState } from 'react';

const Origin = props => {
    const [activeUuid, setActiveUuid] = React.useState('');

    function openModalOrigin() {
        props.openModal();
    }

    function handleClick(key) {
        setActiveUuid(key);
        console.log('handleClick');
        console.log(activeUuid);
       
        
    }
    
    function sendActiveNarrativeUuidToParent() {
        props.setActiveNarrativeUuid('toto');
        console.log('sendActiveNarrativeUuidToParent');
        console.log(activeUuid);
    }

    return (
        <div className="element">
            {props.narratives.map(narrative => 
                <Narrative 
                    isActive={`${(narrative.uuid == activeUuid) ? true : false}`} 
                    key={narrative.uuid} 
                    narrative={narrative} 
                    onClick={() => handleClick(narrative.uuid)}
                    activeNarrativeUuid={sendActiveNarrativeUuidToParent}
                    openModal={openModalOrigin} />
            )}
            <style jsx>{`
                .element {
                    max-width: 800px;
                    margin: auto;
                }

                p {
                    color:white;
                }
            `}</style>
        </div>
    );
}

export default Origin;