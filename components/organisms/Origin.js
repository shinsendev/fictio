import Narrative from '../molecules/Narrative/Narrative'

const Origin = props => {
    return (
        <div>
            {props.narratives.map(narrative => 
                <article key = {narrative.uuid}>
                    <Narrative narrative = {narrative} />
                </article>
            )}
        </div>
    );
}

export default Origin;