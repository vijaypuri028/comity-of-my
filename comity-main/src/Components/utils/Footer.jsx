import { Box, Link, List, ListItem, Typography } from "@mui/material";
import { darkNavyBg, lightNavyBg, navyTextColor } from "../../Common/constants";
import { socialMeadia } from "../../Common/socialPlatforms";
import { contacts } from "../../Common/ContactInfo";
import logo from "../../Common/images/logos/comityCrop.png";
// import ContactContext from "../../context/admin/contactContext";
import useApi from "../../Hooks/useApi";
import { apiContactUrl } from "../../services/api.url";
import React, { useContext, useState } from "react";
import SocialMediaContext from "../../context/admin/socialMediaContext";

// Social Media Photos
import facebook from '../../Common/images/socialIcons/facebook.png'
import facebookActive from '../../Common/images/socialIcons/facebookActive.png'
import instagram from '../../Common/images/socialIcons/instagram.png'
import instagramActive from '../../Common/images/socialIcons/instagramActive.png'
import linkedin from '../../Common/images/socialIcons/linkedin.png'
import linkedinActive from '../../Common/images/socialIcons/linkedinActive.png'

// Contact icons
import { LocationOn, PhoneAndroid,Email } from "@mui/icons-material";
import ContactContext from "../../context/admin/contactContext";


const Footer = () => {

  const socialIcons = (item) => {
    if (item.type === 'facebook') return { img: facebook, activeImg: facebookActive }
    else if (item.type === 'instagram') return { img: instagram, activeImg: instagramActive }
    else if (item.type === 'linkedin') return { img: linkedin, activeImg: linkedinActive }
  }

  const contactIcons = (contactType) => {
    if (contactType === "phone") return <PhoneAndroid />;
    if (contactType === "address") return <LocationOn />;
    if (contactType === "email") return <Email />;
  }

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
        paddingBlock: {
          xs: 2,
          sm: 3,
        },
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        paddingInline: {
          xs: 2,
          sm: 6,
          md: 10,
        },
      }}
    >
      {/* Logo and tag line section */}
      <Box
        sx={{
          pb: {
            xs: 5,
            sm: 0,
          },
          "& > img": {
            width: 50,
            height: 50,
          },
          "& > p": {
            fontSize: 12,
            maxWidth: {
              sm: 250,
              md: 360,
            },
          },
        }}
      >
        <img src={logo} alt="" />
        <Typography variant="h6">Comity Edutech</Typography>
        <Typography>
          <div>
            Harmony for Excellence!
          </div>
        </Typography>

        {/* Social Media Section */}
        <Box
          sx={{
            display: "flex",
            gap: 1,
            pt: 2,
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
                  ": hover": {
                    background: `url(${socialIcons(item).activeImg})`,
                    backgroundSize: "cover",
                  },
                }}
              />
            </Link>
          ))}
        </Box>
      </Box>

      {/* Contact Details Section */}
      <Box>
        <Typography variant="h6">Contact Details</Typography>
        <List
          sx={{
            fontSize: 14,
            "& > li": {
              paddingLeft: 0,
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
