import NarrativeMolecule from '../molecules/NarrativeMolecule/NarrativeMolecule';
import NarrativeList from '../model/NarrativesList';
import React from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

const Origin = props => {
    const [activeUuid, setActiveUuid] = React.useState('');
    const narrativeList = new NarrativeList(props.narratives);      

    function openModalOrigin() {
        props.openModal();
    }

    function handleClick(key) {
        setActiveUuid(key);
    }

    function handleOnDragEnd() {
        // to do
    }

    return (
        <div className="element">
            <DragDropContext onDragEnd={handleOnDragEnd} >
                <Droppable droppableId='OriginDroppable' >
                    {(provided) => (
                        <div className='narrativesList' 
                            innerRef={provided.innerRef}
                            { ...provided.droppableProps } >
                            
                            {props.narratives.map( (narrative,index) => 
                                    <NarrativeMolecule 
                                        isActive={`${(narrative.uuid == activeUuid) ? true : false}`} 
                                        key={narrative.uuid} 
                                        narrative={narrative} 
                                        onClick={() => handleClick(narrative.uuid)}
                                        openModal={openModalOrigin} 
                                        index = {index}/>
                            )}
                            {provided.placeholder}
                        </div>
                    )}

                </Droppable>
                    <style jsx>{`
                        .element {
                            max-width: 800px;
                            margin: auto;
                        }

                        p {
                            color:white;
                        }
                    `}</style>
            </DragDropContext>
        </div>

    );
}

export default Origin;