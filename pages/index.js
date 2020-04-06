import Layout from '../components/Layout';
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
                <Link href="/origins/de88bad6-9e5d-4af4-ba0c-bbe4dbbf82ff">
                    <a>Origin example</a>
                </Link>
            </Layout>
        </div>
    );
}

export default Index;
