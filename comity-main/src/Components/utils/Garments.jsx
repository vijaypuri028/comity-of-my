// import { ArrowForward } from '@mui/icons-material';
import { Box,
    //  Button,
     Typography, Table, TableBody, TableCell, TableContainer, TableRow, Paper } from '@mui/material';
import { lightNavyBg } from '../../Common/constants';
// import garmentImage from "../../Common/images/projectImages/garmentTraining.png";
// import pdf from "../../Common/images/pamphlet/garmentTrainingPdf.pdf";

const Garments = () => {
  const program = {
    title: "Garment & Apparel Training Program",
    introduction: "Empowering youth through skill development, our Garment & Apparel Training Program bridges the gap between traditional craftsmanship and modern industry needs. This placement-oriented program equips learners with practical expertise for sustainable employment in the dynamic textiles and garment sectors.",
    description: "Our program develops an industry-ready workforce, preserves traditional crafts, enhances skills to meet industry standards, and opens doors to lucrative careers in textiles and garments.",
    courses: [
      "Sewing Machine Operator: Master precision stitching with advanced techniques.",
      "Garment Checker: Learn quality control and garment inspection.",
      "Pattern Maker: Design accurate patterns using modern tools.",
      "Handicraft Design: Develop unique handcrafted garments and accessories.",
    ],
    benefits: [
      "Placement-oriented training for organized sectors.",
      "Hands-on learning guided by industry experts.",
      "Industry-recognized certifications to boost employability.",
    ],
    // img: garmentImage, // Replace this with the actual image path or URL
  };

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap-reverse',
        marginBottom:"20px",
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
            sm: '80%',
          },
          margin:"auto",
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
          {program.title}
        </Typography>

        <Typography sx={{ fontSize: 16, marginBottom: 2 }}>{program.introduction}</Typography>

        <Typography sx={{ fontSize: 16, marginBottom: 2 }}>{program.description}</Typography>

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
                  Courses Offered
                </TableCell>
                <TableCell
                  sx={{
                    fontSize: 16,
                    borderBottom: '1px solid #ddd',
                  }}
                >
                  <ul style={{ margin: 0, paddingInlineStart: '20px' }}>
                    {program.courses.map((course, index) => (
                      <li key={index}>{course}</li>
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
                  Benefits
                </TableCell>
                <TableCell
                  sx={{
                    fontSize: 16,
                    borderBottom: '1px solid #ddd',
                  }}
                >
                  <ul style={{ margin: 0, paddingInlineStart: '20px' }}>
                    {program.benefits.map((benefit, index) => (
                      <li key={index}>{benefit}</li>
                    ))}
                  </ul>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        {/* <a href={"#"} download="Garment & Apparel Training Program Pamphlet">
          <Button variant="outlined" endIcon={<ArrowForward />} size="small" sx={{ alignSelf: 'start' }}>
            Download
          </Button>
        </a> */}
      </Box>

      {/* Image Section */}
      {/* <Box
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
          src={program.img}
          alt={program.title}
          style={{
            width: '100%',
            maxWidth: 400,
            borderRadius: 8,
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
          }}
        />
      </Box> */}
    </Box>
  );
};

export default Garments;
