import { ArrowDropDown } from '@material-ui/icons';

const IconDisplay = props => {
    return (
        <span className='element'>
            <ArrowDropDown />
            <style jsx>{`
                .element{
                    color: black;
                }
            `}</style>
        </span>
    );
}

export default IconDisplay;