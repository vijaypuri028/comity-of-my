import React, { useContext } from 'react'
import navContext from '../../../context/admin/navContext'
import { grayBorderColor, greenColor, lightNavyBg, navyLogoColor, redColor } from '../../../Common/constants';
import { Box, Button, FormControl, FormControlLabel, Modal, Radio, RadioGroup, TextField, Typography } from '@mui/material';
import { CloseRounded, Stars } from '@mui/icons-material';

const NavEdit = () => {

  const { openEditModal, closeEditModal, editNav, setEditNav, handleUpdate } = useContext(navContext);

  return (
    <Modal open={openEditModal}>
      <FormControl
        sx={{
          width: {
            xs: '90%',
            sm: '70%',
            md: '50%'
          },
          marginInline: "auto",
          borderRadius: 2,
          background: lightNavyBg,
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
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
        <Typography variant="h5" sx={{
         pb: 2,
         color: navyLogoColor,
         display: 'flex',
         alignItems: 'center',
         gap: 1,
         position: 'relative',
         pr: 4,
      }} >
        <Stars />
        Edit and customize as you want &rarr;
        <CloseRounded sx={{
            position: 'absolute',
            top: 0,
            right: 0,
            fontSize: 30,
            cursor: 'pointer',
            color: redColor,
            borderRadius: 2,
        }} onClick={closeEditModal} />
        </Typography>

        {/* Edit Content Section */}
        <Typography component="label">
          Edit Nav Route Name &rarr;
        </Typography>
        <TextField
          label="Name"
          fullWidth
          sx={{
            background: "white",
          }}
          value={editNav?.title}
          onChange={(e) =>
            setEditNav({ ...editNav, title: e.target.value })
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
          value={editNav?.showThis}
          onChange={(e) =>
            setEditNav({ ...editNav, showThis: e.target.value })
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
              background: 'white'
            }}
            onClick={() => handleUpdate(editNav)}
            >
          Update
        </Button>
        </Box>
      </FormControl>
    </Modal>
  )
}

export default NavEdit