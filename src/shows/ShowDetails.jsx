import "./shows.css";
import EpisodeList from "../episodes/EpisodeList";
import EpisodeDetails from "../episodes/EpisodeDetails";
import { useState } from "react";

export default function ShowDetails({ show }) {
  const [selectedEpisode, setSelectedEpisode] = useState(null);

  if (!show) {
    return (
      <div className="show-details">
        <p>Please select a show</p>
      </div>
    );
  }

  return (
    <div className="show-details">
      <EpisodeList
        name={show.name}
        episodes={show.episodes}
        selectedEpisode={selectedEpisode}
        setSelectedEpisode={setSelectedEpisode}
      />
      <EpisodeDetails episode={selectedEpisode} />
    </div>
  );
}
