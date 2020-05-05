import FictionTemplate from '../../components/templates/fictionTemplate';
import fetch from 'isomorphic-unfetch';

const Fiction = props => {
    return(
        <FictionTemplate fiction={props.fictionData}/>
    );
}

Fiction.getInitialProps = async function (context) {
    const uuid = context.query.uuid;
    const res = await fetch(process.env.edoAPIUrl+'fictions/'+uuid+'.json');
    //todo : handle errors
    const fictionData = await res.json();
    return {fictionData};
}

export default Fiction;