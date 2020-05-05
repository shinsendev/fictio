import fetch from 'isomorphic-unfetch';
import React from 'react';
import FictionTemplate from '../../components/templates/fiction-template';

const MyFiction = props => {

    function dataTest() {
        alert('ça marche');
        alert(props.fictionsData.title);
    }

    return(
        <FictionTemplate test={dataTest} fictionsData={props.fictionsData}/>
    );
}

  MyFiction.getInitialProps = async function (context) {
    const uuid = context.query.uuid;
    const res = await fetch(process.env.edoAPIUrl+'fictions/'+uuid+'.json');
    const fictionsData = await res.json();

    // we set an object for Narrative List
    // is it really helpfull? usefull? It's a kind of wrapper of the Edo Payload
    //const fictionsList = new FictionsList( fictionsData);
    // we will use this objetct to set it as a global state, maybe we don't really need this model?
    console.log('fictions ok');
    return {fictionsData};
}  
export default MyFiction;