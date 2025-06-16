/**
 * React TV is an web streaming platform that allows users to browse
 * through the episodes of a variety of different shows.
 */
import { useState } from "react";
import ShowDetails from "./shows/ShowDetails";
import ShowSelection from "./shows/ShowSelection";
import { tvShows } from "./shows/data";

export default function App() {
  const [selectedShow, setSelectedShow] = useState(tvShows)
  const [selectedEpisode, setSelectedEpisode] = useState()
  return (
    <>
      <header>
        <p>React TV</p>
        {tvShows.map(shows=><ShowSelection key={shows.name} name={shows.name} setSelectedShow={setSelectedShow}></ShowSelection>)}
      </header>
      <main>
          
                  
          
          



      </main>
    </>
  );
}
