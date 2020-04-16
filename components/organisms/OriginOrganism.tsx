import NarrativeMolecule from '../molecules/NarrativeMolecule/NarrativeMolecule';
import NarrativeList from '../model/NarrativesList';
import React from 'react';

const Origin = props => {
    const [activeUuid, setActiveUuid] = React.useState('');
    const narrativeList = new NarrativeList(props.narratives);

    function openModalOrigin(uuid) {
        props.openModal(uuid);
    }

    function handleClick(key) {
        setActiveUuid(key); 
    }
    
    function sendActiveNarrativeUuidToParent(uuid) {
        props.setActiveNarrativeUuid('toto');
    }

    return (
        <div className="element">
            {props.narratives.map(narrative => 
                <NarrativeMolecule 
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