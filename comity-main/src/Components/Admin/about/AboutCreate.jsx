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
import aboutContext from "../../../context/admin/aboutContext";

const AboutCreate = () => {
  const { aboutCreate, handleCreate, setAboutCreate } =
    useContext(aboutContext);

  return (
    <FormControl onSubmit={handleCreate}
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
      {/* Add Content Section */}
      <Typography component="label">
        Add content for new About section &rarr;
      </Typography>
      <TextField
        label="Content"
        multiline
        rows={5}
        fullWidth
        sx={{
          background: "white",
        }}
        value={aboutCreate?.content}
        onChange={(e) =>
          setAboutCreate({ ...aboutCreate, content: e.target.value })
        }
      />

      {/* Show this on website page radio button */}
      <Typography component="label">
        Show this on main website &rarr;
      </Typography>
      <RadioGroup
        row
        sx={{
          border: `1px solid ${grayBorderColor}`,
          paddingInline: 2,
          borderRadius: 1,
          background: "white",
        }}
        defaultValue={true}
        value={aboutCreate?.showThis}
        onChange={(e) =>
          setAboutCreate({ ...aboutCreate, showThis: e.target.value })
        }
      >
        <FormControlLabel
          value={true}
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
          label="YES"
        />
        <FormControlLabel
          value={false}
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
          label="NO"
        />
      </RadioGroup>

      {/* Create Button Section */}
      <Button
        variant="contained"
        size="large"
        type="submit"
        sx={{
          maxWidth: 120,
          textTransform: "none",
        }}
        onClick={handleCreate}
      >
        Create
      </Button>
    </FormControl>
  );
};

export default AboutCreate;
