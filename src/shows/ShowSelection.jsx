import "./shows.css";
import { useState } from "react";
import { tvShows } from "./data";
/** A navbar that allows users to choose between a list of shows */
export default function ShowSelection(shows, setSelectedShow) {
  const [selectedShow] = useState(shows)
  return <nav className="shows">
    <a className="show" onClick={()=>{
      setSelectedShow={selectedShow}
      console.log(selectedShow)

      }}>{shows.name}</a>
    
  </nav>;
}
