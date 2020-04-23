import TextBox from "../../atoms/TextBox/TextBox";
import React, { useState } from 'react';

const NarrativeVersionedMolecule = props =>  {

    const [currentNarrativeContent , setCurrentNarrativeContent] = useState(props.narrative.content)

    function handleFragmentClick(event){
        //  todo: change dynamicly textbox content
        var currentValue = event.target.value;
        setCurrentNarrativeContent(currentValue);
        //props.setNarrativeContent(event.target.value);
        alert(currentNarrativeContent);
    } 
    
    function saveAndClose() {
        props.save();
    }
    
    function setContentByChild(content) {
        setCurrentNarrativeContent(content);
    }

    function setNarrativeContent(content) {
        if(content){
            props.setNarrativeContent(content);
            return content;
        }
        return props.narrative.content;
    }

    return (
        <div className='element'>
            <section>
                <TextBox content = {currentNarrativeContent}  /> 
                <button onClick={saveAndClose}>save & close</button>
            </section>
            <section>
                {props.narrative.fragments.map(fragment => 
                <article className='fragment' key = {fragment.uuid} onClick={() => handleFragmentClick(event)}  >
                    <TextBox content = {fragment.content}  />  
                </article>
                )}
            </section>
        
            <style jsx>{`
                .element {
                
                    height: 300px;
                }

                .fragment {
                    margin-top:10px;
                }
            `}</style>
        </div>
    );

}

export default NarrativeVersionedMolecule;