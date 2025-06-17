import { useState } from "react";
import ShowDetails from "./shows/ShowDetails";
import ShowSelection from "./shows/ShowSelection";
import { tvShows } from "./shows/data";

export default function App() {
  const [selectedShow, setSelectedShow] = useState(null); // Start with no show selected

  return (
    <>
      <header>
        <p>React TV</p>
        <ShowSelection shows={tvShows} setSelectedShow={setSelectedShow} />
      </header>
      <main>
        <ShowDetails show={selectedShow} />
      </main>
    </>
  );
}
