import React, { useContext } from "react";
import { Box, Button, Card, Link, Typography } from "@mui/material";
import { navyLogoColor, redColor } from "../../../Common/constants";
import SocialMediaContext from "../../../context/admin/socialMediaContext";

const FONT_SIZE = 18;

const SocialMediaCard = ({ socialMedia }) => {
  const { handleDelete, handleEditButton } = useContext(SocialMediaContext);

  return (
    <Card
      sx={{
        width: "90%",
        p: 2,
        "& > article": {
          fontSize: FONT_SIZE,
        },
        "& > button": {
          textTransform: "none",
          marginInline: 1,
          marginTop: 1,
        },
        "& > article > span, & > div > span": {
          fontSize: FONT_SIZE,
          pr: 1,
          fontWeight: 500,
          color: navyLogoColor,
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          paddingBlock: 2,
          "&  > article": {
            pl: 1,
            fontSize: FONT_SIZE,
          },
        }}
      >
        <Typography component="span">Social Platform :</Typography>

        {socialMedia.type === "facebook" ? (
          <Typography
            style={{
              color: "#0866FF",
            }}
          >
            Facebook
          </Typography>
        ) : socialMedia.type === "instagram" ? (
          <Typography
            style={{
              color: redColor,
            }}
          >
            Instagram
          </Typography>
        ) : (
          <Typography
            style={{
              color: "#0A66C2",
            }}
          >
            LinkedIn
          </Typography>
        )}
      </Box>

      <Typography sx={{
        mb: 2,
        '& > span': {
          color: navyLogoColor
        },
        '& > a': {
          color: navyLogoColor,
          textDecoration: 'underline',
          cursor: 'pointer'
        }
      }} >
        <Typography component="span">Link Address : </Typography>
        <Link target='_blank' href={socialMedia?.link}>
        {socialMedia?.link}
        </Link>
      </Typography>

      <Button
        size="large"
        variant="outlined"
        onClick={() => handleEditButton(socialMedia)}
      >
        Edit
      </Button>

      <Button
        size="large"
        color="warning"
        variant="outlined"
        onClick={() => handleDelete(socialMedia._id)}
      >
        Delete
      </Button>
    </Card>
  );
};

export default SocialMediaCard;
