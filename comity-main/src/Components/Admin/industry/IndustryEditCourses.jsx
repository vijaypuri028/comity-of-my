import { Box, Button, Modal, Typography } from "@mui/material";
import React, { useContext } from "react";
import {
  grayBorderColor,
  lightNavyBg,
  navyLogoColor,
  redColor,
} from "../../../Common/constants";
import { CloseRounded, Stars } from "@mui/icons-material";
import industryContext from "../../../context/admin/industryContext";

const IndustryEditCourses = () => {
  const {
    openChildModal,
    closeChildModal,
    editIndustry,
    handleDeleteInChildModal,
  } = useContext(industryContext);
  return (
    <Modal
      open={openChildModal}
      sx={{
        overflow: "scroll",
      }}
    >
      <Box
        sx={{
          width: {
            xs: "90%",
            sm: "75%",
            md: "60%",
          },
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          background: lightNavyBg,
          p: 2,
          borderRadius: 2,
        }}
      >
        <Typography
          variant="h5"
          sx={{
            pb: 2,
            color: navyLogoColor,
            display: "flex",
            alignItems: "center",
            gap: 1,
            position: "relative",
            pr: 4,
          }}
        >
          <Stars />
          Edit Courses &rarr;
          <CloseRounded
            sx={{
              position: "absolute",
              top: 0,
              right: 0,
              fontSize: 30,
              cursor: "pointer",
              color: redColor,
              borderRadius: 2,
            }}
            onClick={closeChildModal}
          />
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            "& > div": {
              border: `1px solid ${grayBorderColor}`,
              p: 2,
              borderRadius: 2,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              "& > p": {
                color: navyLogoColor,
              },
            },
          }}
        >
          {editIndustry?.courses?.map((course, index) => (
            <Box key={index}>
              <Typography>
                {index + 1}. {course}
              </Typography>
              <Button
                variant="outlined"
                color="warning"
                size="small"
                onClick={() => handleDeleteInChildModal(index)}
              >
                Delete
              </Button>
            </Box>
          ))}
        </Box>
      </Box>
    </Modal>
  );
};

export default IndustryEditCourses;
