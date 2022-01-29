import React from "react";
import logo from "../logo.png";
import { makeStyles } from "@mui/styles";
import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  logo: {
    height: "10vh",
    paddingRight: "5vmin",
  },
  button: {
    disabled: "true",
    background: "linear-gradient(45deg, #0EFB0B 30%, #0FFE83 90%)",
  },
});

export default function NavBar() {
  const classes = useStyles();
  return (
    <Box
      sx={{
        width: "100%",
        height: "12vh",
        display: "flex",
        flexDirection: "row",
        backgroundColor: "black",
        alignItems: "center",
        gap: "1.2vw",
      }}
    >
      <Link to="/">
        <img src={logo} alt="logo" className={classes.logo}></img>
      </Link>

      <Button component={Link} to={"/projects"} className={classes.button}>
        {" "}
        Projects{" "}
      </Button>
      <Button component={Link} to={"/resume"} className={classes.button}>
        {" "}
        Resume{" "}
      </Button>
    </Box>
  );
}
