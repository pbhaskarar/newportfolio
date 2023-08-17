import React from "react";
import { Button, Container, Grid, Stack, Typography } from "@mui/material";
import ImgHome from "../assets/Rectangle 1 (9).jpg";
import "../App.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
// import HomeImg from '../assets/IMG_20201010_065416_363.jpg'
import Typed from "react-typed";
import About from "./About";
import Education from "./Education";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";

const Home = () => {
  return (
    <>
      <Container>
        <Typography
          variant="h3"
          textAlign="center"
          sx={{ marginTop: "4rem", textDecorationLine: "underline" }}
        ></Typography>
        <Grid
          container
          alignItems="center"
          style={{ background: "#3d3d3d", paddingTop: "2rem" }}
        >
          <Grid item xs={12} sm={4} md={6} padding="1rem">
            <img className="imagefluid" src={ImgHome} alt="profile_pic" />
          </Grid>
          <Grid item xs={12} sm={8} md={6}>
            <Grid container>
              <Grid item xs={12} sm={3} md={3}>
                <Stack
                  direction={{ xs: "row", sm: "column" }}
                  sx={{
                    alignItems: "center",
                    justifyContent: "center",
                    color: "whitesmoke",
                  }}
                >
                  <Button>
                    <a
                      href="https://github.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GitHubIcon style={{ color: "white" }} />
                    </a>
                  </Button>
                  <Button>
                    <a
                      href="https://www.linkedin.com/feed/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <LinkedInIcon style={{ color: "white" }} />
                    </a>
                  </Button>
                  <Button>
                    <a
                      href="https://www.facebook.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FacebookIcon style={{ color: "white" }} />
                    </a>
                  </Button>
                </Stack>
              </Grid>
              <Grid item xs={12} sm={9} md={9}>
                <Stack
                  sx={{
                    alignItems: "center",
                    textAlign: "center",
                    color: "whitesmoke",
                  }}
                >
                  <h6>HELLO EVERYBODY, I AM </h6>
                  <h4>BHASKAR</h4>
                  <Typed
                    style={{ fontSize: "2rem", color: "yellow" }}
                    strings={[
                      "Junior Ui / React Developer",
                      "Frontend Developer",
                      "React developer",
                    ]}
                    typeSpeed={300}
                    backSpeed={50}
                    loop
                  ></Typed>
                </Stack>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <About />
      <Education />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
};

export default Home;
