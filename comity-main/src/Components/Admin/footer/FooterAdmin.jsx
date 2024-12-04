import React, { useState } from "react";
import { Box } from "@mui/material";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import ContactAdmin from "../contact/ContactAdmin";
import SocialMediaAdmin from "../SocialMedia/SocialMediaAdmin";

const FooterAdmin = () => {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ 
            borderBottom: 1, 
            borderColor: "divider",
            display: 'flex',
            justifyContent: 'center'
          }}>
            <TabList onChange={handleChange} aria-label="admin tabs" >
              <Tab label="Contact Admin" value="1" />
              <Tab label="Social Media Admin" value="2" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <ContactAdmin />
          </TabPanel>
          <TabPanel value="2">
            <SocialMediaAdmin />
          </TabPanel>
        </TabContext>
      </Box>
    </>
  );
};

export default FooterAdmin;
