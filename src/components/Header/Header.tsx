import React, { Fragment, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import {
	// eslint-disable-next-line no-trailing-spaces
	AppBar,
	Autocomplete,
	Box,
	Button,
	Container,
	IconButton,
	Menu,
	MenuItem,
	TextField,
	Toolbar,
	Typography,
} from '@mui/material';
// import { Search } from '@mui/icons-material';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';

import { useDispatch, useSelector } from 'react-redux';

import EmojiNatureIcon from '@mui/icons-material/EmojiNature';


const routes = [
	{
		id: 1,
		link: '/',
		route: 'Home',
	},
	{
		id: 2,
		link: '/random',
		route: 'Randoms',
	},
	{
		id: 3,
		link: '/favourites',
		route: 'favourites',
	},
];

const Search = styled('div')(({ theme }) => ({
	position: 'relative',
	borderRadius: theme.shape.borderRadius,
	backgroundColor: alpha(theme.palette.common.white, 0.15),
	'&:hover': {
		backgroundColor: alpha(theme.palette.common.white, 0.25),
	},
	marginLeft: 0,
	width: '100%',
	[theme.breakpoints.up('sm')]: {
		marginLeft: theme.spacing(1),
		width: 'auto',
	},
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
	padding: theme.spacing(0, 2),
	height: '100%',
	position: 'absolute',
	pointerEvents: 'none',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: 'inherit',
	'& .MuiInputBase-input': {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)})`,
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			width: '12ch',
			'&:focus': {
				width: '20ch',
			},
		},
	},
}));


const Header = () => {
    const dispatch = useDispatch();
	// eslint-disable-next-line no-console
	const onClick = () => console.log('hellow ');
	const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElNav(event.currentTarget);
	};
	const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

    return (
        <AppBar position="sticky">
			<Container maxWidth="xl">
						<Toolbar disableGutters>
					<Typography variant="h6" noWrap component="div" sx={{ mr: 2, display: { xs: 'flex', md: 'flex' } }}>
						<NavLink to="/">  <EmojiNatureIcon color="secondary"/>  </NavLink>
					</Typography>
					
					<Box sx={{ flexGrow: 1, display: { xs: 'none', sm:'flex', md: 'flex', lg: 'flex', xl: 'flex' } }}>
						{routes.map(route => (
							<Button key={route.id} onClick={onClick} sx={{ my: 2, color: 'white', display: 'block' }}>
								<Link style={{ textDecoration: 'none' }} to={route.link}>
									{route.route}
								</Link>
							</Button>
						))}
					</Box>
		
					<Search onClick={onClick}>
						<SearchIconWrapper>
							<SearchIcon />
						</SearchIconWrapper>
						<StyledInputBase
							onChange={onClick}
							placeholder="Search…"
							inputProps={{ 'aria-label': 'search' }}
						/>
					</Search>

					<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none', sm:'none' } }}>
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
							{routes.map(route => (
								<MenuItem key={route.id} onClick={onClick}>
									<NavLink style={{ textDecoration: 'none' }} to={route.link}>
										<Typography textAlign="center">{route.route}</Typography>
									</NavLink>
								</MenuItem>
							))}
						</Menu>
					</Box>
				</Toolbar>
				
				
			</Container>
		</AppBar>
    )
}

export default Header
