import React from 'react';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

const TextBox = props => {
    return (
            <article className='textBox'>
            <TextareaAutosize  aria-label="empty textarea" placeholder="Empty" className='textField' >
                {props.content}
            </TextareaAutosize>
            <style jsx>{`
                article {
                    padding: 10px 20px;
                    background: #262626;
                    color: white;
                    max-width: 650px;
                    border-radius: 5px;
                    min-height: 45px;
                    max-height: 150px;
                }

                .textField input {
                    color: white;
                    background: black;
                    width: 100%;
                }
            `}</style>
            </article>
    );
}

export default TextBox;