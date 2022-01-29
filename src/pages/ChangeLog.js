import React from "react";
import "./ChangeLog.css";
import ChangeLogMD from "../components/ChangeLogMD";
import StandardPage from "../components/StandardPage";

export default function Home() {
  return (
    <StandardPage className='ChangeLog'>
      <ChangeLogMD/>
    </StandardPage>
  );
}
