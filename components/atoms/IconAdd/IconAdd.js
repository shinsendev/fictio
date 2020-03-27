import React from 'react';
import { Restore } from '@material-ui/icons';

const IconAdd = props => {

    function saveContent() {
        alert('hello');
    }

    return (
        <article className='element' onClick={saveContent}>
            <Restore fontSize="small"/>
            
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

export default IconAdd;