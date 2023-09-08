import { Breadcrumbs as MuiBreadcrumbs, Box, Typography } from '@mui/material';
import { NavigateNext } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const BC = ({ items, lastItemColor = 'var(--cerulean)' }) => {
  return (
    <Box>
      <MuiBreadcrumbs
        separator={<NavigateNext fontSize="small" sx={{ color: 'white' }} />}
        aria-label="breadcrumb"
      >
        {items.map((item, index) => (
          <Typography
            key={index}
            component={NavLink}
            underline="none"
            to={item.href}
            sx={{
              color: index === items.length - 1 ? lastItemColor : 'white',
            }}
          >
            {item.label}
          </Typography>
        ))}
      </MuiBreadcrumbs>
    </Box>
  );
};

BC.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    })
  ).isRequired,
  lastItemColor: PropTypes.string,
};

export default BC;
