import Header from '../organisms/Header';
import FictionOrganism from '../organisms/FictionOrganism';

const FictionTemplate = props => {
    
    return (
        <div className='container'>
            <Header />
            <FictionOrganism fiction={props.fiction}/>
            <style jsx>{`
                .container {
                    background: black;
                }
            `}</style>
        </div>
    );
}
export default FictionTemplate;