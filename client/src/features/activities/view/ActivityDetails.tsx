import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { NavLink, useParams } from "react-router";
import { useActivities } from "../../../lib/hooks/useActivities";

export default function ActivityDetails() {
  const { id } = useParams();
  const { activity, isActivityLoading } = useActivities(id);

  if (isActivityLoading) return <Typography>Loading...</Typography>
  if (!activity) return <Typography>Activity not found</Typography>

  return (
    <Card sx={{}}>
      <CardMedia
        component='img'
        src={`/images/categoryImages/${activity.category}.jpg`}
      />
      <CardContent>
        <Typography variant="h5">{activity.title}</Typography>
        <Typography variant="subtitle1" fontWeight="light">{activity.date}</Typography>
        <Typography variant="body1">{activity.description}</Typography>
      </CardContent>
      <CardActions>
        <Button component={NavLink} to={`/manage/${activity.id}`} color="primary">Edit</Button>
        <Button component={NavLink} to='/activities' color="inherit">Cancel</Button>
      </CardActions>
    </Card>
  )
}
