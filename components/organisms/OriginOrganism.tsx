import NarrativeMolecule from '../molecules/NarrativeMolecule/NarrativeMolecule';
import NarrativeList from '../model/NarrativesList';
import React from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { resetServerContext } from 'react-beautiful-dnd';
import { renderToString } from 'react-dom/server';


const Origin = props => {
    // for using drag and drop
    resetServerContext();

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