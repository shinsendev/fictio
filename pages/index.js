import Layout from '../components/Layout';
import TextList from '../components/TextList';
import CharacterList from '../components/CharacterList';
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
                    <TextList title={'Last Texts'}/>
                    <TextList title={'Origins Narratives'}/>
                    <TextList title={'Other Narratives'}/>
                </div>

                <aside>
                    <div>Fiction title</div>
                    <div>Logs</div>
                    <CharacterList title={'My fiction Characters'}/>
                </aside>
            </div>
            <style jsx>{`
                .container {
                    display:grid;
                    grid-template-columns: 7fr 5fr;
                }
            `}</style>
        </Layout>
    </div>
);

export default Index;