import Narrative from "./Narrative";

const NarrativeList = (props) =>  (
    <div>
        <h2>{props.title}</h2>
        {props.data.slice(0,3).map(narrative => (
            <Narrative key = {narrative.uuid} item = {narrative} />
        ))}
    </div>
);

export default NarrativeList;