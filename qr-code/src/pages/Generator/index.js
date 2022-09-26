import { Box, Typography } from "@mui/material";
import React from "react";

const GeneratorScreen = () => {
  return (
    <Box>
      <Typography style={{ fontWeight: 600 }} variant="h6">
        QR Code Generator
      </Typography>
      <Typography variant="subtitle2">
        Paste a url or enter text to create QR code
      </Typography>
    </Box>
  );
};

export default GeneratorScreen;
