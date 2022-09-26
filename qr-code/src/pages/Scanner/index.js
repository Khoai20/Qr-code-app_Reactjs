import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import CameraScan from "./components/CameraScan";
import UploadQr from "./components/UploadQr";

const ScannerScreen = () => {
  const [upload, setUpload] = useState(false);

  return (
    <Box sx={{ position: "relative" }}>
      <Typography style={{ fontWeight: 600 }} variant="h6">
        QR Code Scanner or Reader
      </Typography>
      {!upload && (
        <>
          <CameraAltIcon
            onClick={() => setUpload(true)}
            sx={{
              position: "absolute",
              right: "0",
              top: "14%",
              "&:hover": { cursor: "pointer", color: "red" },
            }}
          />
          <CameraScan />
        </>
      )}
      {upload && (
        <>
          <RadioButtonCheckedIcon
            onClick={() => setUpload(false)}
            sx={{
              color: "red",
              position: "absolute",
              right: "0",
              top: "14%",
              "&:hover": { cursor: "pointer", color: "#000000" },
            }}
          />
          <UploadQr />
        </>
      )}
    </Box>
  );
};

export default ScannerScreen;
