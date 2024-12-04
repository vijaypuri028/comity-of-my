import React, { useContext } from "react";
import {
  Box,
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
import industryContext from "../../../context/admin/industryContext";

const IndustryCreate = () => {
  const { course, setCourse, industryCreate, setIndustryCreate, handleCreate, handleAdd } = useContext(industryContext);


  return (
    <FormControl
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
      {/* Add Industry Name */}
      <Typography component="label">Industry Name * &rarr;</Typography>
      <TextField
        label="name"
        fullWidth
        sx={{
          background: "white",
        }}
        required
        value={industryCreate?.name}
        onChange={(e) =>
          setIndustryCreate({ ...industryCreate, name: e.target.value })
        }
      />

      {/* Add Industry Description */}
      <Typography component="label">Industry Description * &rarr;</Typography>
      <TextField
        label="description"
        multiline
        rows={4}
        required
        fullWidth
        sx={{
          background: "white",
        }}
        value={industryCreate?.desc}
        onChange={(e) =>
          setIndustryCreate({ ...industryCreate, desc: e.target.value })
        }
      />

      {/* Add Industry's Scheme Name */}
      <Typography component="label">Scheme * &rarr;</Typography>
      <TextField
        label="scheme"
        fullWidth
        sx={{
          background: "white",
        }}
        required
        value={industryCreate?.scheme}
        onChange={(e) =>
          setIndustryCreate({ ...industryCreate, scheme: e.target.value })
        }
      />

      {/* Add Courses */}
    <Typography component="label">
        Industry Courses &rarr;
    </Typography>
    <TextField
        fullWidth
        disabled
        multiline
        sx={{
          background: "white",
        }}
        defaultValue={industryCreate.courses}
      />
      <Box sx={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        gap: '3%',
        '& > button': {
            height: 56,
            width: '12%',
            fontSize: 'large',
            background: 'white'
        }
      }}>
      <TextField
        label="Add Course"
        placeholder="Add Courses one by one here..."
        sx={{
          width: '85%',
          background: "white",
        }}
        value={course}
        onChange={(e) => setCourse(e.target.value)}
      />
      <Button variant="outlined" onClick={handleAdd} >
        Add
      </Button>
      </Box>

      {/* Add Industry Label */}
      <Typography component="label">
        Industry Label * (It will desplay on chart) &rarr;
      </Typography>
      <TextField
        label="label"
        fullWidth
        sx={{
          background: "white",
        }}
        required
        value={industryCreate?.label}
        onChange={(e) =>
          setIndustryCreate({ ...industryCreate, label: e.target.value })
        }
      />

      {/* Add Industry Color */}
      <Typography component="label">
        Color Industry (It will be used for styling this particular industry)
        &rarr;
      </Typography>
      <TextField
        label="#hex color code"
        type="text"
        fullWidth
        sx={{
          background: "white",
        }}
        value={industryCreate?.color}
        onChange={(e) =>
          setIndustryCreate({ ...industryCreate, color: e.target.value })
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
        // defaultValue={true}
        value={industryCreate?.showThis}
        onChange={(e) =>
          setIndustryCreate({ ...industryCreate, showThis: e.target.value })
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

export default IndustryCreate;
