import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import ApplicationLogo from "./ApplicationLogo";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { router } from "@inertiajs/react";
import axios from "axios";
import { toast } from "react-toastify";

const darkTheme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: "#1976d2",
        },
    },
});

const pages = [
    {
        component: "Home",
        route: "/",
        id: 1,
    },
    {
        component: "Login",
        route: "/login",
        id: 2,
    },
    {
        component: "Register",
        route: "/register",
        id: 3,
    },
    {
        component: "Users",
        route: "/list",
        id: 4,
    },
];

function Navbar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    function handleLogout() {
        axios.get('/logout')
            .then(res => {
                console.log(res.data);
                toast.success(res.data.message)
                router.visit(`/`)
            }).catch(err => {
                console.log(err);
                toast.error("Something went wrong")
        })
    }

    return (
        <ThemeProvider theme={darkTheme}>
            <AppBar position="fixed">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <ApplicationLogo className="block h-9 w-auto fill-current text-white-800" />

                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href="#app-bar-with-responsive-menu"
                            sx={{
                                mr: 2,
                                display: { xs: "flex", md: "none" },
                                flexGrow: 1,
                                fontFamily: "monospace",
                                fontWeight: 700,
                                letterSpacing: ".3rem",
                                color: "inherit",
                                textDecoration: "none",
                            }}
                        ></Typography>
                        <Box
                            sx={{
                                flexGrow: 1,
                                display: { xs: "none", md: "flex" },
                            }}
                        >
                            {pages.map((page) => (
                                <Button
                                    key={page.id}
                                    onClick={() => {
                                        handleCloseNavMenu();
                                        router.visit(`${page.route}`);
                                    }}
                                    sx={{
                                        my: 3,
                                        color: "white",
                                        display: "block",
                                        marginLeft: "2%",
                                    }}
                                >
                                    {page.component}
                                </Button>
                            ))}
                            <Button
                                onClick={handleLogout}
                                sx={{
                                    my: 3,
                                    color: "white",
                                    display: "block",
                                    marginLeft: "2%",
                                }}
                            >
                                Logout
                            </Button>
                        </Box>

                        <Box
                            sx={{
                                flexGrow: 0,
                                display: { xs: "flex", md: "none" },
                            }}
                        >
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
                                    vertical: "bottom",
                                    horizontal: "left",
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: "top",
                                    horizontal: "left",
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: "block", md: "none" },
                                }}
                            >
                                {pages.map((page) => (
                                    <MenuItem
                                        key={page.id}
                                        onClick={() => {
                                            handleCloseNavMenu();
                                            router.visit(`${page.route}`);
                                        }}
                                    >
                                        <Typography textAlign="center">
                                            {page.component}
                                        </Typography>
                                    </MenuItem>
                                ))}
                                <MenuItem
                                    onClick={handleLogout}
                                >
                                    <Typography textAlign="center">
                                        Logout
                                    </Typography>
                                </MenuItem>
                            </Menu>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </ThemeProvider>
    );
}
export default Navbar;
