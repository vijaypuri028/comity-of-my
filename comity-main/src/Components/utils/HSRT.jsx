import { ArrowForward } from '@mui/icons-material';
import { Box, Button, Typography, Table, TableBody, TableHead, TableCell, TableContainer, TableRow, Paper } from '@mui/material';
import { lightNavyBg } from '../../Common/constants';
import { Download } from "@mui/icons-material";
import hsrt from '../../Common/images/projectImages/hsrt.jpg';
import f1 from "../../Files/Annual Taregt 2022-23.xlsx"
import f2 from "../../Files/Additional Target 2022-23 Data.xlsx"
import f3 from "../../Files/Annual Target 2023-24.xlsx"
import f4 from "../../Common/images/pamphlet/WhatsApp Image 2024-12-09 at 18.10.58_48dd704a.jpg"
const HSRT = () => {
  const pdfLinks = {
    pdf1: f1,
    pdf2: f2,
    pdf3: f3,
    pdf4: f4,
  };
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
        flexDirection: {
          xs: 'column', // Image Section moves to the bottom for mobile
          sm: 'row',           // Side-by-side layout for larger screens
        },
        marginBottom:"20px",
        marginTop:"20px",
        background: lightNavyBg,
        paddingInline: {
          xs: 2,
          sm: 6,
          md: 10,
        },
        paddingBlock: 4,
        borderRadius: 2,
        boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
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
        <a href={pdfLinks.pdf4} download="HSRT Pamphlet download">
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
        <TableContainer sx={{ marginBottom: 2 }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              marginBottom: 2, // Space between the image and table
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

          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: 'bold', color: '#333' }}>
                  Project - Hunar Se Rozgar Tak
                </TableCell>
                <TableCell sx={{ fontWeight: 'bold', color: '#333' }}>
                  Action
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Annual Target 2022-23</TableCell>
                <TableCell>
                  <a href={pdfLinks.pdf1} download="Annual_Target_2022-23">
                    <Button
                      variant="contained"
                      color="primary"
                      startIcon={<Download />}
                    />
                  </a>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Additional Target 2022-23</TableCell>
                <TableCell>
                  <a href={pdfLinks.pdf2} download="Additional_Target_2022-23">
                    <Button
                      variant="contained"
                      color="primary"
                      startIcon={<Download />}
                    />
                  </a>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Annual Target 2023-24</TableCell>
                <TableCell>
                  <a href={pdfLinks.pdf3} download="Annual_Target_2023-24">
                    <Button
                      variant="contained"
                      color="primary"
                      startIcon={<Download />}
                    />
                  </a>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>

  );
};

export default HSRT;
