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
  const [videos, setVideos] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    fetchFromApi(`channels?part="snippet&id=${id}`).then((data) =>
      setChannelDetails(data?.items[0])
    );
    fetchFromApi(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => setVideos(data?.items)
    );
  }, [id]);
  console.log(videos);

  return <div>{id}</div>;
};

export default ChannelDetail;
