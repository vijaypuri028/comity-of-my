import React, { useContext, useEffect } from "react";
import { Box, Container, Typography } from "@mui/material";
import { navyLogoColor } from "../../../Common/constants";
import { Stars } from "@mui/icons-material";
import AboutCard from "./AboutCard";
import AboutCreate from "./AboutCreate";
import aboutContext from "../../../context/admin/aboutContext";
import AboutEdit from "./AboutEdit";

const AboutAdmin = () => {
  const { allAbouts, getAllAbout } = useContext(aboutContext);

  useEffect(() => {
    getAllAbout();
    // eslint-disable-next-line
  }, []);

  return (
    <Container
      sx={{
        "& > h2": {
          paddingBlock: 2,
          textAlign: "center",
        },
      }}
    >
      <Typography variant="h2" color={navyLogoColor}>
        About Admin Panel
      </Typography>

      {/* Create About Section */}
      <Typography
        variant="h5"
        sx={{
          pb: 2,
          color: navyLogoColor,
          display: "flex",
          alignItems: "center",
          gap: 1,
        }}
      >
        <Stars />
        Create New About Section &rarr;
      </Typography>
      <AboutCreate getAllAbout={getAllAbout} />

      {/* All Abouts Section */}
      <Typography
        variant="h5"
        sx={{
          pb: 2,
          color: navyLogoColor,
          display: "flex",
          alignItems: "center",
          gap: 1,
          mt: 5,
        }}
      >
        <Stars />
        All About Sections &rarr;
      </Typography>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
          paddingBlock: 2,
        }}
      >
        {allAbouts.map((about) => (
          <AboutCard key={about._id} about={about} />
        ))}
      </Box>

      {/* Edit Modal Section */}
      <AboutEdit />
    </Container>
  );
};

export default AboutAdmin;
