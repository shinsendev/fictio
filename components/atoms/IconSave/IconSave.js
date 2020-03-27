import React from 'react';
import { Restore } from '@material-ui/icons';

const IconSave = props => {

    function saveContent() {
        alert('hello');
    }

    return (
        <article className='element' onClick={saveContent}>
            <Restore fontSize="large"/>
            
            <style jsx>{`
                article {
                    background: black;
                    color:white;
                    width:40px;
                }
            `}</style>
        </article>
    );
}

export default IconSave;