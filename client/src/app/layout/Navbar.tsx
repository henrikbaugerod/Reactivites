import { AppBar, Box, Container, MenuItem, Toolbar, Typography } from '@mui/material'
import { NavLink } from 'react-router'
import MenuItemLink from '../shared/components/MenuItemLink'
import NavbarLoader from './NavbarLoader'

export const Navbar = () => {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="relative">
				<Container maxWidth="xl">
					<Toolbar sx={{
						display: 'flex',
						justifyContent: 'space-between'
					}}>
						<MenuItem component={NavLink} to='/'>
							<Typography variant="h6">
								Kundeplan
							</Typography>
						</MenuItem>
						<Box sx={{
							display: 'flex',
							gap: 3
						}}>
							<MenuItemLink to='/activities'>
								Activities
							</MenuItemLink>
							<MenuItemLink to='/createActivity'>
								Create activity
							</MenuItemLink>
							<MenuItemLink to='/counter'>
								Counter
							</MenuItemLink>
						</Box>
						<MenuItem>
							User menu
						</MenuItem>
					</Toolbar>
				</Container>

				<NavbarLoader />
			</AppBar>
		</Box>
	)
}