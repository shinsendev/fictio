import IconAdd from '../../atoms/IconAdd/IconAdd';
import IconRestore from '../../atoms/IconRestore/IconRestore';
import IconSave from '../../atoms/IconSave/IconSave';

const NarrativeMenu = props => {
    return (
        <article>
            <IconAdd/>
            <IconRestore/>
            <IconSave/>
        </article>
    );
}

export default NarrativeMenu;