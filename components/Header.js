import Link from 'next/link';

const linkStyle = {
    marginRight: 15
};

const containerStyle = {
    display: "grid"
};

const Header = () => (
    <div id="navbar" style={containerStyle}>

        <h2>Ficti</h2>

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

    </div>
);

export default Header;