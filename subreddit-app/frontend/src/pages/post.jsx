import React, { useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

import { Card, Stack, Typography, Divider, Button } from "@mui/material";
import { Bar } from "../components/bar";
import { SliderReddit } from "../components/slider";

export function Post() {
  const { id } = useParams();

  const getPost = () => {
    axios
      .get(`http://localhost:8000/api/data/${id}`)
      .then((response) => {
        setPost(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [data, setPost] = useState(getPost);

  return (
    <>
      <Bar />
      <Card sx={{ margin: "5%" }}>
        {data ? (
          <Stack sx={{ display: "flex", padding: "2%", margin: "2%" }}>
            <Typography id="header" variant="h5" fontWeight="bold">
              {data.title}
            </Typography>
            <Typography padding="2%" id="author">
              Posted by {data.author}
            </Typography>
            <Divider />
            <Typography padding="2%" id="content">
              "{data.selftext}"
            </Typography>
            <Divider />
            <Typography variant="h6" padding="2%" id="pulse">
              Negative - 27%
            </Typography>
            <SliderReddit></SliderReddit>
            <Button
              padding="2%"
              variant="contained"
              LinkComponent={Link}
              to={"/"}
            >
              Back
            </Button>
          </Stack>
        ) : (
          <Typography> Loading...</Typography>
        )}
      </Card>
    </>
  );
}
