import TextBox from '../../atoms/TextBox/TextBox';
import NarrativeMenu from '../NarrativeMenuMolecule/NarrativeMenuMolecule';
import CrossDelete from '../../atoms/CrossDelete/CrossDelete';
import IconDisplay from '../../atoms/IconDisplay/IconDisplay';
import React, { useState } from 'react';

const Narrative = props => {
    const [isActive, setIsActive] = useState(false);
    const [narrativeContentState, setNarrativeContentState] = useState(props.narrative.content);

    function openModalNarrative() {
        props.openModal();
    }

    function setContent(content) {
        setNarrativeContentState(content);
    }

    function saveNarrative() {

        const body = {
            "uuid": props.narrative.uuid,
            // replace with narrative content from form
            "content": narrativeContentState,
            "type": "narrative",
            "fiction_uuid": "1b7df281-ae2a-40bf-ad6a-ac60409a9ce6"
        };

        const response = fetch('http://127.0.0.1:8000/api/narratives', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
          })

        alert("Save ok");
    }

    function handleClick() {
        props.onClick(props.narrative.uuid);
    }

    function getClassNames() {
        if (props.isActive == 'true') {
            return "";
        }
        else {
            return "hidden";
        }
    }
    
    return (
        <article className='element' onClick={handleClick} >

            <aside className={getClassNames()}>
                <NarrativeMenu
                    openModal={openModalNarrative} 
                    narrative={narrativeContentState} 
                    saveNarrative={saveNarrative} 
                    setContent={setContent}
                />
            </aside>

            <div className = 'content'>
                
                <div className="textBox">
                    <TextBox content = {narrativeContentState} setContent={setContent} />
                </div>
                
                <div className = 'delete'>
                    <CrossDelete />
                </div>
                
                <div className = 'display'>
                    <IconDisplay />
                </div>
            </div>

            <style jsx>{`
                .element {
                    display: flex;
                    align-items: center;
                }

                .textBox {
                    margin-bottom: 9px;
                }
                
                .display {
                    position: absolute;
                    bottom: 1px;
                    width: 4%;
                    left: 46%;
                    color: white;
                }

                .delete {
                    position: absolute;
                    right: 6px;
                    top: 3px;
                    color: white;
                }

                .content {
                    width: 650px;
                    margin-top: 5px;
                    position: relative;
                }

                .hidden {
                    visibility: hidden;
                }

            `}</style>

        </article>
    );
}

export default Narrative;