import fetch from 'isomorphic-unfetch';
import Narrative from '../molecules/Narrative/Narrative'

const Origin = props => {
    return (
        <div>
            Hello Origin
            {props.narratives.map(narrative => 
                <article>
                    <Narrative narrative = {narrative} />
                </article>
            )}
        </div>
    );
}

export default Origin;