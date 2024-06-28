import React from 'react';
import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
  useMediaQuery,
  IconButton,
  Drawer,
  useTheme,
} from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import CloseIcon from '@mui/icons-material/Close';

function SportsFilter() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <div className='sm:h-[100vh] sticky top-[100px] sm:bg-[#1c1c1c]'>
      {isMobile? (
        <React.Fragment>
          <IconButton onClick={toggleDrawer(!drawerOpen)} sx={{ color: 'white' }}>
            {drawerOpen? <CloseIcon /> : <FilterListIcon />}
          </IconButton>
          <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
            <Box
              sx={{
                width: 250,
                backgroundColor: '#1c1c1c',
                color: 'white',
                height: '100%',
                position: 'relative'
              }}
              role="presentation"
            >
              <IconButton onClick={toggleDrawer(false)} sx={{ color: 'white' }}>
                <CloseIcon />
              </IconButton>
              <Typography variant="h6" gutterBottom>
                Filter
              </Typography>

              <Typography variant="subtitle1" gutterBottom>
                Type
              </Typography>
              <FormGroup>
                <FormControlLabel control={<Checkbox sx={{ color: 'white' }} />} label="Team Sport" />
                <FormControlLabel control={<Checkbox sx={{ color: 'white' }} />} label="Combat Sport" />
                <FormControlLabel control={<Checkbox sx={{ color: 'white' }} />} label="Water Sport" />
                <FormControlLabel control={<Checkbox sx={{ color: 'white' }} />} label="The Playgrounds Special" />
                <FormControlLabel control={<Checkbox sx={{ color: 'white' }} />} label="Endurance Activities" />
                <FormControlLabel control={<Checkbox sx={{ color: 'white' }} />} label="Others" />
              </FormGroup>

              <Typography variant="subtitle1" gutterBottom sx={{ marginTop: 2 }}>
                Location
              </Typography>
              {/* Add Location filters here */}

              <Typography variant="subtitle1" gutterBottom sx={{ marginTop: 2 }}>
                Time
              </Typography>
              {/* Add Time filters here */}
            </Box>
          </Drawer>
        </React.Fragment>
      ) : (
        <Box
          sx={{
            width: 250,
            padding: 2,
            backgroundColor: '#1c1c1c',
            color: 'white',
            position: 'sticky',
            top: 0,
            zIndex: 1,
          }}
        >
          <Typography variant="h6" gutterBottom>
            Filter
          </Typography>

          <Typography variant="subtitle1" gutterBottom>
            Type
          </Typography>
          <FormGroup>
            <FormControlLabel control={<Checkbox sx={{ color: 'white' }} />} label="Team Sport" />
            <FormControlLabel control={<Checkbox sx={{ color: 'white' }} />} label="Combat Sport" />
            <FormControlLabel control={<Checkbox sx={{ color: 'white' }} />} label="Water Sport" />
            <FormControlLabel control={<Checkbox sx={{ color: 'white' }} />} label="The Playgrounds Special" />
            <FormControlLabel control={<Checkbox sx={{ color: 'white' }} />} label="Endurance Activities" />
            <FormControlLabel control={<Checkbox sx={{ color: 'white' }} />} label="Others" />
          </FormGroup>

          <Typography variant="subtitle1" gutterBottom sx={{ marginTop: 2 }}>
            Location
          </Typography>
          {/* Add Location filters here */}

          <Typography variant="subtitle1" gutterBottom sx={{ marginTop: 2 }}>
            Time
          </Typography>
          {/* Add Time filters here */}
        </Box>
      )}
    </div>
  );
}

export default SportsFilter;