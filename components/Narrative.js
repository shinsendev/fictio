const NarrativeElement = props => {
    return (
        <div>
            <article>
                <div className="header">
                    <div className="narrative-title">{props.item.title}</div>

                    <div className="narrative-info">
                        <div className="type-wrapper">
                            <span className="type">{props.item.type}</span>
                        </div>
                        <span className="created-at">last update {props.item.created_at}</span>
                    </div>
                </div>

                <div className="main">{props.item.content}</div>

                <div className="more action">more</div>

                <aside>
                    <div className="delete action">x</div>
                </aside>
            </article>

            <style jsx>{`
                article {
                    border: 1px solid grey;
                    border-radius: 3px;
                    font-family: 'Roboto', sans-serif;
                    font-size: 12px;                        
                    margin-bottom: 3px;
                    padding: 3px 6px 0px 6px;
                    position: relative;
                    display: grid;
                    grid-template-rows: 2fr 3fr 1fr;
                }

                .action {
                    cursor: pointer;
                    text-decoration: underline
                }

                .header {
                    padding-top: 3px;
                    grid-row: 1 / 2;
                    display: grid;
                    grid-template-columns: 7fr 5fr;
                    // grid-gap: 10px;
                    // grid-auto-rows: minmax(45px, auto); 
                }

                .main {
                    grid-row: 2 / 3;
                }

                .more {
                    grid-row: 3 / 4;
                    text-align: center;
                    margin-bottom: 3px;
                }

                .narrative-title {                            
                    font-weight: bold;
                    font-size: 14px;
                    grid-column: 1 / 2;
                }

                .narrative-info {
                    grid-column: 2 / 3;
                    display: grid;
                    grid-template-columns: 4fr 8fr;
                }

                .type {
                    padding: 0px 3px;
                    margin-left: 6px;
                    border: 1px solid black;
                    border-radius: 3px;
                }

                .created-at {
                    margin-left: 6px;
                    font-size:10px;                                    
                }
                
                .delete:hover {
                    color: red;
                    cursor:pointer;
                }

                .delete {
                    position: absolute;
                    right: 1px;
                    top: 1px;
                    padding: 0px 3px;
                    text-decoration: none;
                }

                .content {
                    border: 1px solid black;
                    grid-row: 2/3;
                }
            `}</style>
        </div>

    )
};

export default function Narrative(props) {
    return (
        <NarrativeElement item={props.item} />
    )
};
