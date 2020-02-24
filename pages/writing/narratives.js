import Layout from '../../components/Layout';
import uuid from 'uuid';
import {useState} from 'react';

const WritingNarrative = (props) => {    

    const [count, setCount] = useState(0);
    const [narrativeUuid, setNarrativeUuid] = useState(getNarrativeUuid(props.narrativeUuidToUpdate));

    function getNarrativeUuid(propsUuid) {
        // if there is a props, it's an update and we use the narrative uuid send
        if(propsUuid) {
            return propsUuid;
        }

        // else we generate a new uuid
        return uuid.v4();
    }
    
    function saveAction() {
        let title = (document.getElementById('narrativeTitle')).value;
        let content = (document.getElementById('narrativeContent')).value;

        // if user saves many times, she needs to keep the same uuid
        if (!narrativeUuid) {
            setNarrativeUuid(getNarrativeUuid(props.narrativeUuidToUpdate, narrativeUuid));
        }
        
        const data = {
            "uuid": narrativeUuid,
            "type": "narrative",
            "title": title,
            "content": content,
            "fiction_uuid": '1b7df281-ae2a-40bf-ad6a-ac60409a9ce6'
        };

        const response = fetch(process.env.edoAPIUrl+'narratives', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        }).then((response)=> {
            if (!response.ok) {
                throw new Error('Error during saving.')
            }
            alert(`Text "${narrativeUuid}" has been saved with content "${content}"`);
            return response.json();
        });
    }

    return (
        <Layout>
            <div className="container">
                <aside>
                    <h2>Narratives</h2>
                    <div>
                        <button>char</button>
                    </div>
                </aside>

                <div className="main">
                    <div className="tabs">
                        <span>Tab 1</span>
                        <span>Tab 2</span>
                        <span>Tab 3</span>
                    </div>

                    <form>
                        <input type="text" id='narrativeTitle'/>
                        <textarea id='narrativeContent'></textarea>
                    </form>
                </div>

                <aside>
                    <button onClick={saveAction}>save</button>
                </aside>
            </div>
            <style jsx>{`
                .container {
                    display:grid;
                    grid-template-columns: 2fr 8fr 2fr;
                    border-right: 1px solid grey;
                    border-bottom: 1px solid grey;
                }

                textarea {
                    width:100%;
                }

                aside {
                    padding: 3px 12px;
                }

                h2 {
                    transform: rotate(-90deg);
                }

                #narrativeTitle {
                    width: 100%;
                    margin-bottom:6px;
                    font-size:1.5em;
                }

                textarea {
                    min-height: 600px;
                    font-size:1.5em;
                }
            `}</style>
        </Layout>
    );
}

export default WritingNarrative;