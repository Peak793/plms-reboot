
/* eslint-disable react/prop-types */
import { Button, Typography } from "@mui/material"

import { styled } from "@mui/material/styles"

const StyledButton = styled(Button)(({ isactive }) => ({
  color: "white",
  display: "flex",
  alignItems: "center",
  textTransform: "none",
  paddingX: "15px",
  borderRadius: "50px",
  "&.MuiButton-outlined": {
    backgroundColor: isactive ? "rgba(14, 80, 118, 1)" : "rgba(255, 255, 255, 0.20)",
    border: "1px rgba(255, 255, 255, 0.20)",
    "&:active": {
      backgroundColor: "#0E5076",
      border: "2px #0CA6E9",
    }
  },
  "&:hover": {
    backgroundColor: isactive ? "rgba(14, 80, 118, 0.6)" : "rgba(255, 255, 255, 0.10)",
  },
}))

const PanelHeaderButton = ({ title, num, ...props }) => {
  return (
    <StyledButton variant="outlined" {...props}>
      <Typography>{title}</Typography>
      {num && <Typography marginLeft={"8px"} >({String(num)})</Typography>}
    </StyledButton>
  )
}

export default PanelHeaderButton