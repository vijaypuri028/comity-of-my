import React, { useContext, useEffect } from "react";
import { Box, Container, Typography } from "@mui/material";
import { navyLogoColor } from "../../../Common/constants";
import { Stars } from "@mui/icons-material";
import ContactCard from "./ContactCard";
import ContactCreate from "./ContactCreate";
import ContactEdit from "./ContactEdit";
import ContactContext from "../../../context/admin/contactContext.js";

const ContactAdmin = () => {
  const { allContacts, getAllContact } = useContext(ContactContext);

  useEffect(() => {
    getAllContact();
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
          Contact Admin Panel
        </Typography>

        {/* Create Contact Section */}
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
          Create New Contact &rarr;
        </Typography>
        <ContactCreate getAllContact={getAllContact} />

        {/* All Contacts Section */}
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
          All Contact &rarr;
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
          {allContacts.map((contact) => (
            <ContactCard key={contact._id} contact={contact} />
          ))}
        </Box>

        {/* Edit Modal Section */}
        <ContactEdit />
      </Container>
    </>
  );
};

export default ContactAdmin;

