import React from 'react';
import { Save } from '@material-ui/icons';

const IconSave = props => {

    function saveContent() {

        const body = {
            "uuid": props.narrative.uuid,
            // replace with narrative content from form
            "content": "Example of content save with Fictio",
            "type": "narrative",
            "fiction_uuid": "1b7df281-ae2a-40bf-ad6a-ac60409a9ce6"
          };

        //send POST request
        const response = fetch('http://127.0.0.1:8000/api/narratives', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
          })

        // todo: replace with a modal and an more appropriate message
        alert(props.narrative.uuid);
    }

    return (
        <article className='element' onClick={saveContent}>
            <Save fontSize="small"/>
            
            <style jsx>{`
                article {
                    background: black;
                    color:white;
                    width:20px;
                    height:20px;
                    border:1px solid white;
                    border-radius: 50%;
                    text-align:center;
                    padding:10px 10px 10px 10px;
                }

                article:hover {
                    color: grey;
                    cursor: pointer;
                    border: grey 1px solid;
                }
            `}</style>
        </article>
    );
}

export default IconSave;