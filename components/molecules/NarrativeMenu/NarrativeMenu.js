import IconAdd from '../../atoms/IconAdd/IconAdd';
import IconRestore from '../../atoms/IconRestore/IconRestore';
import IconSave from '../../atoms/IconSave/IconSave';

const NarrativeMenu = props => {
    return (
        <article className='element'>
            <div>
                <IconAdd />
            </div>

            <div>
                <IconRestore />
            </div>

            <div>
                <IconSave />
            </div>

            <style jsx>{`
                .element {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 5px 10px;
                    width: 120px;
                }
            `}</style>
        </article>
    );
}

export default NarrativeMenu;