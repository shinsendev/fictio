import Layout from '../components/Layout';
import Link from 'next/link';

const FragmentLink =  props => (
    <li>
        <Link href={`/fragments?title=${props.title}`}>
            <a>{props.title}</a>
        </Link>
    </li>
);

const Index = () => (
    <div>
        <Layout>
            <p>Hello Next.js</p>
        </Layout>
    </div>
);

export default Index;