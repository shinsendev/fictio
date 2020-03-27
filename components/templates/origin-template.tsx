import Header from '../organisms/Header';
import Origin from '../organisms/Origin';

const OriginTemplate = props => {
    return (
        <div>
            <Header />
            <Origin uuid={props.uuid}/>
        </div>
    );
}

export default OriginTemplate;