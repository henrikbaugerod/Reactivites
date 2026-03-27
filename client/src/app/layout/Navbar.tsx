import { AppBar, Box, Button, Container, MenuItem, Toolbar, Typography } from '@mui/material'

type Props = {
	openForm: () => void;
}

export const Navbar = ({ openForm }: Props) => {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static">
				<Container maxWidth="xl">
					<Toolbar sx={{
						display: 'flex',
						justifyContent: 'space-between'
					}}>
						<Typography variant="h6">
							Kundeplan
						</Typography>
						<Box sx={{
							display: 'flex',
							gap: 3
						}}>
							<MenuItem>
								<Typography variant="body1" component="div" sx={{ flexGrow: 1 }}>
									Activities
								</Typography>
							</MenuItem>
							<MenuItem>
								<Typography variant="body1" component="div" sx={{ flexGrow: 1 }}>
									About
								</Typography>
							</MenuItem>
							<MenuItem>
								<Typography variant="body1" component="div" sx={{ flexGrow: 1 }}>
									Contact
								</Typography>
							</MenuItem>
						</Box>
						<Button color="success" variant="contained" onClick={openForm}>Create activity</Button>
					</Toolbar>
				</Container>
			</AppBar>
		</Box>
	)
}