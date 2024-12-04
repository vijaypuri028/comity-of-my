import React, { useContext } from "react";
import {
  Button,
  FormControl,
  FormControlLabel,
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
import ContactContext from "../../../context/admin/contactContext";

const ContactCreate = () => {
  const { contactCreate, handleCreate, setContactCreate } =
    useContext(ContactContext);

  return (
    <FormControl
      onSubmit={handleCreate}
      sx={{
        width: "90%",
        marginInline: "auto",
        borderRadius: 2,
        background: lightNavyBg,
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

      <Typography component="label">Select your type: &rarr;</Typography>
      <RadioGroup
        row
        sx={{
          border: `1px solid ${grayBorderColor}`,
          paddingInline: 2,
          borderRadius: 1,
          background: "white",
        }}
        value={contactCreate?.type}
        onChange={(e) =>
          setContactCreate({ ...contactCreate, type: e.target.value })
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

      <TextField
        label="Mobile number / Address"
        multiline
        rows={3}
        fullWidth
        sx={{
          background: "white",
        }}
        value={contactCreate?.content}
        onChange={(e) =>
          setContactCreate({ ...contactCreate, content: e.target.value })
        }
      />

      <Button variant="contained" size="large" onClick={handleCreate} sx={{
          maxWidth: 120,
          textTransform: "none",
        }}>
        Create
      </Button>
    </FormControl>
  );
};

export default ContactCreate;
