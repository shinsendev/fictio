import { ArrowDropDown, ArrowDropUp } from '@material-ui/icons';

const IconDisplay = props => {
    function displayArrow(props) {
        if (props.arrow === 'up') {
            return <ArrowDropUp />
        }
        else {
            return <ArrowDropDown />
        }
    }

    return (
        <span className='element'>
            {displayArrow(props)}
            <style jsx>{`
                .element {
                    color: white;
                }
            `}</style>
        </span>
    );
}

export default IconDisplay;