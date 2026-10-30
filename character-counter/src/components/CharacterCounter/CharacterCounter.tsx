import type {CharacterCounterProps, TextStats} from '../../types'
import { useState } from "react";
import { StatsDisplay } from "../StatsDisplay/StatsDisplay";
import { TextInput } from "../TextInput/TextInput";


export  function CharacterCount({minWords=25, maxWords=100,  targetReadingTime=1}: CharacterCounterProps){
    const [stats, setStats] = useState<TextStats>({
    characterCount: 0,
    wordCount: 0,
    readingTime: 0,
  });
    const handleTextChange = (text: string) => {
  let wordCount = 0;

  if (text.trim() !== "") {
    wordCount = text.trim().split(" ").length;
  }

  const readingTime = wordCount / 200;

    setStats({characterCount: text.length, wordCount: wordCount, readingTime: readingTime, });
};
    return(
    <div className="space-y-4">   
        {/* <h3>Words</h3>
        <p>Min: {minWords}</p>
        <p>Max: {maxWords}</p> */}
        
      <TextInput onTextChange={handleTextChange} />

      <StatsDisplay stats={stats} />

      <p>
        Min: {minWords} | Max: {maxWords}
      </p>
      <p>Target reading time: {targetReadingTime} min</p>

        
    </div>
    )
}