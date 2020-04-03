import Narrative from '../molecules/Narrative/Narrative';
import NarrativeVersionedMolecule from '../molecules/NarrativeVersionedMolecule/NarrativeVersionedMolecule';
import React, { useState } from 'react';

const Origin = props => {
    const [activeUuid, setActiveUuid] = React.useState('');

    function handleClick(key) {
        setActiveUuid(key);
    }

    return (
        <div className="element">
            <div>
                <NarrativeVersionedMolecule narrative={props.narratives[0]} />
            </div>

            {props.narratives.map(narrative => 
                <Narrative isActive={`${(narrative.uuid == activeUuid) ? true : false}`} key={narrative.uuid} narrative={narrative} onClick={() => handleClick(narrative.uuid)}/>
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