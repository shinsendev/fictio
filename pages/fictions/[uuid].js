import fetch from 'isomorphic-unfetch';
import React from 'react';
import FictionTemplate from '../../components/templates/fiction-template';

const Fiction = props => {

    return(
        <FictionTemplate fictionsData={props.fictionsData}/>
    );
}

Fiction.getInitialProps = async function (context) {
    const uuid = context.query.uuid;
    const res = await fetch(process.env.edoAPIUrl+'fictions/'+uuid+'.json');
    const fictionsData = await res.json();
    return {fictionsData};
}

export default Fiction;