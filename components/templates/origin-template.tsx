import Header from '../organisms/Header';
import Origin from '../organisms/Origin';
import fetch from 'isomorphic-unfetch';

const OriginTemplate = props => {
    return (
        <div>
            <Header />
            <div className="container">
                <Origin narratives = {props.narratives} />
            </div>
            <style jsx>{`
                .container {
                    background: black;
                }
            `}</style>
        </div>
    );
}

export default OriginTemplate;