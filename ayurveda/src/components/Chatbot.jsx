import { TextField } from "@mui/material";
import React, { useState } from "react";
import { ImCross } from "react-icons/im";
import axios from "axios";

const Chatbot = ({ toggleBotStatus }) => {
  const [question, setQuestion] = useState("");
  const [output, setOutputText] = useState("");
  const [answer, setAnswer] = useState([]);

  const fetchResult = async (e) => {
    e.preventDefault();

    var settings = {
      url: "https://717b-2409-40c0-1009-8a79-bcac-4d26-f0e8-945d.ngrok.io/v1/get-response",
      method: "POST",
      timeout: 0,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        // "X-CSRFToken": getCookie("csrftoken"),
      },
      data: {
        question: question,
      },
    };
    console.log(question);

    const res = await axios.post(
      settings.url,
      { question },
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          // "X-CSRFToken": getCookie("csrftoken"),
        },
      }
    );
    const txt = res?.data?.data?.answer.split("\n");
    setAnswer(txt);

    // console.log(res.data["answer"]);
  };

  return (
    <div
      className="fixed bottom-4 right-4 w-72 bg-gray-400 rounded-md bg-white border-black border-2"
      style={{ padding: "1%", color: "white" }}
    >
      <div className="w-full flex justify-end mb-2 ">
        <ImCross
          style={{ color: "black" }}
          onClick={() => {
            toggleBotStatus();
          }}
        />
      </div>
      <div className="h-72 bg-slate-300  rounded-md overflow-y-auto p-4 font-sans  rounded-md  text-black bg-white ">
        {answer.map((line, index) => (
          <React.Fragment key={index}>
            {line}
            {index < answer.length - 1 && <br />}{" "}
            {/* Add a <br> element for all lines except the last one */}
          </React.Fragment>
        ))}
      </div>

      <div className="w-[100%] h-[100%] flex items-center justify-center text-black">
        <TextField
          id="standard-basic"
          placeholder="what's your question?"
          variant="standard"
          onChange={(e) => setQuestion(e.target.value)}
        />
        <button onClick={fetchResult}>send</button>
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
