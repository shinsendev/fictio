import TextBox from '../../atoms/TextBox/TextBox';
import NarrativeMenu from '../NarrativeMenu/NarrativeMenu';
import CrossDelete from '../../atoms/CrossDelete/CrossDelete';
import IconDisplay from '../../atoms/IconDisplay/IconDisplay';

const Narrative = props => {
    return (
        <article className='element'>

            <aside className='menu'>
                <NarrativeMenu />
            </aside>

            <div className = 'content'>
                
                <div className="textBox">
                    <TextBox content = {props.narrative.content} />
                </div>
                
                <div className = 'delete'>
                    <CrossDelete />
                </div>
                
                <div className = 'display'>
                    <IconDisplay />
                </div>
            </div>

            <style jsx>{`
                .element {
                    display: flex;
                    align-items: center;
                }
                
                .display {
                    position: absolute;
                    bottom: 1px;
                    width: 4%;
                    left: 46%;
                    color: white;
                }

                .delete {
                    position: absolute;
                    right: 6px;
                    top: 3px;
                    color: white;
                }

                .content {
                    width: 650px;
                    margin-top: 5px;
                    position: relative;
                }

            `}</style>

        </article>
    );
}

export default Narrative;