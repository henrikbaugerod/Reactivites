import { Button, ButtonGroup, Grid, List, ListItemText, Paper, Typography } from "@mui/material";
import { observer } from "mobx-react-lite";
import { useStore } from "../../lib/hooks/useStore";

const Counter = observer(function Counter() {
  const { counterStore } = useStore();

  return (
    <Grid container>
      <Grid size={8}>
        <Typography variant="h4" gutterBottom>{counterStore.title}</Typography>
        <Typography variant="h6">The count is: {counterStore.count}</Typography>
        <ButtonGroup sx={{ mt: 3 }}>
          <Button onClick={() => counterStore.decrement()} variant="contained" color="error">Decrement</Button>
          <Button onClick={() => counterStore.increment()} variant="contained" color="success">Increment</Button>
          <Button onClick={() => counterStore.increment(5)} variant="contained" color="primary">Increment by 5</Button>
        </ButtonGroup>
      </Grid>
      <Grid size={4}>
        <Paper elevation={3} sx={{ p: 4 }}>
          <Typography variant="h4">{`Counter events (${counterStore.eventCount})`}</Typography>
          <List>
            {counterStore.events.map((event, index) => (
              <ListItemText key={index}>{event}</ListItemText>
            ))}
          </List>
        </Paper>
      </Grid>
    </Grid>
  )
});

export default Counter;