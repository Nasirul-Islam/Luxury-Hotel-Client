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

const Navigation = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar position="static" >
            {/* color="inherit" */}
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
                                <Typography textAlign="center"
                                    sx={{ my: 2 }}>
                                    Home
                                </Typography>
                                <Typography textAlign="center"
                                    sx={{ my: 2 }}>
                                    Rooms
                                </Typography>
                                <Typography textAlign="center"
                                    sx={{ my: 2 }}>
                                    About Us
                                </Typography>
                                <Typography textAlign="center"
                                    sx={{ my: 2 }}>
                                    Contact
                                </Typography>
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
                        <Typography textAlign="center"
                            sx={{ mx: 2, color: 'white' }}>
                            Home
                        </Typography>
                        <Typography textAlign="center"
                            sx={{ mx: 2, color: 'white' }}>
                            Rooms
                        </Typography>
                        <Typography textAlign="center"
                            sx={{ mx: 2, color: 'white' }}>
                            About Us
                        </Typography>
                        <Typography textAlign="center"
                            sx={{ mx: 2, color: 'white' }}>
                            Contact
                        </Typography>
                    </Box>
                    <Box sx={{ flexGrow: 0 }}>
                        <Button
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            LogIn
                        </Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default Navigation;
