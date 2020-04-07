import OriginTemplate from '../../components/templates/origin-template';
import fetch from 'isomorphic-unfetch';

const Origin = props => {
    return (
        <OriginTemplate  narratives = {props.narratives}/>    
    );
}

Origin.getInitialProps = async function (context) {
    const uuid = context.query.uuid;
    const res = await fetch('http://127.0.0.1:8000/api/origins/'+uuid+'.json');
    const narratives = await res.json();
    return { narratives: narratives};
}

export default Origin;