import React, { useState } from "react";
import Select from "@mui/material/Select";
import {
  Button,
  ButtonGroup,
  FormControl,
  MenuItem,
  TextField,
} from "@mui/material";
import yoga from "../assets/yoga_illus.jpg";
import axios from "axios";
import ReactPlayer from "react-player/youtube";

function VideoLearning() {
  // State to track the selected filter
  const [selectedFilter, setSelectedFilter] = useState("all"); // Default to show all videos
  const [selectedKeyWord, setSelectedKeyWord] = useState("");
  const [output, setOutput] = useState([]);
  const url =
    "https://7765-2409-40c0-1009-8a79-5843-c376-438c-a313.ngrok-free.app";

  const handleSearch = async (keyword) => {
    const res = await axios.post(
      "https://f809-2402-3a80-6f3-46b1-91d7-bf15-72d2-93a8.ngrok-free.app/user/fetch-youtube-videos",
      {
        body: { query: keyword },
      },
      {
        headers: { "ngrok-skip-browser-warning": "69420" },
      }
    );
    console.log(res.data);
    setOutput(res.data);
  };

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
  // const videos = [
  //   { id: 1, title: "Yoga Video 1", category: "yoga" },
  //   { id: 2, title: "Ayurveda Video 1", category: "ayurveda" },
  //   { id: 3, title: "Yoga Video 2", category: "yoga" },
  //   { id: 4, title: "Ayurveda Video 2", category: "ayurveda" },
  //   { id: 5, title: "Ayurveda Video 2", category: "ayurveda" },
  //   { id: 6, title: "Ayurveda Video 2", category: "ayurveda" },
  //   { id: 7, title: "Ayurveda Video 2", category: "ayurveda" },
  // ];

  return (
    <div className="container mx-auto p-4">
      <div className="w-full flex ">
        <div className="flex-1">
          <img src={yoga} className="w-[75%] p-6 ml-20" alt="" />
        </div>

        <div className="flex-1 flex-col items-center mt-32">
          <h1 className="text-4xl font-bold">
            Unlock the Secrets of Your Body with Ayurveda{" "}
          </h1>
          <h2 className="text-2xl text-slate-400">
            Explore Informative Videos below
          </h2>
        </div>
      </div>
      {/* Filter Buttons */}
      <div className="w-full mt-20 mb-4 flex justify-between items-center">
        <div className=" items-center">
          <h2 className=" text-slate-500 mr-4 mb-4">
            SEARCH FOR EDUCATIONAL VIDEOS:
          </h2>
          <TextField
            id="outlined-basic"
            placeholder="search"
            onChange={(e) => {
              setSelectedKeyWord(e.target.value);
            }}
          />
          <button
            className="h-12 ml-2 p-2 border-[1px] border-black rounded-md"
            onClick={() => {
              selectedKeyWord && handleSearch(selectedKeyWord);
            }}
          >
            SEARCH
          </button>
        </div>

        <ButtonGroup
          variant="outlined"
          aria-label="outlined button group"
          className="mt-12"
        >
          <Button
            className="border-[1px] border-black m-2 rounded-sm"
            onClick={() => {
              handleSearch("ayurveda");
            }}
          >
            Ayurveda
          </Button>
          <Button
            className="border-[1px] border-black m-2 rounded-sm"
            onClick={() => {
              handleSearch("meditation");
            }}
          >
            Meditation
          </Button>
          <Button
            className="border-[1px] border-black m-2 rounded-sm"
            onClick={() => {
              handleSearch("yoga");
            }}
          >
            Yoga
          </Button>
        </ButtonGroup>

        {/* <FormControl>
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
        </FormControl> */}
      </div>

      <div className="grid grid-cols-3 gap-2">
        {/* <iframe
          src="https://www.youtube.com/embeded/AB3Y-4a3ZrU"
          frameborder="0"
        ></iframe> */}
        {output?.map((video, index) => (
          // const url = getId(video.link)(
          <div key={index} className=" p-4 w-full  mt-4 mb-4">
            <ReactPlayer
             width='80%'
             height='95%'
              url={video.link}
            />

            {/* <iframe
                // Adjust the height as needed
                src={`http://www.youtube.com/embed/${url}`}
                style={{ width: "100%", height: "60%" }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              /> */}
            <h2 className="text-2xl mt-2 font-semibold">{video.title}</h2>
          </div>
        ))}
        {/* {fV.map((video) => (
          <div
            key={video.id}
            className="border rounded-lg p-4 w-64 h-72 mr-12 mt-4 mb-4"
          >
            <h2 className="text-xl font-semibold">{video.title}</h2>
            {/* Add video player or thumbnail here */}
        {/* </div> */}
      </div>
      {/* </div> */}
    </div>
  );
}

export default VideoLearning;
