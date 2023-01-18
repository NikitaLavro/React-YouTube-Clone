import React, { useState } from "react";

//Router
import { useNavigate } from "react-router-dom";

//MUI
import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";

const SearchBar = () => {
  return (
    <Paper
      component="form"
      onSubmit={() => {}}
      sx={{
        borderRadius: 20,
        border: "1px solid #e3e3e3",
        pl: 2,
        boxShadow: "none",
        mr: { sm: 5 },
      }}
    >
      <input
        type="text"
        className="search-bar"
        placeholder="Search..."
        value=""
        onChange={() => {}}
      />
      <IconButton>
        <Search type="submit" sx={{ p: "10px", color: "red" }} />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
