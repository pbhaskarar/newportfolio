import React from 'react';
import { Grid, Typography, Box, Container, LinearProgress } from '@mui/material';
import HtmlRoundedIcon from '@mui/icons-material/HtmlRounded';
import CssIcon from '@mui/icons-material/Css';
import JavascriptRoundedIcon from '@mui/icons-material/JavascriptRounded';
import Carousel from 'react-material-ui-carousel';

const SkillsSection = () => {
  const skillsData = [
    { name: 'HTML', icon: <HtmlRoundedIcon size={50} />, progress: 0 },
    { name: 'CSS', icon: <CssIcon size={50} />, progress: 80 },
    { name: 'Bootstrap', icon: <JavascriptRoundedIcon size={50} />, progress: 60 },
    { name: 'JavaScript', icon: <JavascriptRoundedIcon size={50} />, progress: 70 },
    { name: 'ReactJS', icon: <JavascriptRoundedIcon size={50} />, progress: 90 },
    // You can replace this with an actual Material-UI icon or image of Material-UI logo
    { name: 'Material-UI', icon: <img src="path/to/mui-icon.png" alt="Mui Icon" width={50} />, progress: 85 },
  ];

  return (
    <Container>
      <Typography
        variant="h5"
        textAlign="center"
        sx={{ marginTop: "5rem", textDecorationLine: "underline", marginBottom: '1rem' }}
      >
        Skills
      </Typography>
      <Box py={5} textAlign="center">
        <Grid container spacing={3} justifyContent="center" sx={{ background: "#3d3d3d" }}>
          <Grid item xs={6}>
              <Carousel>
                {skillsData.map((skill, index) => (
                  <Grid item key={index}>
                    <Box display="flex" flexDirection="column" alignItems="center">
                      {skill.icon}
                      <Typography variant="subtitle1" mt={1}>
                        {skill.name}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Carousel>
          </Grid>
          <Grid item xs={6}>
            {/* Right side */}
            <Box display="flex" flexDirection="column" alignItems="center">
              {skillsData.map((skill, index) => (
                <Box key={index} width="100%" mb={2}>
                  <Typography variant="subtitle1" sx={{ textAlign: "right" }}>
                    {skill.name}
                  </Typography>
                  <LinearProgress variant="determinate" value={skill.progress} />
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default SkillsSection;
