import React from "react";
import { Box, Button, Container, Input, Typography } from "@mui/material";
import { lightNavyBg, navyLogoColor } from "../../../Common/constants";
import { Stars } from "@mui/icons-material";
import useApi from "../../../Hooks/useApi"
import { homeImgCarouselUrl } from "../../../services/api.url";

const HomeCarouselAdmin = () => {

    const uploadImgService = useApi(homeImgCarouselUrl.uploadImgRoute);

    const handleUpload = async () => {
        try {
            await uploadImgService.call();
        } catch (err) {
            console.log(err.message);
        }
    }

  return (
    <Container
      sx={{
        "& > h2": {
          paddingBlock: 2,
          textAlign: "center",
        },
      }}
    >
      <Typography variant="h2" color={navyLogoColor}>
        Home Image Slider Admin Panel
      </Typography>

      {/* Create Img slider Section */}
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
        Add a new image &rarr;
      </Typography>
      <Box sx={{
        width: "90%",
        marginInline: "auto",
        '& > form': {
            width: "100%",
            height: 100,
            background: lightNavyBg,
            border: `3px dashed ${navyLogoColor}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }
      }}>

        <form encType="multipart/formdata" method="POST" action="http://localhost:4000/carousel/add" >
            <Input type="file" name="img" />
            <button type="submit">submit</button>
        </form>
        <Button onClick={handleUpload} >
            Upload
        </Button>
      </Box>
      

      {/* All Images Section */}
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
        All Image Sections &rarr;
      </Typography>


      {/* <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
          paddingBlock: 2,
        }}
      >
        {allAbouts.map((about) => (
          <AboutCard key={about._id} about={about} />
        ))}
      </Box> */}

      {/* Edit Modal Section */}
      {/* <AboutEdit /> */}
    </Container>
  )
}

export default HomeCarouselAdmin