import { Box, Container, CssBaseline } from "@mui/material";
import { Outlet } from "react-router";
import { Navbar } from "./Navbar";

function App() {
  return (
    <Box sx={{ backgroundColor: '#eeeeee', minHeight: '100vh' }}>
      <CssBaseline />
      <Navbar />
      <Container maxWidth="xl" sx={{ mt: 3 }}>
        <Outlet />
      </Container>
    </Box>
  )
}

export default App