import Link from 'next/link';

export default function ActionMenu () {
    return (
        <div className="container">

            <button>
                <Link href="/writing/narratives">
                    <a>New Narrative</a>
                </Link>
            </button>
            <button>New Character</button>

            <style jsx>{`
                .container {
                  display: grid;
                  grid-template-columns: repeat(2, 1fr);
                  margin-top:3px;
                  margin-bottom: 6px;
                }
                
                button {
                    padding: 6px;
                    font-size:14px;
                    font-weight: bold;
                    min-height: 45px;
                    background: white;
                    border: 1px solid grey;
                    border-radius: 3px;
                    margin-right: 3px;
                    cursor: pointer;
                }
                
                button:focus {
                    border:1px solid black;
                }
            `}</style>
        </div>
    );
}