import React from 'react';
import { Save } from '@material-ui/icons';

const IconSave = props => {

    function save() {
        props.saveNarrative();
    }

    return (
        <article className='element' onClick={save}>
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