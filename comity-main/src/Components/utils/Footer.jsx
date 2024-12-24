import { Box, Link, List, ListItem, Typography } from "@mui/material";
import { darkNavyBg, lightNavyBg, navyTextColor } from "../../Common/constants";
import logo from "../../Common/images/logos/comityCrop.png";
import React, { useContext } from "react";
import SocialMediaContext from "../../context/admin/socialMediaContext";
import ContactContext from "../../context/admin/contactContext";

// Social Media Photos
import facebook from "../../Common/images/socialIcons/facebook.png";
import facebookActive from "../../Common/images/socialIcons/facebookActive.png";
import instagram from "../../Common/images/socialIcons/instagram.png";
import instagramActive from "../../Common/images/socialIcons/instagramActive.png";
import linkedin from "../../Common/images/socialIcons/linkedin.png";
import linkedinActive from "../../Common/images/socialIcons/linkedinActive.png";

// Contact icons
import { LocationOn, PhoneAndroid, Email } from "@mui/icons-material";

const Footer = () => {
  const socialIcons = (item) => {
    if (item.type === "facebook") return { img: facebook, activeImg: facebookActive };
    if (item.type === "instagram") return { img: instagram, activeImg: instagramActive };
    if (item.type === "linkedin") return { img: linkedin, activeImg: linkedinActive };
  };

  const contactIcons = (contactType) => {
    if (contactType === "phone") return <PhoneAndroid />;
    if (contactType === "address") return <LocationOn />;
    if (contactType === "email") return <Email />;
  };

  const { getAllSocialMedia, allSocialMedias } = useContext(SocialMediaContext);
  const { allContacts, getAllContact } = useContext(ContactContext);

  React.useEffect(() => {
    getAllSocialMedia();
    getAllContact();
  }, []);

  return (
    <Box
      sx={{
        background: darkNavyBg,
        color: lightNavyBg,
        paddingBlock: { xs: 2, sm: 3 },
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        alignItems: { sm: "flex-start" },
        justifyContent: "space-between",
        flexWrap: "wrap",
        paddingInline: { xs: 2, sm: 6, md: 10 },
        textAlign: { sm: "left" },
      }}
    >
      {/* Logo and tag line section */}
      <Box
        sx={{
          mb: { xs: 3, sm: 0 },
          display: "flex",
          flexDirection: "column",
          alignItems: { sm: "flex-start" },
          "& > img": {
            width: 50,
            height: 50,
          },
          "& > p": {
            fontSize: 12,
            maxWidth: { sm: 250, md: 360 },
          },
        }}
      >
        <img src={logo} alt="Logo" />
        <Typography variant="h6" sx={{ mt: 1 }}>
          Comity Edutech
        </Typography>
        <Typography>
          <div>Harmony for Excellence!</div>
        </Typography>

        {/* Social Media Section */}
        <Box
          sx={{
            display: "flex",
            gap: 1,
            pt: 2,
            justifyContent: { sm: "flex-start" },
          }}
        >
          {allSocialMedias?.map((item) => (
            <Link key={item.type} target="blank" href={item.link}>
              <Box
                sx={{
                  width: "30px",
                  height: "30px",
                  background: `url(${socialIcons(item).img})`,
                  backgroundSize: "cover",
                  cursor: "pointer",
                  ":hover": {
                    background: `url(${socialIcons(item).activeImg})`,
                    backgroundSize: "cover",
                  },
                }}
              />
            </Link>
          ))}
        </Box>
      </Box>

      {/* Additional Information Section */}
      <Box
        sx={{
          mb: { xs: 3, sm: 0 },
          textAlign: { sm: "left" },
        }}
      >
        <Typography variant="h6">Additional Information</Typography>
        <List
          sx={{
            fontSize: 14,
            lineHeight: 0.5,
            "& > li": {
              paddingLeft: 0,
              cursor: "pointer", // Ensures the cursor is a pointer
              "& a": {
                textDecoration: "none", // Removes underline from links
                color: "inherit", // Keeps link color consistent
                ":hover": {
                  textDecoration: "underline", // Optional hover style
                  color: navyTextColor, // Changes color on hover
                  
                },
              },
            },
          }}
        >
          <ListItem>
            <Link href="/">Home</Link>
          </ListItem>
          <ListItem>
            <Link href="/about">About Us</Link>
          </ListItem>
          <ListItem>
            <Link href="/ourinitiative">Initiative</Link>
          </ListItem>
          <ListItem>
            <Link href="/capabilities">Capabilities</Link>
          </ListItem>
          <ListItem>
            <Link href="/carriers">Careers</Link>
          </ListItem>
        </List>
      </Box>

      {/* Contact Details Section */}
      <Box sx={{ textAlign: { sm: "left" } }}>
        <Typography variant="h6">Contact Details</Typography>
        <List
          sx={{
            fontSize: 14,
            "& > li": {
              paddingLeft: 0,
              cursor: "pointer",
              ":hover": {
                "& > svg": {
                  color: navyTextColor,
                },
              },
            },
          }}
        >
          {allContacts?.map((contact) => (
            <ListItem key={contact._id}>
              {contactIcons(contact.type)}: {contact.content}
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default Footer;
