import Narrative from '../molecules/Narrative/Narrative'
import React, { useState } from 'react';

const Origin = props => {
    const [activeUuid, setActiveUuid] = React.useState('');

    function handleClick(key) {
        console.log('dans le handle click?');
        setActiveUuid(key);
    }

    return (
        <div className="element">
            {props.narratives.map(narrative => 
                <Narrative isActive={`${(narrative.uuid == activeUuid) ? true : false}`} key={narrative.uuid} narrative={narrative} onClick={() => handleClick(narrative.uuid)}/>
            )}
            <style jsx>{`
                .element {
                    max-width: 800px;
                    margin: auto;
                }

                p {
                    color: white;
                }
            `}</style>
        </div>
    );
}

export default Origin;