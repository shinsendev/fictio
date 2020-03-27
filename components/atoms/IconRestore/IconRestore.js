import React from 'react';
import { Restore } from '@material-ui/icons';

const IconRestore = props => {

    function createRestoreModal() {
        alert('hello');
    }

    return (
        <article className='element' onClick={createRestoreModal}>
            <Restore fontSize="large"/>
            
            <style jsx>{`
                article {
                    color:black;
                }
            `}</style>
        </article>
    );
}

export default IconRestore;