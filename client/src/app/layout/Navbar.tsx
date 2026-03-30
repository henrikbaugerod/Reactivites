import { AppBar, Box, Container, MenuItem, Toolbar, Typography } from '@mui/material'
import { NavLink } from 'react-router'
import MenuItemLink from '../shared/components/MenuItemLink'

export const Navbar = () => {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static">
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
						</Box>
						<MenuItem>
							User menu
						</MenuItem>
					</Toolbar>
				</Container>
			</AppBar>
		</Box>
	)
}