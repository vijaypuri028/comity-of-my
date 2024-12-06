import React, { useContext } from "react";
import { Box, Button, Card, Typography } from "@mui/material";
import { greenColor, navyLogoColor, redColor,grayBorderColor } from "../../../Common/constants";
import ContactContext from "../../../context/admin/contactContext";

const FONT_SIZE = 18;

const ContactCard = ({ contact }) => {
  const { handleDelete, handleEditButton } = useContext(ContactContext);

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
        <Typography component="span">Select your type :</Typography>

        {contact.type === "phone" ? (
  <Typography
    style={{
      color: greenColor,
    }}
  >
    Phone
  </Typography>
) : contact.type === "email" ? (
  <Typography
    style={{
      color: grayBorderColor, // Define a color for email, e.g., blueColor
    }}
  >
    Email
  </Typography>
) : (
  <Typography
    style={{
      color: redColor,
    }}
  >
    Address
  </Typography>
)}

      </Box>

      <Typography>
        <Typography component="span">Content :</Typography>
        {contact?.content}
      </Typography>

      <Button
        size="large"
        variant="outlined"
        onClick={() => handleEditButton(contact)}
      >
        Edit
      </Button>

      <Button
        size="large"
        color="warning"
        variant="outlined"
        onClick={() => handleDelete(contact._id)}
      >
        Delete
      </Button>
    </Card>
  );
};

export default ContactCard;
