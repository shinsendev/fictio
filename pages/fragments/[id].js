import Layout from '../../components/Layout';
import fetch from 'isomorphic-unfetch';

const Fragment = props => (
    <Layout>
        <h1>{props.fragment.title}</h1>
        <p>{props.fragment.content}</p>
        <style jsx>{`
           h1 {
            color:red;
           }
        `}</style>
    </Layout>
);

Fragment.getInitialProps = async function(context) {
    const { id } = context.query;
    const res = await fetch(`http://127.0.0.1:8000/api/fragments/${id}.json`);
    const fragment = await res.json();
    return { fragment };
};

export default Fragment;