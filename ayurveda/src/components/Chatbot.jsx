import { TextField } from "@mui/material";
import React, { useState } from "react";
import { ImCross } from "react-icons/im";

const Chatbot = ({ toggleBotStatus }) => {
  const [question, setQuestion] = useState("");
  const [output, setOutputText] = useState("");
  //   const fetchResult = () => {
  //     var settings = {
  //       url: "http://127.0.0.1:8001/v1/get-response",
  //       method: "POST",
  //       timeout: 0,
  //       headers: {
  //         "Content-Type": "application/x-www-form-urlencoded",
  //         "X-CSRFToken": getCookie("csrftoken"),
  //       },
  //       data: {
  //         question: question,
  //       },
  //     };
  //   };
  return (
    <div className="fixed bottom-4 right-4 w-72">
      <div className="w-full flex justify-end mb-2">
        <ImCross
          onClick={() => {
            toggleBotStatus();
          }}
        />
      </div>
      <div className="h-72 bg-slate-300 drop-shadow-md rounded-md overflow-y-auto p-4 font-sans">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </div>

      <div className="w-[100%] h-[100%] flex items-center justify-center">
        <TextField
          id="standard-basic"
          placeholder="what's your question?"
          variant="standard"
        />
        <button
          className="p-2 ml-4"
          onClick={() => {
            setOutputText("");
          }}
        >
          reset
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
