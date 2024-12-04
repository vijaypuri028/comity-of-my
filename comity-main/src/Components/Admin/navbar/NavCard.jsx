import { Box, Button, Card, Typography } from "@mui/material";
import React, { useContext } from "react";
import { greenColor, navyLogoColor, redColor } from "../../../Common/constants";
import navContext from "../../../context/admin/navContext";

const FONT_SIZE = 18;

const NavCard = ({ route }) => {

    const { handleEditButton } = useContext(navContext);

  return (
    <Card
      sx={{
        width: "90%",
        marginInline: "auto",
        p: 2,
        mb: 2,
        "& > article": {
          fontSize: FONT_SIZE,
          color: navyLogoColor,
        },
        "& > button": {
          textTransform: "none",
          marginInline: 1,
          marginTop: 1,
        },
        "& > article > span, & > div > span": {
          fontSize: FONT_SIZE,
          color: "black",
          pl: 1,
          fontWeight: 500,
        },
      }}
    >
      <Typography component={"article"}>
        Nav Route Name:
        <Typography component={"span"}>{route?.title}</Typography>
      </Typography>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          paddingBlock: 2,
          "&  > article": {
            pr: 1,
            fontSize: FONT_SIZE,
            color: navyLogoColor,
          },
        }}
      >
        <Typography component="article">Show This on website :</Typography>

        {route?.showThis ? (
          <Typography
            style={{
              color: greenColor,
            }}
          >
            YES
          </Typography>
        ) : (
          <Typography
            style={{
              color: redColor,
            }}
          >
            NO
          </Typography>
        )}
      </Box>

      <Button size="large" variant="outlined" onClick={() => handleEditButton(route)} >Edit</Button>
    </Card>
  );
};

export default NavCard;
