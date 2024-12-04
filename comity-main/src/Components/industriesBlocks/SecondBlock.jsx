import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { Download } from "@mui/icons-material";
import { lightNavyBg } from "../../Common/constants";

import f1 from "../../Files/Annual Taregt 2022-23.xlsx"
import f2 from "../../Files/Additional Target 2022-23 Data.xlsx"
import f3 from "../../Files/Annual Target 2023-24.xlsx"

const SecondBlock = ({ allShowIndustries }) => {
  const pdfLinks = {
    pdf1: f1,
    pdf2: f2,
    pdf3: f3,
  };

  return (
    <Box
      sx={{
        borderBottom: `1px solid ${lightNavyBg}`,
        padding: 3,
        backgroundColor: "#f3f4f6",
        borderRadius: 2,
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Typography
        variant="h6"
        sx={{
          fontWeight: "bold",
          marginBottom: 2,
          color: lightNavyBg,
        }}
      >
        Industry Data
      </Typography>
      <TableContainer sx={{ marginBottom: 2 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold", color: "#333" }}>
                Industry Name
              </TableCell>
              <TableCell sx={{ fontWeight: "bold", color: "#333" }}>
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
                  >
                    Download
                  </Button>
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
                  >
                    Download 
                  </Button>
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
                  >
                    Download 
                  </Button>
                </a>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default SecondBlock;
