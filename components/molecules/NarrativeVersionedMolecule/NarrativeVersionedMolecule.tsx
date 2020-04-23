import TextBox from "../../atoms/TextBox/TextBox";
import React, { useState } from 'react';

const NarrativeVersionedMolecule = props =>  {

    function handleClick(event){
        props.save(event.target.value);
    } 
    
    function saveAndClose() {
        props.saveAndClose();
    }
    
    function setNarrativeContent(content) {
        props.setNarrativeContent(content);
    }

    return (
        <div className='element'>
            <section>
                <TextBox content = {props.narrative.content} setContent={setNarrativeContent}/> 
                <button onClick={saveAndClose}>save & close</button>
            </section>
            <section>
                {props.narrative.fragments.map(fragment => 
                <article className='fragment' key = {fragment.uuid} onClick={() => handleClick(event)}  >
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