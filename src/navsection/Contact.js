import { Container, Grid, Typography, TextField, Button, Stack } from "@mui/material";
import React, { useState } from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{`Look for visakhapatnam`}</div>;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("you have notified");
   setFormData('')
    // console.log(formData);
  };

  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };

  return (
    <>
      <Container>
        <Typography
          variant="h5"
          textAlign="center"
          sx={{ marginTop: "5rem", textDecorationLine: "underline" }}
        >
          Contact Me
        </Typography>
        <Grid
          container
          spacing={2}
          sx={{ background: "#3d3d3d", marginTop: "1rem", marginBottom: '3rem' }}
        >
          <Grid item xs={12} md={6} sx={{ padding: "1rem" }}>
            {/* Map component */}
            <Typography variant="h6" sx={{ color: "white" }}>
              Map
            </Typography>
            <div style={{ height: "60vh", width: "100%" }}>
              <GoogleMapReact
                bootstrapURLKeys={{ key: "" }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
              >
                <AnyReactComponent
                  lat={59.955413}
                  lng={30.337844}
                  text="My Marker"
                />
              </GoogleMapReact>
            </div>
          </Grid>

          <Grid item xs={12} md={6} sx={{ padding: "1rem" }}>
            {/* Contact form */}
            <Typography variant="h6" sx={{ color: "white" }}>
              Contact Form
            </Typography>
            
              <Stack sx={{ marginTop: '5rem'}}  >
              <form onSubmit={handleSubmit}  >
              <TextField
                sx={{ input: { color: "white" } }}
                name="name"
                label="Name"
                variant="filled"
                fullWidth
                margin="normal"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <TextField
                sx={{ input: { color: "white" } }}
                type="email"
                name="email"
                label="Email"
                variant="filled"
                fullWidth
                margin="normal"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <TextField
                sx={{ input: { color: "white" } }}
                name="message"
                label="Message"
                variant="filled"
                fullWidth
                margin="normal"
                multiline
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
              />
              <Button
                type="submit"
                variant="contained"
                sx={{ background: "black", color: "yellow" }}
              >
                Submit
              </Button>
            </form>
              </Stack>
           
           
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Contact;
