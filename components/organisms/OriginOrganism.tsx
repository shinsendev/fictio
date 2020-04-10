import NarrativeMolecule from '../molecules/NarrativeMolecule/NarrativeMolecule';
import NarrativeList from '../model/NarrativesList';
import React, {useState} from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { resetServerContext } from 'react-beautiful-dnd';

const Origin = props => {

    // Configuration for drag and drop
    // we reset SSR context
    resetServerContext();
    // set State for column
    const [columnState, setColumnState] = useState('');

    const [activeUuid, setActiveUuid] = React.useState('');
    const narrativeList = new NarrativeList(props.narratives);
    
    function openModalOrigin() {
        props.openModal();
    }

    function handleClick(key) {
        setActiveUuid(key);
    }

    function handleOnDragEnd(result) {
        const {destination, source, draggableId} = result;

        if(!destination) {
            return;
        }

        if (destination.droppableId === source.droppableId && destination.index === source.index) {
            return;
        }

        // we keep in a var the narrative we have dragged
        const selectedNarrative = props.narratives[source.index];
        // we remove the narrative that we have moved        
        props.narratives.splice(source.index, 1);
        // we add the narrative to a new place
        props.narratives.splice(destination.index, 0, selectedNarrative);
    }

    return (
        <div className="element">
            <DragDropContext onDragEnd={handleOnDragEnd} className='dropContext element' >
                <Droppable droppableId='droppable-1' >
                    { provided => (
                        <div 
                            { ...provided.droppableProps } 
                            ref={provided.innerRef}
                            className='narrativesList' 
                        >
                            {props.narratives.map( (narrative,index) => 
                                    <NarrativeMolecule 
                                        isActive={`${(narrative.uuid == activeUuid) ? true : false}`} 
                                        key = {narrative.uuid} 
                                        narrative={narrative} 
                                        onClick={() => handleClick(narrative.uuid)}
                                        openModal={openModalOrigin} 
                                        index = {index}
                                        draggableId = {narrative.uuid}
                                    />
                            )}
                            {provided.placeholder}
                        </div>
                    )}

                </Droppable>
            </DragDropContext>
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