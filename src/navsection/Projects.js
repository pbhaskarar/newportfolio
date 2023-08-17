import React from "react";
import "../App.css";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import MatchPs from "../assets/matchps.jpg";
import Stackular from "../assets/stackular.jpg";
import Minatable from "../assets/Mintable.png";
import BehanBox from "../assets/behanbox.jpg";
import FilteredScreen from "../assets/filteredscrren.png";
import { Link } from "react-router-dom";

const projectData = [
  {
    id: 1,
    url: "https://www.matchps.com/",
    title: "Matchps",
    img: MatchPs,
    description:
      "MatchPoint Solutions help you and your business buck transient technology trends for long-term digital transformati Our work delivers both an  ROI and nimble, unmatched efficiencies for years to come.",
  },
  {
    id: 2,
    url: "https://www.crunchbase.com/organization/mintable/",
    title: "Mintable",
    img: Minatable,
    description:
      "Mintable is an NFT marketplace where users can create, buy, and sell digital items easiest way to earn and get started with crypto and NFTs.marketplace where users can create, buy, and sell digital items.",
  },
  {
    id: 3,
    url: "https://stackular.co/",
    title: "stackular",
    img: Stackular,
    description:
      "We’re all technical people who can advise our customers. We have no sales team or “Client Partners We only hire the best people who want to work for us or are referred by one of our current employees",
  },
  {
    id: 4,
    url: "https://behanbox.com/",
    title: "behanbox",
    img: BehanBox,
    description:
      "MatchPoint Solutions help you and your business buck transient technology trends for long-term digital transformati Our work delivers both an  ROI and nimble, unmatched efficiencies for years to come.",
  },
  {
    id: 5,
    url: "https://products-filtered-by-bhaskar.netlify.app/",
    title: "FilterProducts",
    img: FilteredScreen,
    description:
      "Discover top-rated, discounted products sorted by category, brand, and stock availability, empowering you to make informed choices while saving money and finding exactly what you need.",
  },
  {
    id: 6,
    url: "https://mintable.app/",
    title: "Mintable",
    img: Minatable,
    description:
      "MatchPoint Solutions help you and your business buck transient technology trends for long-term digital transformati Our work delivers both an  ROI and nimble, unmatched efficiencies for years to come.",
  },
];
const Projects = () => {
  return (
    <>
      <Container>
        <Typography
          variant="h5"
          textAlign="center"
          sx={{
            marginTop: "5rem",
            marginBottom: '2rem',
            textDecorationLine: "underline",
          }}
        >
          Check my Projects
        </Typography>

        <Grid
          container
          spacing={1}
          justifyContent="center"
          alignItems="center"
          sx={{ backgroundColor: "#3d3d3d"}}
        >
          {projectData.map((project) => (
            <Grid item key={project.id} xs={12} sm={6} md={4} lg={4} >
              <Card sx={{ maxWidth: 355 }}>
                <CardActionArea>
                  <Link
                    to={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <CardMedia
                      component="img"
                      height="200"
                      image={project.img}
                      alt={project.title}
                    />
                  </Link>
                  <CardContent>
                    <Typography variant="h5" component="div">
                      <Link
                        to={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {project.title}
                      </Link>
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {project.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Share
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Projects;
