import { ArrowForward } from '@mui/icons-material';
import { Box, Button, Typography, Table, TableBody, TableCell, TableContainer, TableRow, Paper } from '@mui/material';
import { lightNavyBg } from '../../Common/constants';
import hsrt from '../../Common/images/projectImages/hsrt.jpg';

const HSRT = () => {
  const project = {
    title: "Hunar Se Rozgar Tak (HSRT)",
    highlights: {
      "Courses Offered": ["Front-Office Associate", "Food & Beverage Service", "Multi-cuisine Cook", "Room-Attendant"],
      Benefits: ["Free training with materials and uniforms.", "Stipend support after the program.", "Placement support for successful trainees."],
      Impact: ["The program equips participants with job-ready skills, driving employment opportunities in the hospitality industry while contributing to inclusive economic growth."],
    },
    description: "Implemented by Comity Edutech Services Private Limited in collaboration with the Ministry of Tourism to empower economically weaker youth with free vocational training in hospitality and tourism.",
    img: hsrt, // Replace with your image path or URL
  };

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap-reverse',
        background: lightNavyBg,
        paddingInline: {
          xs: 2,
          sm: 6,
          md: 10,
        },
        paddingBlock: 4,
        borderRadius: 2,
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
      }}
    >
      {/* Text Section */}
      <Box
        sx={{
          width: {
            xs: '100%',
            sm: '52%',
          },
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
          {project.title}
        </Typography>

        <Typography sx={{ fontSize: 16, marginBottom: 2 }}>{project.description}</Typography>

        <TableContainer component={Paper} sx={{ boxShadow: 'none' }}>
          <Table>
            <TableBody>
              {Object.entries(project.highlights).map(([key, value]) => (
                <TableRow key={key}>
                  <TableCell
                    sx={{
                      fontWeight: 'bold',
                      fontSize: 16,
                      borderBottom: '1px solid #ddd',
                    }}
                  >
                    {key}
                  </TableCell>
                  <TableCell
                    sx={{
                      fontSize: 16,
                      borderBottom: '1px solid #ddd',
                    }}
                  >
                    {Array.isArray(value) ? (
                      <ul style={{ margin: 0, paddingInlineStart: '20px' }}>
                        {value.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    ) : (
                      value
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Button variant="outlined" endIcon={<ArrowForward />} size="small" sx={{ alignSelf: 'start' }}>
          Explore
        </Button>
      </Box>

      {/* Image Section */}
      <Box
        sx={{
          width: {
            xs: '100%',
            sm: '48%',
          },
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 2,
        }}
      >
        <img
          src={project.img}
          alt={project.title}
          style={{
            width: '100%',
            maxWidth: 400,
            borderRadius: 8,
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
          }}
        />
      </Box>
    </Box>
  );
};

export default HSRT;
