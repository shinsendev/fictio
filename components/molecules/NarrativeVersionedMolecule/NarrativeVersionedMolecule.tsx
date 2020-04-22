import TextBox from "../../atoms/TextBox/TextBox";
import React, { useState } from 'react';

const NarrativeVersionedMolecule = props =>  {

    function handleClick(event){
        props.handleClick(event);
        props.save(event.target.value);
    } 

    return (
        <div className='element'>
            <h2>Narrative Version Molecule</h2>
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