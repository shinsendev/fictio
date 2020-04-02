import TextBox from '../../atoms/TextBox/TextBox';
import NarrativeMenu from '../NarrativeMenu/NarrativeMenu';
import CrossDelete from '../../atoms/CrossDelete/CrossDelete';
import IconDisplay from '../../atoms/IconDisplay/IconDisplay';
import React, { useState } from 'react';

const Narrative = props => {

    const [isMenuVisible, setIsMenuVisible] = useState(props.isMenuVisible);
    const [isActive, setIsActive] = useState(false);

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
        <article className='element' onClick={handleClick}>

            <aside className={getClassNames()}>
                <NarrativeMenu />
            </aside>

            <div className = 'content'>
                
                <div className="textBox">
                    <TextBox content = {props.narrative.content} />
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