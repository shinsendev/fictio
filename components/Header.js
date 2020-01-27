import Link from 'next/link';

const linkStyle = {
    marginRight: 15
};

const Header = () => (
    <div>
        <Link href="/">
            <a style={linkStyle}>Home</a>
        </Link>
        <Link href="/fragments">
            <a style={linkStyle}>Mes fragments</a>
        </Link>
        <Link href="/fragments/create-fragments">
            <a style={linkStyle}>Créer un fragment</a>
        </Link>
        <Link href="/about">
            <a style={linkStyle}>About</a>
        </Link>
    </div>
);

export default Header;