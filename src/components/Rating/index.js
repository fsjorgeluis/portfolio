const { Box } = require("@material-ui/core")
const { Rating } = require("@material-ui/lab")


const StartRating = ({ stars }) => {
    return (
        <div>
            <Box component="fieldset" borderColor="transparent">
                <Rating name="read-only" readOnly value={stars} />
            </Box>
        </div>
    );
}

export default StartRating;