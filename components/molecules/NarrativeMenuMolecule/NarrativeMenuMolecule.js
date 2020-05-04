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

    function createNarrative() {
        props.createNarrative();
    }

    /**
     * @description we don't return the icon if it is top level narrative
     */
    function displayAddNarrative(narrative) {
        if (narrative.lvl !== 0) {
            return (
                <article>
                    <IconAdd onClick={createNarrative} createNarrative={createNarrative}/>
                </article>
            )
        }
    }

    return (
        <article className='element'>
            {displayAddNarrative(props.narrative)}

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