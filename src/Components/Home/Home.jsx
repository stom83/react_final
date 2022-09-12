// ========== MUI Components =========
import React, {Fragment} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import LoginIcon from '@mui/icons-material/Login';
import WorkIcon from '@mui/icons-material/Work';
import HomeCV from './HomeCV';
// ============= ROUTES ================
import { NavLink } from 'react-router-dom';
//=====================================
const Home = ()=>{
  return(
<>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            <WorkIcon sx={{ fontSize: 15 }}/>BreafCase
          </Typography>
          <Button color="inherit"><NavLink to="/" style={{textDecoration:"none", color:"inherit"}}>HOME</NavLink></Button>
          <Button color="inherit"><NavLink to="/studies" style={{textDecoration:"none", color:"inherit"}}>STUDIES</NavLink></Button>
          <Button color="inherit"><NavLink to="/experience" style={{textDecoration:"none", color:"inherit"}}>EXPERIENCES</NavLink></Button>
          <Button color="inherit"><NavLink to="/projects" style={{textDecoration:"none", color:"inherit"}}>PROJECTS</NavLink></Button>
          <Button color="inherit"><NavLink to="/contact" style={{textDecoration:"none", color:"inherit"}}>CONTACT</NavLink></Button>
          <Button color="inherit"><NavLink to="/login" style={{textDecoration:"none", color:"inherit"}}><LoginIcon style={{fontSize:11}}/>Login</NavLink></Button>
        </Toolbar>
      </AppBar>
    </Box>
    </>
  );
  };
  export default Home;