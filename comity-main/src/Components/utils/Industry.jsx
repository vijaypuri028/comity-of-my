import { SquareRounded } from "@mui/icons-material"
import { Box, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material"
import { darkNavyBg, lightNavyBg } from "../../Common/constants"


const Industry = ({ industry, index }) => {
  return (
    <Box sx={{
        color: index%2===0 ? lightNavyBg : darkNavyBg,
        background: index%2===0 ? darkNavyBg: lightNavyBg,
        paddingBlock: {
            xs: 2,
            sm: 5,
            md: 7
        },
        paddingInline: {
            xs: 2,
            sm: 6,
            md: 10
        }
    }}>

        <Box sx={{
            '& > p': {
                paddingBlock: 1,
            },
            '& > h6': {
                paddingBlock: 1,
            },
        }}>
            <Typography variant="h4" sx={{
                fontSize: {
                    xs: 26,
                    sm: 30,
                    md: 34
                },
            }} >
                <SquareRounded sx={{ color: industry.color }} /> {industry.name} &rarr;
            </Typography>

            <Typography sx={{
                fontSize: {
                    xs: 16,
                    sm: 17,
                    md: 18
                },
            }} >
            {industry.desc}
            </Typography>

            <Typography variant="h6" >
            Scheme  &rarr; {industry.scheme}
            </Typography>

            <Typography variant="h6" sx={{
                mb: -1
            }}>
                Courses Offered  &rarr;
            </Typography>
            <List component={'ol'} sx={{
                '& > li': {
                    paddingBlock: 0,
                    // border: '1px solid red'
                }
            }}>
                {
                    industry.courses.map((name, i) =>
                        <ListItem key={i}>
                            <ListItemIcon sx={{
                                color: index%2===0 ? lightNavyBg : darkNavyBg
                            }}>{i+1}.</ListItemIcon>
                            <ListItemText>{name}</ListItemText>
                        </ListItem> 
                    )
                }
            </List>
            <Typography>
            Training Campus by Comity Edutech Services Private Limited.
            </Typography>
        </Box>
    </Box>
  )
}

export default Industry