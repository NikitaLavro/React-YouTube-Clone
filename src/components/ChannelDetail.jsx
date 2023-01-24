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

  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            zIndex: 10,
            height: "300px",
            background:
              "linear-gradient(170deg, rgba(104,0,255,1) 0%, rgba(201,0,195,1) 100%)",
          }}
        />
        <ChannelCard channelDetails={channelDetails} />
      </Box>
    </Box>
  );
};

export default ChannelDetail;
