import NarrativeMolecule from '../molecules/NarrativeMolecule/NarrativeMolecule';
import NarrativeList from '../model/NarrativesList';
import React, {useState} from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { resetServerContext } from 'react-beautiful-dnd';
import styles from './OriginOrganism.module.css';
import { v4 as uuidv4 } from 'uuid';

const Origin = props => {
    // Configuration for drag and drop
    // we reset SSR context
    resetServerContext();

    // set State for column
    const [columnState, setColumnState] = useState('');
    const [activeUuid, setActiveUuid] = useState('');
    const narrativeList = new NarrativeList(props.narratives);
    const [originState, setOriginState] = useState(props.narratives[0])

    /**
     *
     * @param narrativeUuid
     */
    function postReorder(narrativeUuid) {

        const body = {
            "narrativeUuid": narrativeUuid,
            "position": 1,
            "parentUuid": "6284e5ac-09cf-4334-9503-dedf31bafdd0" //todo = replace with dynamic data
          };

        const response = fetch(process.env.edoAPIUrl + 'reorders', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
          })

        //todo: replace with a real modal
        alert("Reorder ok for " + narrativeUuid);
    }

    /**
     * 
     * @param uuid 
     */
    function openModalOrigin(uuid) {
        props.openModal(uuid);
    }

    /**
     * 
     * @param key 
     */
    function handleClick(narrativeUuid) {
        setActiveUuid(narrativeUuid);
    }

    function searchNarrative(narrative, uuid) {
        var result = null;

        // if narrative uuid is the origin uuid we return it
        if (narrative.uuid === uuid) {
            return narrative;
        }
        else {
            if (narrative.children.length > 0) {
                narrative.children.map(child => {
                    if (child.uuid === uuid) {
                        return child;
                    }
                    else {
                        // it's recursive
                        if(result = searchNarrative(child, uuid)){
                            return result;
                        }
                    }
                })
            }
        }

        return result;
    }

    /**
     * @description we add a new empty narrative to the origin list at the same level than the narrative where we have pressed the add button
     * @param parentUuid 
     */
    function createNarrative(parentUuid) {
        var parent = null;

        // refind the parent narrative with the corresponding uuid
        parent = searchNarrative(originState, parentUuid);

        console.log(parent);
        
        // // generate new uuid and create a new child for this parent
        // const children = parent.children.push({'uuid': uuidv4(), 'content': ''});

        // todo = add correct position in the parent
        // todo = debug 
        // todo = when it's top level, disable add narrative option

        // setOriginState(prevState => {
        //     return {...prevState, children: children}
        // });
    }

    /**
     * 
     * @param result 
     */
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

        // send a post resquest  to edo to save the new position
        postReorder(selectedNarrative.uuid);
    }

    /**
     * 
     * @param children 
     */
    function displayChildren(children) {
        var response = [];
        
        if(children.length > 0) {
            children.map( (child, index) => {
                response.push(displayNarrative(child, index))
            })
        }

        return response;
    }
    
    /**
     * 
     * @param narrative 
     * @param index 
     */
    function displayNarrative(narrative, index = 0) {

        var response = [];

        response.push(
            <article className={styles.lvl} key={narrative.uuid}>
                <NarrativeMolecule 
                    isActive={`${(narrative.uuid === activeUuid) ? true : false}`}
                    key = {narrative.uuid} 
                    narrative={narrative} 
                    onClick={() => handleClick(narrative.uuid)}
                    openModal={openModalOrigin} 
                    index = {index} //todo : to check
                    draggableId = {narrative.uuid}
                    createNarrative={createNarrative}
                />
                {displayChildren(narrative.children)}
            </article>
        );
        
        return response;
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
                            {displayNarrative(originState)}
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