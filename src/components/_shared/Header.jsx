import { Stack, Typography } from "@mui/material"
import PropTypes from "prop-types";

const Header = ({ logoSrc, logoIcon, title }) => {
  return (
    <Stack spacing={1} direction={"row"}>
      {(logoSrc && !logoIcon) && <div className="page-icon"><img src={logoSrc} alt="page name icon" /></div>}
      {(!logoSrc && logoIcon) && <div className="page-icon">{logoIcon}</div>}
      <Typography variant='h6' component={"h1"}>{title}</Typography>
    </Stack>
  )
}

Header.propTypes = {
  logoSrc: PropTypes.string,
  logoIcon: PropTypes.node,
  title: PropTypes.string.isRequired
}

export default Header