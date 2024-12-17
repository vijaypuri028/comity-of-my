import { ArrowForward } from '@mui/icons-material';
import { Box, Button, Typography, Table, TableBody, TableCell, TableContainer, TableRow, Paper } from '@mui/material';
import { lightNavyBg } from '../../Common/constants';
import fostac from "../../Common/images/projectImages/fostac.png";
import pdf from "../../Common/images/pamphlet/fostacPdf.pdf"

const FOSTAC = () => {
  const project = {
    title: "Food Safety Training and Certification (FoSTaC)",
    description: "Implemented by Comity Edutech Services Private Limited, in collaboration with the Food Safety and Standards Authority of India (FSSAI) to enhance food safety and hygiene practices across the food industry.",
    trainingModules: "Specialized courses for food handlers, supervisors, and business operators in Catering, Manufacturing, etc.",
    focusAreas: [
      "Compliance with food safety regulations and awareness of safe food practices.",
      "Certification: Participants receive FSSAI certification upon successful completion.",
    ],
    impact: "The program builds a culture of food safety, promotes public health, and supports business excellence in the food sector.",
    img: fostac, // Replace this with the actual image path or URL
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
              <TableRow>
                <TableCell
                  sx={{
                    fontWeight: 'bold',
                    fontSize: 16,
                    borderBottom: '1px solid #ddd',
                  }}
                >
                  Training Modules
                </TableCell>
                <TableCell
                  sx={{
                    fontSize: 16,
                    borderBottom: '1px solid #ddd',
                  }}
                >
                  {project.trainingModules}
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell
                  sx={{
                    fontWeight: 'bold',
                    fontSize: 16,
                    borderBottom: '1px solid #ddd',
                  }}
                >
                  Focus Areas
                </TableCell>
                <TableCell
                  sx={{
                    fontSize: 16,
                    borderBottom: '1px solid #ddd',
                  }}
                >
                  <ul style={{ margin: 0, paddingInlineStart: '20px' }}>
                    {project.focusAreas.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell
                  sx={{
                    fontWeight: 'bold',
                    fontSize: 16,
                    borderBottom: '1px solid #ddd',
                  }}
                >
                  Impact
                </TableCell>
                <TableCell
                  sx={{
                    fontSize: 16,
                    borderBottom: '1px solid #ddd',
                  }}
                >
                  {project.impact}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <a href={pdf} download="HSRT Pamphlet download">
        <Button variant="outlined" endIcon={<ArrowForward />} size="small" sx={{ alignSelf: 'start' }}>
          Download
        </Button>
        </a>
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

export default FOSTAC;
