import React from 'react';
import { Save } from '@material-ui/icons';

const IconSave = props => {

    function saveContent() {
        alert('hello');
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
            `}</style>
        </article>
    );
}

export default IconSave;