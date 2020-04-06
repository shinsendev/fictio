import IconAdd from '../../atoms/IconAdd/IconAdd';
import IconRestore from '../../atoms/IconRestore/IconRestore';
import IconSave from '../../atoms/IconSaveAtom/IconSaveAtom';

const NarrativeMenu = props => {
    function openModal() {    
       props.openModal();
    }

    function saveNarrative() {
        props.saveNarrative();
    }

    return (
        <article className='element'>
            <article>
                <IconAdd />
            </article>
 
            <article>
                <IconRestore openModal={openModal} narrativeUuid={props.narrative.uuid} />
            </article>

            <article>
                <IconSave narrative = {props.narrative} saveNarrative={saveNarrative} />
            </article>
 
            <style jsx>{`
                .element {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 5px 10px;
                    width: 120px;
                }

                .hidden {
                    visibility: hidden;
                }

                .element article {
                    margin: 0px 3px;
                }
            `}</style>
        </article>
    );
}

export default NarrativeMenu;