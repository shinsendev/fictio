import Layout from '../../components/Layout';
import Link from 'next/link';

const FragmentLink = props => (
    <li>
        <Link href="/fragments/[id]" as={`/fragments/${props.title}`}>
            <a>{props.title}</a>
        </Link>
    </li>
);

export default function FragmentCollection() {
    return (
        <Layout>
            <div>
                <p>Une liste de fragments</p>
                <ul>
                    <FragmentLink title="Mon Fragment"/>
                </ul>
            </div>
        </Layout>
    );
}