//CSS
import "./App.css";

//Router
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Material-UI
import { Box } from "@mui/material";

//Components
import Navbar from "./components/Navbar";
import ChannelDetail from "./components/ChannelDetail";
import Feed from "./components/Feed";
import SearchFeed from "./components/SearchFeed";
import VideoDetail from "./components/VideoDetail";

function App() {
  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: "#000" }}>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Feed />} />
          <Route path="/video/:id" element={<VideoDetail />} />
          <Route path="/channel/:id" element={<ChannelDetail />} />
          <Route path="/search/:search" element={<SearchFeed />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
