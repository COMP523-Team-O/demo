import {
  Card,
  Stack,
  Box,
  Tabs,
  Tab,
  List,
  ListItem,
  ListItemText,
  Divider,
  Typography,
} from "@mui/material";

export function Activity(props) {

  const getTimeDifferences = (item) => {
    const earlierTime = new Date(item.created_utc);
    const timeDifference = Math.floor(
      (new Date() - earlierTime) / (1000 * 60 * 60)
    );
    return timeDifference;
  };

  return (
    <>
      <Card sx={{ margin: "5%" }}>
        <Stack sx={{ p: 2, display: "flex" }}>
          <Box>
            <Tabs>
              <Tab label="Post Activity"></Tab>
              <Tab label="User"></Tab>
            </Tabs>

            {props.data ? (
              <List component="nav">
                {props.data.map((item, index) => {
                  return (
                    <ListItem>
                      <ListItemText
                        primary={item.title}
                        secondary={"Posted " + getTimeDifferences(item) + " hours ago"}
                      ></ListItemText>
                    </ListItem>
                  );
                })}
              </List>
            ) : (
              <Typography> Loading...</Typography>
            )}

            {/* <List component="nav">
              
              <ListItem>
                <ListItemText
                  primary="Class Registration Fall 2023"
                  secondary="Posted 12 minutes ago"
                ></ListItemText>
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemText
                  primary="Comp Sci 2023 Admissions"
                  secondary="Posted 30 minutes ago"
                ></ListItemText>
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemText
                  primary="SBP election?"
                  secondary="Posted 45 minutes ago"
                ></ListItemText>
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemText
                  primary="Easy 1 credit hour classes"
                  secondary="Posted an hour ago"
                ></ListItemText>
              </ListItem>
            </List> */}
          </Box>
        </Stack>
      </Card>
    </>
  );
}
