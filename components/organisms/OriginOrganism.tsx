import NarrativeMolecule from '../molecules/NarrativeMolecule/NarrativeMolecule';
import NarrativeList from '../model/NarrativesList';
import React from 'react';
import {DragDropContext} from 'react-beautiful-dnd';

const Origin = props => {
    const [activeUuid, setActiveUuid] = React.useState('');
    const narrativeList = new NarrativeList(props.narratives);      

    function openModalOrigin() {
        props.openModal();
    }

    function handleClick(key) {
        setActiveUuid(key);
    }

    return (
        <div className="element">
            {props.narratives.map(narrative => 
                    <NarrativeMolecule 
                        isActive={`${(narrative.uuid == activeUuid) ? true : false}`} 
                        key={narrative.uuid} 
                        narrative={narrative} 
                        onClick={() => handleClick(narrative.uuid)}
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