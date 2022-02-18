import React from "react";
import logo from "../images/logo.png";
import { makeStyles } from "@mui/styles";
import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { height } from "@mui/system";

const useStyles = makeStyles({
  logo: {
    height: "8vw",
    minHeight: "100px",
    minWidth: "100px",
    paddingTop: "1vh",
  },
  button: {
    width: "72%",
  },
  socials: {
    display: "flex",
    flexDirection: "column",
    alignItems: "left",
    gap: "1vh",
  },
  version: {
    fontSize: "14px",
    marginTop: "auto",
    height: "5vh",
  }
});

export default function NavBar() {
  const classes = useStyles();
  return (
    <Box
      sx={{
        height: "100vh",
        width: "10vw",
        minWidth: "120px",
        zIndex: "1",
        position: "fixed",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "black",
        alignItems: "center",
        gap: "2vmax",
        top: "0",
        left: "0",
      }}
    >
      <Link to="/">
        <img src={logo} alt="logo" className={classes.logo}></img>
      </Link>

      <Button
        component={Link}
        to={"/projects"}
        variant="outlined"
        className={classes.button}
        color="secondary"
      >
        Projects
      </Button>
      <Button
        component={Link}
        to={"/resume"}
        variant="outlined"
        className={classes.button}
        color="secondary"
      >
        Resume
      
      </Button>

      <Box className={classes.socials}>
        <a href="https://www.linkedin.com/in/morganjackson-68-65-6c-6c-6f/">
          <img src="https://img.shields.io/badge/LinkedIn-blue?style=round-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/morganjackson-68-65-6c-6c-6f/" alt="LinkedIn Link"/>
        </a>

        <a href="https://github.com/majornoid">
          <img src="https://img.shields.io/github/followers/majornoid?label=GitHub&style=social" alt="GitHub Link"/>
        </a>
      </Box>

      <footer className={classes.version}>
        <Link to="/changelog" style={{ color: "#FFF", textDecoration: "none" }}>
          Alpha 1.1.1
        </Link>
      </footer>
    </Box>
  );
}
