import React from "react";
import { Button, Container, Grid, Stack, Typography } from "@mui/material";
import aboutImg from "../assets/about.png";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
// import Carousel from 'react-material-ui-carousel'
// import Typed from 'react-typed';

const About = () => {
  return (
    <>
      <Container>
        <Typography
          variant="h5"
          textAlign="center"
          sx={{ marginTop: "4rem", textDecorationLine: "underline" }}
        >
          About Me
        </Typography>

        <Grid
          container
          spacing={2}
          sx={{ background: "#3d3d3d", marginTop: "1rem" }}
        >
          <Grid item xs={12} md={6} sx={{ padding: "1rem" }}>
            <Stack spacing={2}>
              <Typography
                variant="h6"
                fontWeight="bold"
                sx={{ textDecorationLine: "underline", color: "white" }}
              >
                {" "}
                About me
              </Typography>
              <Typography sx={{ color: "#f5f5f5" }}>
                Hello, I'm Bhaskar, a passionate React developer with one year
                of experience. I love crafting interactive and engaging web
                applications using cutting-edge technologies.
              </Typography>
              <Typography
                variant="h6"
                fontWeight="bold"
                sx={{ textDecorationLine: "underline", color: "white" }}
              >
                {" "}
                Background
              </Typography>
              <Typography sx={{ color: "yellow" }}>
                I started my journey as a web developer with a strong interest
                in front-end development. After exploring various JavaScript
                libraries and frameworks, I discovered React and immediately
                fell in love with its simplicity and power.{" "}
              </Typography>
              <Typography
                variant="h6"
                fontWeight="bold"
                sx={{ textDecorationLine: "underline", color: "white" }}
              >
                Experience
              </Typography>
              <Typography sx={{ color: "#f5f5f5" }}>
                {" "}
                During my one year of experience, I have worked on a diverse
                range of projects, including e-commerce platforms, social media
                applications, and interactive dashboards. I have gained
                expertise in building responsive user interfaces, managing state
                using Redux, and utilizing React Router for seamless navigation.
              </Typography>
            </Stack>
            <Stack
              direction="row"
              spacing={4}
              sx={{
                alignItems: "center",
                color: "whitesmoke",
                justifyContent: "center",
                paddingTop: "1rem",
              }}
            >
              <Button
                size="small"
                sx={{
                  background: "black",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHubIcon style={{ color: "white" }} />
                </a>
              </Button>
              <Button
                size="small"
                sx={{
                  background: "black",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <a
                  href="https://www.linkedin.com/feed/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedInIcon style={{ color: "white" }} />
                </a>
              </Button>
              <Button
                size="small"
                sx={{
                  background: "black",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
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
          <Grid item xs={12} md={6} sx={{ padding: "1rem" }}>
            <img
              src={aboutImg}
              alt="about"
              height="100%"
              width="100%"
              borderRadius="50%"
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default About;
