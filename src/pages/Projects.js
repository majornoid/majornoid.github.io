import React from "react";
import "./Projects.css";
import StandardPage from "../components/StandardPage";
import ProjectCard from "../components/ProjectCard";
import { Box } from "@mui/system";

export default function Projects() {
  return (
    <StandardPage>
      <h1>Projects</h1>
      <Box
        sx={{
          width: "98%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
          gap: "4vmax",
        }}
      >
        <ProjectCard
          title="Crowgenium"
          src="https://i.ytimg.com/vi/YW2MIEkZLt4/maxresdefault.jpg"
        >
          This is placeholder text
        </ProjectCard>

        <ProjectCard
          title="Portfolio"
          src="https://i.ytimg.com/vi/YW2MIEkZLt4/maxresdefault.jpg"
        >
          Test Test Test
        </ProjectCard>
      </Box>
    </StandardPage>
  );
}
