import React, { useState } from "react";
import Select from "@mui/material/Select";
import { FormControl, MenuItem, TextField } from "@mui/material";

function VideoLearning() {
  // State to track the selected filter
  const [selectedFilter, setSelectedFilter] = useState("all"); // Default to show all videos
  //   const [filteredVideos, setFilteredVideos] = useState([
  //     { id: 1, title: "Yoga Video 1", category: "yoga" },
  //     { id: 2, title: "Ayurveda Video 1", category: "ayurveda" },
  //     { id: 3, title: "Yoga Video 2", category: "yoga" },
  //     { id: 4, title: "Ayurveda Video 2", category: "ayurveda" },
  //     { id: 5, title: "Ayurveda Video 2", category: "ayurveda" },
  //     { id: 6, title: "Ayurveda Video 2", category: "ayurveda" },
  //     { id: 7, title: "Ayurveda Video 2", category: "ayurveda" },
  //   ]);
  //   // Sample video data (you can replace this with your actual video data)
  const videos = [
    { id: 1, title: "Yoga Video 1", category: "yoga" },
    { id: 2, title: "Ayurveda Video 1", category: "ayurveda" },
    { id: 3, title: "Yoga Video 2", category: "yoga" },
    { id: 4, title: "Ayurveda Video 2", category: "ayurveda" },
    { id: 5, title: "Ayurveda Video 2", category: "ayurveda" },
    { id: 6, title: "Ayurveda Video 2", category: "ayurveda" },
    { id: 7, title: "Ayurveda Video 2", category: "ayurveda" },
  ];

  //   const handlefilter = (e) => {
  //     e.preventDefault();
  //     const fV =
  //       selectedFilter === "all"
  //         ? videos
  //         : videos.filter((video) => video.category === selectedFilter);

  //     console.log(fV);
  //     setFilteredVideos(fV);
  //   };
  const fV =
    selectedFilter === "all"
      ? videos
      : videos.filter((video) => video.category === selectedFilter);

  // Filter the videos based on the selected category

  return (
    <div className="container mx-auto p-4">
      {/* Filter Buttons */}
      <div className="w-full mb-4 flex justify-between items-center">
        <div className=" items-center">
          <h2 className=" text-slate-500 mr-4">
            SEARCH FOR EDUCATIONAL VIDEOS:
          </h2>
          <TextField id="outlined-basic" placeholder="search" />
        </div>
        <FormControl>
          <Select
            // labelId="demo-simple-select-label"
            // id="demo-simple-select"
            value={selectedFilter}
            label="filter"
            className="h-[50%]"
            onChange={(e) => {
              setSelectedFilter(e.target.value);
            }}
          >
            <MenuItem value={"yoga"}>Yoga</MenuItem>
            <MenuItem value={"ayurveda"}>Ayurveda</MenuItem>
            <MenuItem value={"all"}>All</MenuItem>
          </Select>
        </FormControl>
      </div>

      <div className="flex flex-wrap ">
        {fV.map((video) => (
          <div
            key={video.id}
            className="border rounded-lg p-4 w-64 h-72 mr-12 mt-4 mb-4"
          >
            <h2 className="text-xl font-semibold">{video.title}</h2>
            {/* Add video player or thumbnail here */}
          </div>
        ))}
      </div>
      {/* </div> */}
    </div>
  );
}

export default VideoLearning;
