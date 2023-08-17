import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import Typography from "@mui/material/Typography";
import MenuBookRoundedIcon from "@mui/icons-material/MenuBookRounded";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import { Button, Container, Grid } from "@mui/material";



const Education = () => {

  return (  
      <>
        <Typography
          variant="h5"
          textAlign="center"
          sx={{ marginTop: "5rem", textDecorationLine: "underline", marginBottom: '1rem' }}
        >
          My Educational Details
        </Typography>
        <Container>
        <Grid sx={{ padding: "1rem", backgroundColor: "#3d3d3d" }}>
          <Timeline position="alternate">
            <TimelineItem>
              <TimelineOppositeContent
                sx={{
                  m: "auto 0",
                  fontWeight: "bold",
                  textAlign: "right",
                  fontSize: { xs: "0.5rem", sm: "inherit" },
                }}
                align="right"
                variant="body2"
                color="black"
              >
                <Button sx={{ background: "black" }}>
                  <span style={{ color: "white" }}>2012</span>
                </Button>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot color="secondary" variant="outlined">
                  <MenuBookRoundedIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: "12px", px: 2 }}>
                <Typography
                  variant="h6"
                  component="span"
                  style={{
                    color: "white",
                    fontWeight: "bolder",
                    fontSize: "0.8rem",
                  }}
                >
                  SSC
                </Typography>
                <Typography
                  style={{
                    color: "black",
                    fontWeight: "bolder",
                    fontSize: { xs: "0.5rem", sm: "0.8rem" },
                  }}
                >
                  Svk High School
                </Typography>
                <Button sx={{ background: "black", color: "yellow" }}>
                  8.3%
                </Button>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent
                sx={{
                  m: "auto 0",
                  fontWeight: "bold",
                  textAlign: "right",
                  fontSize: { xs: "0.5rem", sm: "0.8rem" },
                }}
                align="right"
                variant="body2"
                color="black"
              >
                <Button sx={{ background: "black" }}>
                  <span style={{ color: "white" }}>2012 - 2014</span>
                </Button>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot color="secondary">
                  <SchoolRoundedIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: "12px", px: 2 }}>
                <Typography
                  component="span"
                  style={{
                    color: "white",
                    fontWeight: "bolder",
                    fontSize: { xs: "0.5rem", sm: "0.8rem" },
                  }}
                >
                  Intermediate
                </Typography>
                <Typography
                  style={{
                    color: "black",
                    fontWeight: "bolder",
                    fontSize: { xs: "0.5rem", sm: "0.8rem" },
                  }}
                >
                  Priya Darshini Jn College
                </Typography>
                <Button sx={{ background: "black", color: "yellow" }}>818</Button>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent
                sx={{
                  m: "auto 0",
                  fontWeight: "bold",
                  textAlign: "right",
                  fontSize: { xs: "0.5rem", sm: "inherit" },
                }}
                align="right"
                variant="body2"
                color="black"
              >
                <Button sx={{ background: "black" }}>
                  <span style={{ color: "white" }}>2014 - 2017</span>
                </Button>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot color="secondary" variant="outlined">
                  <LaptopMacIcon />
                </TimelineDot>
                <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
              </TimelineSeparator>
              <TimelineContent sx={{ py: "12px", px: 2 }}>
                <Typography
                  variant="h6"
                  component="span"
                  style={{
                    color: "white",
                    fontWeight: "bolder",
                    fontSize: "0.8rem",
                  }}
                >
                  BSC Bsc(Mscs)
                </Typography>
                <Typography
                  style={{
                    color: "white",
                    fontWeight: "bolder",
                    fontSize:"0.83rem"
                  }}
                >
                  Andhara University Visakhapatnam
                </Typography>
                <Button sx={{ background: "black", color: "yellow" }}>
                  8.13%
                </Button>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent
                sx={{
                  m: "auto 0",
                  fontWeight: "bold",
                  textAlign: "right",
                  fontSize: { xs: "0.5rem", sm: "0.8" },
                }}
                align="right"
                variant="body2"
                color="black"
              >
                <Button sx={{ background: "black" }}>
                  <span style={{ color: "white" }}>2017 - 2019</span>
                </Button>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot color="secondary">
                  <SchoolRoundedIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: "12px", px: 2 }}>
                <Typography
                  variant="h6"
                  component="span"
                  style={{
                    color: "white",
                    fontWeight: "bolder",
                    fontSize: "0.8rem",
                  }}
                >
                  MSC Msc(cs)
                </Typography>
                <Typography
                  style={{
                    color: "white",
                    fontWeight: "bolder",
                    fontSize:"0.83rem"
                  }}
                  
                >
                  Andhara University Visakhapatnam
                </Typography>
                <Button sx={{ background: "black", color: "yellow" }}>
                  7.9%
                </Button>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </Grid>
        </Container>
      </>
  );
};

export default Education;
