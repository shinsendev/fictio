const NarrativeContent = props => {
    return (
        <article>
            <h3>{props.item.title}</h3>
            <p>{props.item.created_at}</p>
            <p>{props.item.type}</p>
            <p>{props.item.content}</p>
        </article>

    )
};


export default function Narrative(props) {
    return (
        <div>
            <NarrativeContent item={props.item}>
            </NarrativeContent>
            <style jsx>{`
            p {
                color: red;
            }
        `}</style>
        </div>

    )
};
