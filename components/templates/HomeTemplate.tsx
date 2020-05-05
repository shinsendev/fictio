import Head from "next/head";
import Link from 'next/link';

const HomeTemplate = (props) => {
    return (
        <div>
            <Head>
                <title>Ficti : create your fiction</title>
                <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet" />
            </Head>
            
            <div> 
                <h2>Ficti - Homepage | Scylla Prototype</h2>
                <table>
                    <tr>
                        <th>Title</th>
                        <th>Link</th>
                    </tr>
                    <tr>
                        <td>Fiction example page</td>
                        <td>
                            <Link href="/fictions/1b7df281-ae2a-40bf-ad6a-ac60409a9ce6">
                                <a>/fictions/1b7df281-ae2a-40bf-ad6a-ac60409a9ce6</a>
                            </Link>
                        </td>
                    </tr>
                    <tr>
                        <td>Origin example page</td>
                        <td>
                            <Link href="/origins/de88bad6-9e5d-4af4-ba0c-bbe4dbbf82ff">
                                <a>/origins/de88bad6-9e5d-4af4-ba0c-bbe4dbbf82ff</a>
                            </Link>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default HomeTemplate;