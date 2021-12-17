import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import './Navigation.css';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Navigation = () => {
    const { user, logout } = useAuth();
    console.log(user);
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    const bgColor = {
        backgroundColor: 'rgb(0 0 0 / 35%)'
    }
    return (
        <AppBar position="absolute" className="navMain" style={bgColor}>
            {/* color="inherit" static */}
            <Container>
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                    >
                        LUXURY HOTEL
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            <MenuItem onClick={handleCloseNavMenu}
                                sx={{ display: 'flex', flexDirection: 'column' }}>
                                <Link to="/home">
                                    <Typography textAlign="center"
                                        sx={{ mx: 2 }}>
                                        Home
                                    </Typography>
                                </Link>
                                <Link to="/allServices">
                                    <Typography textAlign="center"
                                        sx={{ mx: 2 }}>
                                        Rooms
                                    </Typography>
                                </Link>
                                <Typography textAlign="center"
                                    sx={{ my: 2 }}>
                                    About Us
                                </Typography>
                                <Typography textAlign="center"
                                    sx={{ my: 2 }}>
                                    Contact
                                </Typography>
                                {user?.email && <Link to="/dashboard"><Typography textAlign="center"
                                    sx={{ mx: 2, color: 'white' }}>
                                    Dashboard
                                </Typography></Link>}
                            </MenuItem>
                        </Menu>
                    </Box>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                    >
                        LUXURY HOTEL
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
                        <Link to="/home">
                            <Typography textAlign="center"
                                sx={{ mx: 2, color: 'white' }}>
                                Home
                            </Typography>
                        </Link>
                        <Link to="/allServices">
                            <Typography textAlign="center"
                                sx={{ mx: 2, color: 'white' }}>
                                Rooms
                            </Typography>
                        </Link>
                        <Typography textAlign="center"
                            sx={{ mx: 2, color: 'white' }}>
                            About Us
                        </Typography>
                        <Typography textAlign="center"
                            sx={{ mx: 2, color: 'white' }}>
                            Contact
                        </Typography>
                        {user?.email && <Link to="/dashboard"><Typography textAlign="center"
                            sx={{ mx: 2, color: 'white' }}>
                            Dashboard
                        </Typography></Link>}
                    </Box>
                    <Box sx={{ flexGrow: 0 }}>
                        {!user.email ? <Link to="/login">
                            <Button
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                LogIn
                            </Button>
                        </Link>
                            :
                            <Button onClick={logout}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                LogOut
                            </Button>}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default Navigation;
