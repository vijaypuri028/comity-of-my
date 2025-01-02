import { Container, Typography } from "@mui/material";
import React, { useContext, useEffect } from "react";
import Footer from "../Components/utils/Footer";
import TopTemplete from "../Components/utils/TopTemplete";
import aboutContext from "../context/admin/aboutContext";
import capability from "../Common/images/capabilities.webp"
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
          capability
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
        {/* {aboutMatter?.map((about) => (
          <Typography key={about._id}>{about.content}</Typography>
        ))} */}
        <Typography variant="h4" sx={{ pb: 4 }}>
          About Us
        </Typography>
        <Typography sx={{ pb: 3 }}>
          Founded in Jaipur, Rajasthan in 2010, Comity Edutech began its journey as a firm dedicated to empowering underprivileged youth through skill development. In 2015, we proudly transitioned into a Private Limited Company with a bold vision: to emerge as a leading Indian training organization in the near future.
          <br />
          At Comity Edutech, we are committed to supporting the Government’s mission to uplift and empower underserved communities. Through tailored employability skills training, we bridge the gap between aspiring individuals and the demands of modern industries. Our guiding purpose, “Harmony for Excellence,” drives everything we do.
        </Typography>

        <Typography variant="h5" sx={{ pb: 2 }}>
          Our Core Expertise
        </Typography>
        <Typography sx={{ pb: 1 }}>
          <strong>Skill Development Training:</strong> Tailored programs focused on enhancing the skills needed for success in various industries.
        </Typography>
        <Typography sx={{ pb: 1 }}>
          <strong>Re-skilling and Skill-Upgradation:</strong> Providing opportunities for individuals to stay updated and improve their existing skills.
        </Typography>
        <Typography sx={{ pb: 1 }}>
          <strong>Setting Up Education Ventures:</strong> We support educational ventures aimed at broadening access to skill development opportunities.
        </Typography>
        <Typography sx={{ pb: 1 }}>
          <strong>Entrepreneurship Development Programs (EDPs):</strong> Equipping aspiring entrepreneurs with the knowledge and tools they need to succeed.
        </Typography>
        <Typography sx={{ pb: 1 }}>
          <strong>Corporate Training:</strong> Specialized training programs tailored for corporate organizations to boost their workforce’s effectiveness.
        </Typography>
        <Typography sx={{ pb: 1 }}>
          <strong>Placement and Manpower Solutions:</strong> Assisting both candidates and organizations with placement solutions that meet their specific needs.
        </Typography>
        <Typography sx={{ pb: 3 }}>
          We focus on On-the-Job Training (OJT)-based execution for skill development programs, ensuring participants gain hands-on experience and practical knowledge. This approach not only builds confidence but also prepares candidates to excel in real-world scenarios.
        </Typography>

        
        <Typography>© 2024 COMITY. All rights reserved.</Typography>
      </Container>

      {/* Footer Section */}
      <Footer />
    </>
  );
}

export default About;