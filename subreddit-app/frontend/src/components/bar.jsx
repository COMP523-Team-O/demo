import { AppBar, Toolbar, Typography } from "@mui/material";

export function Bar() {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="16"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            cReddit Hours
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
}
