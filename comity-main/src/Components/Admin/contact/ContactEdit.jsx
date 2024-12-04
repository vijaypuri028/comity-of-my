import React, { useContext } from "react";
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  Modal,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import {
  grayBorderColor,
  greenColor,
  lightNavyBg,
  navyLogoColor,
  redColor,
} from "../../../Common/constants";
import { CloseRounded, Stars } from "@mui/icons-material";
import ContactContext from "../../../context/admin/contactContext";

const ContactEdit = () => {
  const {
    openEditModal,
    editContact,
    setEditContact,
    closeEditModal,
    handleUpdate,
    handleDeleteInModal,
  } = useContext(ContactContext);

  return (
    <Modal open={openEditModal}>
      <FormControl
        sx={{
          width: {
            xs: "90%",
            sm: "70%",
            md: "50%",
          },
          marginInline: "auto",
          borderRadius: 2,
          background: lightNavyBg,
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          p: 3,
          display: "flex",
          flexDirection: "column",
          gap: 1,
          "& > label": {
            fontSize: 18,
            color: navyLogoColor,
            p: 1,
            background: "white",
            border: `1px solid ${grayBorderColor}`,
            borderRadius: 1,
          },
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
          Edit and customize as you want &rarr;
          <CloseRounded
            sx={{
              position: "absolute",
              top: 0,
              right: 0,
              fontSize: 30,
              cursor: "pointer",
              color: redColor,
              borderRadius: 2,
              ":hover": {},
            }}
            onClick={closeEditModal}
          />
        </Typography>

          {/* Show this on website page radio button */}
          <Typography component="label">
            Select your type &rarr;
          </Typography>
          <RadioGroup
            row
            sx={{
              border: `1px solid ${grayBorderColor}`,
              paddingInline: 2,
              borderRadius: 1,
              background: "white",
            }}
            value={editContact?.type}
            onChange={(e) =>
              setEditContact({ ...editContact, type: e.target.value })
            }
          >
            <FormControlLabel
              value={"phone"}
              control={
                <Radio
                  sx={{
                    color: greenColor,
                    "&.Mui-checked": {
                      color: greenColor,
                    },
                  }}
                />
              }
              label="Phone"
            />
            <FormControlLabel
              value={"address"}
              control={
                <Radio
                  sx={{
                    color: redColor,
                    "&.Mui-checked": {
                      color: redColor,
                    },
                  }}
                />
              }
              label="Address"
            />
          </RadioGroup>
          
        {/* Edit Content Section */}
        <Typography component="label">Edit Content &rarr;</Typography>
        <TextField
          label="Content"
          multiline
          rows={5}
          fullWidth
          sx={{
            background: "white",
          }}
          value={editContact?.content}
          onChange={(e) =>
            setEditContact({ ...editContact, content: e.target.value })
          }
        />


        {/* Button Section */}
        <Box>
          {/* Create Button Section */}
          <Button
            variant="outlined"
            size="large"
            sx={{
              maxWidth: 120,
              textTransform: "none",
              mr: 1,
              background: "white",
            }}
            onClick={() => handleUpdate(editContact)}
          >
            Update
          </Button>
          <Button
            variant="outlined"
            size="large"
            color="warning"
            sx={{
              maxWidth: 120,
              textTransform: "none",
              ml: 1,
              background: "white",
            }}
            onClick={() => handleDeleteInModal(editContact._id)}
          >
            Delete
          </Button>
        </Box>
      </FormControl>
    </Modal>
  );
};

export default ContactEdit;

