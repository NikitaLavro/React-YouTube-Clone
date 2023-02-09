import React, { useState, useEffect } from "react";

//Router
import { Link, useParams } from "react-router-dom";

//React Player
import ReactPlayer from "react-player";

//MUI
import { Typography, Box, Stack } from "@mui/material";

//Icons
import { CheckCircle } from "@mui/icons-material";

//Utils
import { fetchFromApi } from "../utils/fetchFromApi";

//Components
import { Video } from "./";

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchFromApi(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideoDetail(data.items[0])
    );
  });

  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
            <ReactPlayer />
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
