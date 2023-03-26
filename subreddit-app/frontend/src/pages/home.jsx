import React, { useState } from "react";
import axios from "axios";

import { Grid, List, ListItem } from "@mui/material";
import { Bar } from "../components/bar";
import { Pulse } from "../components/pulse";
import { Topics } from "../components/topics";
import { Activity } from "../components/activity";

export function Home() {

  const getData = () => {
    axios.get("http://localhost:8000/api/data").then((response) => {
      setData(response.data);
    }).catch(error => {
      console.log(error)
    });
  };

  const [data, setData] = useState(getData);

  return (
    <>
      <Grid>
        <Bar />
        <Pulse/>
        <Topics data={data}/>
        <Activity data={data}/>
      </Grid>
    </>
  );
}
