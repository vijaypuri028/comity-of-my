import { Box } from "@mui/material"
import Industry from "../utils/Industry"
import { lightNavyBg } from "../../Common/constants"


const SecondBlock = ({ allShowIndustries }) => {
  return (
  <Box sx={{
    borderBottom: `1px solid ${lightNavyBg}`

  }}>
    {
        allShowIndustries?.map((industry, index) => 
            <Industry key={index} industry={industry} index={index}  />
        )
    }
  </Box>
  )
}

export default SecondBlock