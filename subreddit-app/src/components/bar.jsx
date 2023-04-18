import { AppBar, Toolbar, Typography, InputBase } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import { Search } from './search'
import { Link } from 'react-router-dom';
import React from "react";

export function Bar({ posts }) {
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
            <Link 
              to={'/'}
              style={{ textDecoration: "none", color: "inherit" }}>cReddit Hours
            </Link>
          </Typography>
          <Search posts={posts}/>
        </Toolbar>
      </AppBar>
    </>
  );
}
