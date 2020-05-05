import Link from 'next/link';
import { TextField, InputAdornment, FormControl, InputLabel, OutlinedInput } from '@material-ui/core';

const linkStyle = {
    marginRight: 15
};

const containerStyle = {
    container: {
        display: "flex",
        border: "1px solid grey",
        padding: "3px 6px",
        background: "black",
        height: "40px",
        color: "white",
    },

};

const Header = () => (
    <div className='container' style={containerStyle.container}>

        <div className='sitename'>Ficti</div>

        <Link href="/">
            <a style={linkStyle}>My Fiction</a>
        </Link>

        <FormControl className='formControl' component='div' color='secondary' size='small' variant="outlined">
          <InputLabel color='secondary' htmlFor="search">Search</InputLabel>
          <OutlinedInput
            className='outlinedInput'
            id="search"
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            labelWidth={60}
            color='secondary'
          />
        </FormControl>
        

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

            .container a{
                color: white;
            }

            .sitename {
                font-size:18px;
                font-weight: bold;
            }

            .outlinedInput {
                background: white;
            }

            .formControl {
                background: white;
            }
        `}</style>
    </div>
);

export default Header;