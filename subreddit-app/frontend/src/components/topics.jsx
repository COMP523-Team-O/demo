import {
  Card,
  Stack,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import { Link } from "react-router-dom";

export function Topics(props) {
  return (
    <>
      <Card sx={{ margin: "5%" }}>
        <Stack sx={{ p: 2, display: "flex" }}>
          <Typography paddingLeft="2%">Topics of Concern</Typography>

          {props.data ? (
            <List component="nav">
              {props.data.map((item, index) => {
                return (
                  
                  <ListItem component={Link} to={`/post/${index}`}>
                    <ListItemText
                      primary={item.title}
                      secondary={"Posted by " + item.author}
                    ></ListItemText>
                  </ListItem>
                );
              })}
            </List>
          ) : (
            <Typography> Loading...</Typography>
          )}
        </Stack>
      </Card>
    </>
  );
}
