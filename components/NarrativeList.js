import Narrative from "./Narrative";

export default function NarrativeList(props) {

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
            "title": "My Narrative Title", "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", "type": "narrative", "created_at": "10/02/2020"
        },
        {
            "title": "My Narrative Title 2", "content": "My Narrative Content 2", "type": "narrative", "created_at": "10/02/2020"
        },
        {
            "title": "My Narrative Title 3", "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", "type": "character", "created_at": "10/02/2020"
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