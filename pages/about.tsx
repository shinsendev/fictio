import Layout from '../components/Layout';
import TextBox from '../components/atoms/TextBox/TextBox';
import RestoreIcon from '../components/atoms/IconRestore/IconRestore';
import NarrativeMenu from '../components/molecules/NarrativeMenu/NarrativeMenu';
import NarrativeVersionedMolecule from '../components/molecules/NarrativeVersionedMolecule/NarrativeVersionedMolecule';

const About = props => {
    return (
        <div>
            <NarrativeVersionedMolecule narrative={props.narrative} />
        </div>
    );
}

About.getInitialProps = async function (context) {
    const res = await fetch('http://127.0.0.1:8000/api/narratives/d7d4899d-9b1c-44cd-8406-8c839c16f79f.json');
    const json = await res.json();
    return { narrative: json};
}

export default About;