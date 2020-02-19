import Layout from '../components/Layout';
import NarrativeList from '../components/NarrativeList';
import CharacterList from '../components/CharacterList';
import FictionItem from '../components/FictionItem';
import ActionMenu from '../components/ActionMenu';
import Journal from '../components/Journal';
import Head from "next/head";
import Link from 'next/link';

const Index = (props) => {
    const fictionUuid = '1b7df281-ae2a-40bf-ad6a-ac60409a9ce6';

    return (
        <div>
            <Head>
                <title>Ficti : create your fiction</title>
                <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet" />
            </Head>
    
            <Layout>
                <Link href="/fictions/1b7df281-ae2a-40bf-ad6a-ac60409a9ce6">
                    <a>My Fiction</a>
                </Link>
            </Layout>
                
        </div>
    );
}

Index.getInitialProps = async function(context) {
    const id = '1b7df281-ae2a-40bf-ad6a-ac60409a9ce6';
    const res = await fetch('http://127.0.0.1:8000/api/fictions/'+id+'.json');
    const payload = await res.json();
    return { payload };
};

export default Index;
