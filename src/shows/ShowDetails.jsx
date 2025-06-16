import "./shows.css";
import EpisodeList from "../episodes/EpisodeList";
import { useState } from "react";
/** Allows users to browse through the episodes of the given show */
export default function ShowDetails(shows) {
   const [selectedEpisode, setSelectedEpisode] = useState()
   if (!selectedEpisode)
  return <div className="show-details">
    <>
      



    </>
  </div>;
}
