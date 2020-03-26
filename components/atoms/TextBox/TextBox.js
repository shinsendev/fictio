import React from 'react';

const TextBox = (props) => {
    return (
        <article className='textBox'>
            {props.content}
        <style jsx>{`
            article {
                padding: 10px 20px;
                background: #262626;
                color: white;
                max-width: 650px;
                border-radius: 5px;
            }
        `}</style>
        </article>
    );
}

export default TextBox;