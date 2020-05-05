import FictionTemplate from '../../components/templates/fictionTemplate';
import fetch from 'isomorphic-unfetch';

const Fiction = props => {
    return(
        <FictionTemplate fictionsData={props.fictionsData}/>
    );
}

Fiction.getInitialProps = async function (context) {
    const uuid = context.query.uuid;
    const res = await fetch(process.env.edoAPIUrl+'fictions/'+uuid+'.json');
    //todo : handle errors
    const fictionsData = await res.json();
    return {fictionsData};
}

export default Fiction;