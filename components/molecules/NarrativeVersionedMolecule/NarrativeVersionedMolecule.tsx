import TextBox from "../../atoms/TextBox/TextBox";
import React, { useState } from 'react';

const NarrativeVersionedMolecule = props =>  {

    const [currentNarrativeContent , setCurrentNarrativeContent] = useState(props.narrative.content)

    function handleFragmentClick(event){
        //  todo: change dynamicly textbox content
        var currentValue = event.target.value;
        setCurrentNarrativeContent(currentValue);
    } 
    
    function saveAndClose() {
        props.save();
    }
    
    function setContentByChild(content) {
        setCurrentNarrativeContent(content);
        props.setNarrativeContent(content);
    }

    return (
        <div className='element'>
            <section>
                <TextBox content = {currentNarrativeContent}  setContent={setContentByChild}/> 
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
                    width:70%;
                    margin:auto;
                    display:flex;
                    flex-direction:row;   
                }
                .fragment {
                    margin-bottom:20px;
                }
                section {
                    margin: 50px 20px 0px 20px;
                    width : 50%;
                }
                button {
                    display:block;
                    margin:auto;
                    margin-top: 20px;
                    background: black;
                    color:white;
                    border:1px solid white;
                    border-radius: 5px;
                    text-align:center;
                    padding:10px 10px 10px 10px;
                }
            `}</style>
        </div>
    );

}

export default NarrativeVersionedMolecule;