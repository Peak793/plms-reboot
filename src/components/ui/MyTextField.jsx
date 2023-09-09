import PropTypes from 'prop-types';
import { TextField } from '@mui/material';

const MyTextField = (props) => {
  return (
    <TextField {...props}
      variant='outlined'
    // InputProps={{
    //   sx: {
    //     color: "white",
    //     border: "1px solid var(--frenchGray)",
    //     borderRadius: "8px",
    //     '&.Mui-focused': {
    //       border: "1px solid transparent",
    //       outlineColor: "var(--cerulean)"
    //     }
    //   }
    // }}
    // InputLabelProps={{
    //   sx: {
    //     fontSize: "16px",
    //     bgcolor: "var(--ebony)",
    //     color: "var(--frenchGray)",
    //     '&.Mui-focused': {
    //       color: "var(--frenchGray)",
    //     }
    //   }
    // }}
    />
  );
};

MyTextField.propTypes = {
  label: PropTypes.string,
};

export default MyTextField;
