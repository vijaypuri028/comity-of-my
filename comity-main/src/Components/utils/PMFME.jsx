import { ArrowForward } from '@mui/icons-material';
import { Box, Button, Typography, Table, TableBody, TableCell, TableContainer, TableRow, Paper } from '@mui/material';
import { lightNavyBg } from '../../Common/constants';
import pmfme from "../../Common/images/projectImages/PMFME.png";

const PMFME = () => {
  const project = {
    title: "Pradhan Mantri Formalization of Micro Food Processing Enterprises (PMFME)",
    aim: "To enhance the competitiveness of existing individual micro-enterprises in the unorganized segment of the food processing industry and promote formalization of the sector.",
    supportFor: [
      "Farmer Producer Organizations (FPOs)",
      "Self Help Groups (SHGs)",
      "Producers Cooperatives along their entire value chain",
    ],
    objectives: [
        //   "Increased access to credit by existing micro food processing entrepreneurs, FPOs, Self Help Groups, and Co-operatives.",
        //   "Strengthening branding & marketing.",
      "Support for the transition of existing 2,00,000 enterprises into the formal framework.",
      "Increased access to common processing facility, laboratories, storage, packaging, marketing, and incubation services.",
      "Strengthening of institutions, research, and training in the food processing sector.",
      "Increased access for enterprises to professional and technical support.",
    ],
    img: pmfme, // Replace with the actual image path or URL
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
        minHeight: '500px', // Fixed height for uniformity
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
          justifyContent: 'space-between', // Ensures even spacing between content
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
          {project.title}
        </Typography>

        <Typography sx={{ fontSize: 16, marginBottom: 2 }}>{project.aim}</Typography>

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
                  Support For
                </TableCell>
                <TableCell
                  sx={{
                    fontSize: 16,
                    borderBottom: '1px solid #ddd',
                  }}
                >
                  <ul style={{ margin: 0, paddingInlineStart: '20px' }}>
                    {project.supportFor.map((item, index) => (
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
                  Objectives
                </TableCell>
                <TableCell
                  sx={{
                    fontSize: 16,
                    borderBottom: '1px solid #ddd',
                  }}
                >
                  <ul style={{ margin: 0, paddingInlineStart: '20px' }}>
                    {project.objectives.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </TableCell>
              </TableRow>
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

export default PMFME;
