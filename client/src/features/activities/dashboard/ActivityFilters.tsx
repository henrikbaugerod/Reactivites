import { Box, ListItemText, MenuItem, MenuList, Paper, Typography } from "@mui/material";
import FilterListIcon from '@mui/icons-material/FilterList';
import EventIcon from '@mui/icons-material/Event';
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

export default function ActivityFilters() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
      <Paper sx={{ p: 3 }}>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h6" sx={{ display: "flex", alignItems: "center", mb: 1, color: "primary.main" }}>
            <FilterListIcon />
            Filters
          </Typography>
          <MenuList>
            <MenuItem>
              <ListItemText primary="All events" />
            </MenuItem>
            <MenuItem>
              <ListItemText primary="I'm going" />
            </MenuItem>
            <MenuItem>
              <ListItemText primary="I'm hosting" />
            </MenuItem>
          </MenuList>
        </Box>
      </Paper>
      <Box component={Paper} sx={{ width: '100%', p: 3 }}>
        <Typography variant="h6" sx={{ display: "flex", alignItems: "center", mb: 1, color: "primary.main" }}>
          <EventIcon />
          Select date
        </Typography>
        <Calendar />
      </Box>
    </Box>
  )
}