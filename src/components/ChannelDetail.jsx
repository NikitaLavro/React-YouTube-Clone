import React, { useState, useEffect } from "react";

//Routes
import { useParams } from "react-router-dom";

//MUI
import { Box } from "@mui/material";
import { Videos, ChannelCard } from "/";

//API
import { fetchFromApi } from "../utils/fetchFromApi";

const ChannelDetail = () => {
  const [channelDetails, setChannelDetails] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchFromApi(`channels?part="snippet&id=${id}`).then((data) =>
      setChannelDetails(data?.items[0])
    );
  }, [id]);
  console.log(channelDetails);

  return <div>{id}</div>;
};

export default ChannelDetail;
