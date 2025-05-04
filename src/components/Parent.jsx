import React, { useState } from "react";
import Switch from "./Switch";

export default function Parent() {
  const [boldtext, setBoldtext] = useState(false);
  const [italictext, setItalictext] = useState(false);
  const [text, setText] = useState("");
  const changeText = (event) => {
    setText(event);
  };
  const Touppercase = () => {
    let Textvalue = text.toUpperCase();
    setText(Textvalue);
  };
  const Tolowercase = () => {
    setText(text.toLowerCase());
  };
  const Tobold = () => {
    setBoldtext(!boldtext);
  };
  const Toitalic = () => {
    setItalictext(!italictext);
  };
  const ClearText = () => {
    setText("");
  };
  const handleClick = () => {
    if (text.trim()) {
      const words = text
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1));
      setText(words.join(" "));
    }
  };
  return (
    <div>
      <Switch />

      <div className="mx-auto w-[80%] mt-4 ">
        <textarea
          className={`w-[100%]  border-2  text-black border-black rounded-lg p-2 ${
            boldtext ? "font-bold" : ""
          } ${italictext ? "italic" : ""}`}
          value={text}
          onChange={(e) => changeText(e.target.value)}
          rows={8}
          name=""
          id=""
          placeholder="Enter your text here"
        ></textarea>
        <button
          className="shadow-[0px_4px_32px_0_rgba(99,102,241,.70)] w-[15%] mt-3 h-10 border-2 ml-3 font-serif border-blue-500 rounded-lg bg-blue-400 text-white hover:bg-gradient-to-b from-blue-500 to-blue-300"
          onClick={Touppercase}
        >
          UpperCase
        </button>
        <button
          className="shadow-[0px_4px_32px_0_rgba(99,102,241,.70)] w-[15%] mt-3 h-10 border-2 ml-3 font-serif border-blue-500 rounded-lg bg-blue-400 text-white hover:bg-gradient-to-b from-blue-500 to-blue-300"
          onClick={Tolowercase}
        >
          LowerCase
        </button>
        <button
          className="shadow-[0px_4px_32px_0_rgba(99,102,241,.70)] w-[15%] mt-3 h-10 border-2 ml-3 font-serif border-blue-500 rounded-lg bg-blue-400 text-white hover:bg-gradient-to-b from-blue-500 to-blue-300"
          onClick={handleClick}
        >
          Capatialized
        </button>
        <button
          className="shadow-[0px_4px_32px_0_rgba(99,102,241,.70)] w-[15%] mt-3 h-10 border-2 ml-3 font-serif border-blue-500 rounded-lg bg-blue-400 text-white hover:bg-gradient-to-b from-blue-500 to-blue-300"
          onClick={Tobold}
        >
          Bold
        </button>
        <button
          className="shadow-[0px_4px_32px_0_rgba(99,102,241,.70)] w-[15%] mt-3 h-10 border-2 ml-3 font-serif border-blue-500 rounded-lg bg-blue-400 text-white hover:bg-gradient-to-b from-blue-500 to-blue-300"
          onClick={Toitalic}
        >
          Italic
        </button>
        <button
          className={`shadow-[0px_4px_32px_0_rgba(99,102,241,.70)] w-[15%] mt-3 h-10 border-2 ml-3 font-serif border-blue-500 rounded-lg bg-blue-400 text-white hover:bg-gradient-to-b from-blue-500 to-blue-300 `}
          onClick={ClearText}
        >
          Clear Text
        </button>

        {/* <button className="cursor-pointer bg-gradient-to-b from-blue-500 to-blue-400 shadow-[0px_4px_32px_0_rgba(99,102,241,.70)] px-6 py-3 rounded-xl border-[1px] border-slate-500 text-white font-medium group">
          <div className="relative overflow-hidden">
            <p className="group-hover:-translate-y-7 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
             To UpperCase
            </p>
            <p className="absolute top-7 left-0 group-hover:top-0 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
              Change now
            </p>
          </div>
        </button> */}

        <div className="mt-3">
          <p
            className={`${boldtext ? "font-bold" : ""} ${
              italictext ? "italic" : ""
            }`}
          >
            {
              text.split(" ").filter((element) => {
                return element.length != 0;
              }).length
            }{" "}
            Words and {text.length} Characters
          </p>
        </div>
        <div>
          <h1 className="font-serif text-2xl mt-2">Preview</h1>
          <p
            className={`font-serif mt-2 ${boldtext ? "font-bold" : ""} ${
              italictext ? "italic" : ""
            }`}
          >
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}
