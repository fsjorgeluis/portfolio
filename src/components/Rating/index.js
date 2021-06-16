import { withStyles } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import FreeBreakfastTwoToneIcon from '@material-ui/icons/FreeBreakfastTwoTone';
import Rating from '@material-ui/lab/Rating';

const StyledRating = withStyles({
    iconFilled: {
        color: "#F7B32B",
    },
})(Rating);

const StartRating = ({ stars, cups = false }) => {
    return (
        <Box component="fieldset" borderColor="transparent">
            {
                cups ? <StyledRating
                    name="read-only"
                    readOnly
                    value={stars}
                    icon={<FreeBreakfastTwoToneIcon fontSize="inherit" />}
                /> : <Rating name="read-only" readOnly value={stars} />
            }
        </Box>
    );
}

export default StartRating;