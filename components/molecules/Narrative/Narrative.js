import TextBox from '../../atoms/TextBox/TextBox';
import NarrativeMenu from '../NarrativeMenu/NarrativeMenu';
import CrossDelete from '../../atoms/CrossDelete/CrossDelete';
import IconDisplay from '../../atoms/IconDisplay/IconDisplay';

const Narrative = props => {
    return (
        <article>
            
            <div className = 'textBox' >
                <TextBox content = {props.narrative.content} />
                <CrossDelete/>
                <NarrativeMenu />
                <IconDisplay />
            </div>

            <style jsx>{`
                .textBox {
                    margin-bottom: 5px;
                }
            `}</style>

        </article>
    );
}

export default Narrative;