import { Link, Button, Container, Typography, Box, AppBar, Toolbar} from '@mui/material';
import { Outlet, NavLink } from 'react-router';

export default function Layout() {
  return (
    <Container>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" component={NavLink} to="/">Home</Button>
          <Button color="inherit" component={NavLink} to="/about">About</Button>
          <Button color="inherit" component={NavLink} to="/demo01">Demo01</Button>
          <Button color="inherit" component={NavLink} to="/demo02">Demo02</Button>
        </Toolbar>
      </AppBar>
      <Box sx={{ my: 4 }}>
        <Outlet />
        <Copyright />
      </Box>
    </Container>
  );
}

//-------------------------------------
function Copyright() {
  return (
    <Typography
      variant="body2"
      align="center"
      sx={{
        color: 'text.secondary',
      }}
    >
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}.
      version: {import.meta.env.VITE_APP_VERSION}
    </Typography>
  );
}
//-------------------------------------