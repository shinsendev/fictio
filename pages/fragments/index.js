import Layout from '../../components/Layout';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

const FragmentCollection = props => (
    <Layout>
        <h1>Fragment</h1>
        <ul>
            {props.shows.map(fragment => (
                <li key={fragment.uuid}>

                    <Link href="/fragments/[id]" as={`/fragments/${fragment.title}`}>
                        <a>{fragment.title}</a>
                    </Link>

                </li>
            ))}
        </ul>

    </Layout>
);

FragmentCollection.getInitialProps = async function() {
    // const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
    const res = await fetch('http://127.0.0.1:8000/api/fragments.json');
    const data = await res.json();

    console.log(`Show data fetched. Count: ${data.length}`);

    return {
      shows: data.map(entry => entry)
    };
};

export default FragmentCollection;
