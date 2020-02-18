import Layout from '../components/Layout';
import NarrativeList from '../components/NarrativeList';
import CharacterList from '../components/CharacterList';
import Fiction from '../components/Fiction';
import ActionMenu from '../components/ActionMenu';
import Journal from '../components/Journal';
import Head from "next/head";

const Index = () => (
    <div>
        <Head>
            <title>Ficti : create your fiction</title>
            <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet" />
        </Head>

        <Layout>
            <div className="container">
                <div className="main">
                    <NarrativeList title={'Last Texts'}/>
                    <NarrativeList title={'Origins Narratives'}/>
                    <NarrativeList title={'Other Narratives'}/>
                </div>

                <aside>
                    <Fiction/>
                    <ActionMenu/>
                    <Journal/>
                    <CharacterList title={'My fiction Characters'}/>
                </aside>
            </div>
            <style jsx>{`
                .container {
                    display:grid;
                    grid-template-columns: 7fr 5fr;
                    border-right: 1px solid grey;
                    border-bottom: 1px solid grey;
                }

                aside {
                    padding: 3px 12px;
                }
            `}</style>
        </Layout>
    </div>
);

export default Index;