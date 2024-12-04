import { Box, Container, Typography } from '@mui/material'
import React, { useContext, useEffect } from 'react'
import { navyLogoColor } from '../../../Common/constants'
import { Stars } from '@mui/icons-material'
import IndustryCreate from './IndustryCreate'
import industryContext from '../../../context/admin/industryContext'
import IndustryCard from './IndustryCard'
import IndustryEdit from './IndustryEdit'

const IndustryAdmin = () => {

  const { allIndustries, getAllIndustries } = useContext(industryContext);

  useEffect(() => {
    getAllIndustries();
  }, [])

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
        Industry Admin Panel
      </Typography>

        {/* Create Industry Section */}
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
        Create New Industry Section &rarr;
      </Typography>
      <IndustryCreate />

      {/* All Industries Section */}
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
        All Industry Sections &rarr;
      </Typography>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
          paddingBlock: 2,
        }}
      >
        {
          allIndustries.map(industry =>
            <IndustryCard key={industry._id} industry={industry} /> 
          )
        }
      </Box>

      {/* Edit Modal Section */}
      <IndustryEdit />

    </Container>
  )
}

export default IndustryAdmin