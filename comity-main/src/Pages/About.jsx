import { Container, Typography } from "@mui/material";
import React, { useContext, useEffect } from "react";
import Footer from "../Components/utils/Footer";
import TopTemplete from "../Components/utils/TopTemplete";
import aboutContext from "../context/admin/aboutContext";

function About() {
  const { aboutMatter, getAllShowAbout } = useContext(aboutContext);

  useEffect(() => {
    getAllShowAbout();
  }, []);

  return (
    <>
      {/* Top Templete */}
      <TopTemplete
        background={
          "https://cdn.pixabay.com/photo/2015/08/05/13/55/children-876543_1280.jpg"
        }
        title={"Comity Edutech and you"}
        tagLine={"Working together to deliver value to your business."}
      />

      {/* About Us Material Container */}
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
          paddingBlock: {
            xs: 3,
            sm: 5,
            md: 7,
          },
          paddingInline: {
            xs: 1,
            sm: 4,
            md: 12,
          },
          "& > p": {
            fontSize: "1.25rem",
          },
        }}
      >
        {/* About Us Material */}
        {aboutMatter?.map((about) => (
          <Typography key={about._id}>{about.content}</Typography>
        ))}
        <Typography>© 2024 COMITY. All rights reserved.</Typography>
      </Container>

      {/* Footer Section */}
      <Footer />
    </>
  );
}

export default About;