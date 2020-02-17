import Layout from '../components/Layout';
import TextList from '../components/TextList';
import CharacterList from '../components/CharacterList';

const Index = () => (
    <div>
        <Layout>

            <div>
                <TextList title={'Last Texts'}/>
                <TextList title={'Origins Narratives'}/>
                <TextList title={'Other Narratives'}/>
            </div>

            <div>
                <div>Fiction title</div>
                <div>Logs</div>
                <CharacterList title={'My fiction Characters'}/>
            </div>

        </Layout>
    </div>
);

export default Index;