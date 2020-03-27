import Header from '../organisms/Header';
import Origin from '../organisms/Origin';
import fetch from 'isomorphic-unfetch';

const OriginTemplate = props => {
    return (
        <div>
            <Header />
            <Origin narratives = {props.narratives} />
        </div>
    );
}

export default OriginTemplate;