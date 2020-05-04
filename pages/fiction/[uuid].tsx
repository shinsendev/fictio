import fetch from 'isomorphic-unfetch';
import NarrativesList from '../../components/model/NarrativesList';
import React from 'react';
import FictionTemplate from '../../components/templates/fiction-template';

const Fiction = props => {
    const OriginPageContext = React.createContext({});

    return (
        <OriginPageContext.Provider value={props.narratives}>
            <FictionTemplate  narratives = {props.narratives}/>
        </OriginPageContext.Provider>
    );
}

Fiction.getInitialProps = async function (context) {
    const uuid = context.query.uuid;
    const res = await fetch(process.env.edoAPIUrl+'origins/'+uuid+'.json');
    const narrativesData = await res.json();

    // we set an object for Narrative List
    // is it really helpfull? usefull? It's a kind of wrapper of the Edo Payload
    const narrativesList = new NarrativesList(narrativesData);
    // we will use this objetct to set it as a global state, maybe we don't really need this model?

    return narrativesList;
}

export default Fiction;