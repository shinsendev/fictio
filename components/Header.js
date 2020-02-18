import Link from 'next/link';

const linkStyle = {
    marginRight: 15
};

const containerStyle = {
    display: "flex",
    border: "1px solid grey",
    padding: "3px 6px"
};

const Header = () => (
    <div className='container' style={containerStyle}>

        <div className='sitename'>Ficti</div>

        <Link href="/">
            <a style={linkStyle}>My Fiction</a>
        </Link>

        <input type="search"/>

        <Link href="/">
            <a style={linkStyle}>My account</a>
        </Link>

        <Link href="/">
            <a style={linkStyle}>Logout</a>
        </Link>

        <style jsx>{`
            .container {
                flex-flow: row wrap;
                justify-content: space-around;
            }

            .sitename {
                font-size:18px;
                font-weight: bold;
            }
        `}</style>
    </div>
);

export default Header;