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
            <style jsx>{`
                body {
                    font-family: 'Roboto', sans-serif;                    
                }
                
                p {
                    font-size: 12px;
                }
            `}</style>
        </Layout>
    </div>
);

export default Index;