import Narrative from "./Narrative";


export default function TextList(props) {

    const Narratives = (props) => {

        for (var i = 0; i < props.items.length; i++)
        {
            <Narrative item = {props.items[i]} />
        }

        return <Narrative item = {props.items[i]} />
    };

    //todo : to replace with real data from API
    let data = [
        {
            "title": "My Narrative Title", "content": "My Narrative Content", "type": "narrative", "created_at": "10/02/2020"
        },
        {
            "title": "My Narrative Title 2", "content": "My Narrative Content 2", "type": "narrative", "created_at": "10/02/2020"
        },
        {
            "title": "My Narrative Title 3", "content": "My Narrative Content 3", "type": "character", "created_at": "10/02/2020"
        }
    ];

    return (
    <div>
        <div>
            <h2>{props.title}</h2>
            {/*<Narratives items = {data} />*/}
            <Narrative item = {data[0]} />
            <Narrative item = {data[1]} />
            <Narrative item = {data[2]} />
            <style jsx>{`
                h2 {
                    text-transform: uppercase;
                    text-decoration: underline
                }
            `}</style>
        </div>
    </div>
    )
}