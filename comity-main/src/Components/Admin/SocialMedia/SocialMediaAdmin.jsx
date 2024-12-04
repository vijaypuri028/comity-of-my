import React, { useContext, useEffect } from "react";
import { Box, Container, Typography } from "@mui/material";
import { navyLogoColor } from "../../../Common/constants";
import { Stars } from "@mui/icons-material";
import SocialMediaCard from "./SocialMediaCard";
import SocialMediaCreate from "./SocialMediaCreate";
import SocialMediaEdit from "./SocialMediaEdit";
import SocialMediaContext from "../../../context/admin/socialMediaContext.js";

const SocialMediaAdmin = () => {
  const { allSocialMedias, getAllSocialMedia } = useContext(SocialMediaContext);

  useEffect(() => {
    getAllSocialMedia();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Container
        sx={{
          "& > h2": {
            paddingBlock: 2,
            textAlign: "center",
          },
        }}
      >
        <Typography variant="h2" color={navyLogoColor}>
          SocialMedia Admin Panel
        </Typography>

        {/* Create SocialMedia Section */}
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
          Create New SocialMedia &rarr;
        </Typography>
        <SocialMediaCreate getAllSocialMedia={getAllSocialMedia} />

        {/* All SocialMedias Section */}
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
          All SocialMedia &rarr;
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
          {allSocialMedias.map((socialMedia) => (
            <SocialMediaCard key={socialMedia._id} socialMedia={socialMedia} />
          ))}
        </Box>

        {/* Edit Modal Section */}
        <SocialMediaEdit />
      </Container>
    </>
  );
};

export default SocialMediaAdmin;
