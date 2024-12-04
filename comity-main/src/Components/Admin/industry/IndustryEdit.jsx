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
import industryContext from "../../../context/admin/industryContext";
import IndustryEditCourses from "./IndustryEditCourses";

const IndustryEdit = () => {
  const {
    openEditModal,
    editIndustry,
    setEditIndustry,
    closeEditModal,
    handleUpdate,
    handleDeleteInModal,
    course,
    setCourse,
    handleUpdateAdd,
    handleOpenChildModal,
  } = useContext(industryContext);

  return (
    <Modal
      open={openEditModal}
      sx={{
        overflow: "scroll",
        // marginBlock: 2
      }}
    >
      <FormControl
        sx={{
          width: {
            xs: "95%",
            sm: "80%",
            md: "65%",
          },
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          marginInline: "auto",
          borderRadius: 2,
          background: lightNavyBg,
          p: 2,
          pt: 0,
          display: "flex",
          flexDirection: "column",
          gap: 1,
          "& > label": {
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
            pt: 2
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
              // pt: 2
              mt: 2
            }}
            onClick={closeEditModal}
          />
        </Typography>

        {/* Edit Industry Name */}
        <TextField
          label="Industry Name"
          fullWidth
          sx={{
            background: "white",
          }}
          required
          value={editIndustry?.name}
          onChange={(e) =>
            setEditIndustry({ ...editIndustry, name: e.target.value })
          }
        />

        {/* Edit Industry Description Section */}
        <TextField
          label="Edit Description"
          multiline
          rows={4}
          fullWidth
          sx={{
            background: "white",
          }}
          value={editIndustry?.desc}
          onChange={(e) =>
            setEditIndustry({ ...editIndustry, desc: e.target.value })
          }
        />

        {/* Edit Industry Scheme */}
        <TextField
          label="Industry Scheme"
          fullWidth
          sx={{
            background: "white",
          }}
          required
          value={editIndustry?.scheme}
          onChange={(e) =>
            setEditIndustry({ ...editIndustry, scheme: e.target.value })
          }
        />

        {/* Edit Courses */}
        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            gap: "3%",
            "& > button": {
              height: 56,
              width: "12%",
              fontSize: "large",
              background: "white",
            },
          }}
        >
          <TextField
            disabled
            multiline
            sx={{
              width: "85%",
              background: "white",
            }}
            value={`Courses: ${editIndustry.courses}`}
          />
          <Button variant="outlined" onClick={handleOpenChildModal}>
            Edit
          </Button>
        </Box>
        <IndustryEditCourses />

        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            gap: "3%",
            "& > button": {
              height: 56,
              width: "12%",
              fontSize: "large",
              background: "white",
            },
          }}
        >
          <TextField
            label="Add Course"
            placeholder="Add Courses one by one here..."
            sx={{
              width: "85%",
              background: "white",
            }}
            value={course}
            onChange={(e) => setCourse(e.target.value)}
          />
          <Button variant="outlined" onClick={handleUpdateAdd}>
            Add
          </Button>
        </Box>

        {/* Label and Color Section */}
        <Box
          sx={{
            width: "100%",
            display: "flex",
            gap: "4%",
          }}
        >
          {/* Edit Industry Label */}
          <TextField
            label="Industry Label ( for chart )"
            sx={{
              background: "white",
              width: "48%",
            }}
            required
            value={editIndustry?.label}
            onChange={(e) =>
              setEditIndustry({ ...editIndustry, label: e.target.value })
            }
          />

          {/* Edit Industry Color */}
          <TextField
            label="Industry Color ( for style purpose )"
            style={{
              color: "red",
            }}
            sx={{
              color: "red",
              background: "white",
              width: "48%",
            }}
            required
            value={editIndustry?.color}
            onChange={(e) =>
              setEditIndustry({ ...editIndustry, color: e.target.value })
            }
          />
        </Box>

        {/* Show this on website page radio button */}
        <RadioGroup
          row
          sx={{
            border: `1px solid ${grayBorderColor}`,
            paddingInline: 2,
            borderRadius: 1,
            background: "white",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
          value={editIndustry?.showThis}
          onChange={(e) =>
            setEditIndustry({ ...editIndustry, showThis: e.target.value })
          }
        >
          <Typography component="label">
            Show this on main website &rarr;
          </Typography>
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

        {/* Button Section */}
        <Box>
          {/* Update Button Section */}
          <Button
            variant="outlined"
            sx={{
              maxWidth: 120,
              textTransform: "none",
              mr: 1,
              background: "white",
            }}
            onClick={() => handleUpdate(editIndustry)}
          >
            Update
          </Button>

          {/* Delete Button */}
          <Button
            variant="outlined"
            color="warning"
            sx={{
              maxWidth: 120,
              textTransform: "none",
              ml: 1,
              background: "white",
            }}
            onClick={() => handleDeleteInModal(editIndustry._id)}
          >
            Delete
          </Button>
        </Box>
      </FormControl>
    </Modal>
  );
};

export default IndustryEdit;
