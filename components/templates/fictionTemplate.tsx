import Header from '../organisms/Header';
import FictionOrganism from '../organisms/FictionOrganism';

const FictionTemplate = props => {
    
    return (
        <div className='container'>
            <Header />
            <FictionOrganism fictionsData={props.fictionsData}/>
            <style jsx>{`
                .container {
                    background: black;
                }
            `}</style>
        </div>
    );
}
export default FictionTemplate;