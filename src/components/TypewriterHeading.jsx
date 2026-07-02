import React, { useState, useEffect } from 'react';

export default function TypewriterHeading({ onComplete }) {
  const fullText = "Unlock Top Marketing Talent You Thought Was Out of Reach -- Now Just One Click Away!";
  const [displayedText, setDisplayedText] = useState("");
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    let index = 0;
    let timer;
    
    const delayTimer = setTimeout(() => {
      timer = setInterval(() => {
        if (index < fullText.length) {
          index++;
          setDisplayedText(fullText.slice(0, index));
        } else {
          clearInterval(timer);
          setIsDone(true);
          if (onComplete) {
            onComplete();
          }
        }
      }, 35);
    }, 400);

    return () => {
      clearTimeout(delayTimer);
      if (timer) clearInterval(timer);
    };
  }, [onComplete]);

  const blackText = displayedText.slice(0, 67);
  const whiteText = displayedText.slice(67);

  return (
    <h1 className="hero-heading">
      <span className="text-black">{blackText}</span>
      <span className="text-white">{whiteText}</span>
      {!isDone && <span className="typewriter-cursor"></span>}
    </h1>
  );
}
