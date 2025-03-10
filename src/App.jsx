import { useEffect, useState } from "react";
import Background from "./components/Background/Background"; // Ensure correct case
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";  // Fixed import

export default function App() {
  let heroData = [
    { text1: "Dive into ", text2: "what you love" },
    { text1: "Indulge", text2: "your passions" },
    { text1: "Give in to", text2: "what you love" },
  ];

  const [heroCount, setHeroCount] = useState(2);
  const [playStatus, setPlayStatus] = useState(false);

  useEffect(()=> {
    setInterval(()=>{})

  })
  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount} />
      <Navbar />
      <Hero
      setPlayStatus={setPlayStatus}
      heroData={heroData[heroCount]}
      heroCount={heroCount}
      setHeroCount={setHeroCount}
      playStatus={playStatus}
      />
    </div>
  );
}
