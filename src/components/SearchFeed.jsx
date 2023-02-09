import React, { useState, useEffect } from "react";

//MUI
import { Box, Typography } from "@mui/material";

//Components
import { Videos } from "/";

//Utils
import { fetchFromApi } from "../utils/fetchFromApi";

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromApi(`search?part=snippet&q=`).then((data) => {
      setVideos(data.items);
    });
  }, []);

  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
      <Typography variant="h4" fontWeight="bold" md={2} sx={{ color: "white" }}>
        Search Results for: <span style={{ color: "#F31503" }}>Videos</span>
      </Typography>
      <Videos videos={videos} />
    </Box>
  );
};

export default SearchFeed;
