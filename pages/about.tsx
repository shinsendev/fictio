import Layout from '../components/Layout';
import TextBox from '../components/atoms/TextBox/TextBox';
import RestoreIcon from '../components/atoms/IconRestore/IconRestore';
import NarrativeMenu from '../components/molecules/NarrativeMenu/NarrativeMenu';

export default function About() {
    return (
        <Layout>
            <div>
                <p>This is the about page</p>
                <TextBox content = "Lorem ipsum"/>
                <RestoreIcon/>
                <NarrativeMenu/>
            </div>
        </Layout>
    );
}
