import Narrative from '../molecules/Narrative/Narrative'

const Origin = props => {
    return (
        <div className="element">
            {props.narratives.map(narrative => 
                <article key = {narrative.uuid}>
                    <Narrative narrative = {narrative} />
                </article>
            )}
            <style jsx>{`
                .element {
                    max-width: 800px;
                    margin: auto;

                }
            `}</style>
        </div>
    );
}

export default Origin;